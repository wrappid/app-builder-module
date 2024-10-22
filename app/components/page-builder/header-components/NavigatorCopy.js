/**
 * @fileoverview A React-based component navigator with drag-and-drop functionality
 * Implements an object-oriented approach to managing component hierarchies
 */

import { useState, useCallback, useEffect, useContext } from "react";

import {
  CoreAlert,
  CoreBox, CoreChip, CoreClasses, CoreCollapse, CoreDialogContext, CoreIcon, CoreIconButton, CoreList, CoreListItem, CoreListItemButton, CoreListItemIcon, CoreListItemText, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";
 
/**
  * Represents a node in the component tree
  * Handles node-specific operations and data management
  */
class ComponentNode {
  constructor(data) {
    this.data = data;
  }
 
  /**
    * Checks if the node has any children or placeholders
    * @returns {boolean} True if the node has children or placeholders
    */
  hasChildren() {
    return Boolean(
      (this.data.children && this.data.children.length > 0) ||
       (this.data.placeholders && this.data.placeholders.length > 0)
    );
  }
 
  /**
    * Creates a deep clone of the node and its children
    * @returns {Object} A deep clone of the node
    */
  clone() {
    return ComponentNode.deepClone(this.data);
  }
 
  /**
    * Static method to create a deep clone of a node structure
    * @param {Object} node - The node to clone
    * @returns {Object} A deep clone of the node
    */
  static deepClone(node) {
    if (!node) return null;
    const clone = { ...node };
     
    if (node.children) {
      clone.children = node.children.map(child => ComponentNode.deepClone(child));
    }
    if (node.placeholders) {
      clone.placeholders = node.placeholders.map(placeholder => ComponentNode.deepClone(placeholder));
    }
     
    return clone;
  }
}
 
/**
  * Manages the navigation tree structure and operations
  * Handles node movement, hierarchy updates, and path management
  */
class NavigationTreeManager {
  /**
    * Retrieves a node and its parent information at a given path
    * @param {Object} root - The root object of the tree
    * @param {Array} path - The path to the target node
    * @returns {Object} Object containing node, parent, key, and index information
    */
  static getNodeAndParent(root, path) {
    let current = root;
    let parent = null;
    let key = null;
    let index = -1;
     
    let i = path[0] === "root" ? 1 : 0;
     
    while (i < path.length - 2) {
      const type = path[i];
      const idx = path[i + 1];

      parent = current;
      current = current[type]?.[idx];
      if (!current) return { index: -1, key: null, node: null, parent: null };
      i += 2;
    }
     
    if (i < path.length) {
      key = path[i];
      index = path[i + 1];
      parent = current;
      current = current[key]?.[index];
    }
     
    return { index, key, node: current, parent };
  }
 
  /**
    * Checks if source path is a parent of target path
    * @param {Array} sourcePath - The path of the source node
    * @param {Array} targetPath - The path of the target node
    * @returns {boolean} True if source is a parent of target
    */
  static isParentOfTarget(sourcePath, targetPath) {
    const sourceStr = sourcePath.join(".");
    const targetStr = targetPath.join(".");

    return targetStr.startsWith(sourceStr);
  }
 
  /**
    * Handles moving nodes within the tree
    * @param {Object} prevData - The current tree data
    * @param {Array} sourcePath - Path of the node being moved
    * @param {Array} targetPath - Path of the destination
    * @param {Object} sourceNode - The node being moved
    * @param {boolean} preserveChildren - Whether to preserve children during move
    * @returns {Object} Updated tree data
    */
  static handleMove(prevData, sourcePath, targetPath, sourceNode, preserveChildren = true) {
    const newData = JSON.parse(JSON.stringify(prevData));
     
    const { node: sourceOriginal, parent: sourceParent, key: sourceKey, index: sourceIndex } = 
       this.getNodeAndParent(newData, sourcePath);
     
    const { node: targetNode } = this.getNodeAndParent(newData, targetPath);
     
    if (!sourceParent || !targetNode) return prevData;
 
    // Remove source from its original position
    sourceParent[sourceKey].splice(sourceIndex, 1);
 
    // Handle parent-to-child moves
    if (!preserveChildren && sourceOriginal.children) {
      sourceOriginal.children.forEach(child => {
        sourceParent[sourceKey].splice(sourceIndex, 0, child);
      });
    }
 
    // Create node to add with proper structure
    const nodeToAdd = preserveChildren ? 
      ComponentNode.deepClone(sourceOriginal) : 
      { ...sourceNode, children: [] };
 
    // Add to target's children array
    if (!targetNode.children) targetNode.children = [];
    targetNode.children.push(nodeToAdd);
 
    return newData;
  }
}
 
/**
  * React component representing a node in the tree UI
  * Handles UI interactions and drag-drop operations for a single node
  */
const TreeNode = ({ node, level = 0, path = [], onDrop }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
 
  const componentNode = new ComponentNode(node);

  if (!node) return null;
 
  /**
    * Handles the start of a drag operation
    * @param {DragEvent} event - The drag event
    */
  const handleDragStart = (event) => {
    if (!node.component) {
      event.preventDefault();
      return;
    }
 
    event.stopPropagation();
    const nodeData = {
      node: {
        ...node,
        originalPath: path,
      }
    };

    event.dataTransfer.setData("text/plain", JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  };
 
  // Event handler implementations
  const handleDragEnd = () => setIsDragging(false);
   
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
  };
 
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
 
    try {
      const data = JSON.parse(event.dataTransfer.getData("text/plain"));

      onDrop(data.node.originalPath, path, data.node);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Drop error:", error);
    }
  };
 
  // Render the node UI
  return (
    <CoreBox 
      styleClasses={[CoreClasses.PADDING.PL1]}>
      <CoreListItem
        disablePadding
        styleClasses={[node.component ? CoreClasses.CURSOR.CURSOR_GRAB : CoreClasses.CURSOR.CURSOR_DEFAULT, isDragging ? CoreClasses.OPACITY.OPACITY_50 : CoreClasses.OPACITY.OPACITY_100]}
        draggable={!!node.component}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <CoreListItemButton
          onClick={() => setIsExpanded(!isExpanded)}
          dense
        >
          {componentNode.hasChildren() && (
            <CoreListItemIcon>
              <CoreIconButton size="small">
                {isExpanded ? <CoreIcon icon="expand_more"/> : <CoreIcon icon="chevron_right"/>}
              </CoreIconButton>
            </CoreListItemIcon>
          )}
 
          <CoreListItemText
            primary={
              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, componentNode.hasChildren() ? CoreClasses.TEXT.TEXT_WEIGHT_MEDIUM : CoreClasses.TEXT.TEXT_WEIGHT_NORMAL]}>
                {node.component || node.layout || ""}

                {node.id && (
                  <CoreChip
                    label={node.id}
                    size="small"
                    variant="outlined"
                  />
                )}
              </CoreBox>
            }
          />
        </CoreListItemButton>
      </CoreListItem>
 
      {componentNode.hasChildren() && (
        <CoreCollapse in={isExpanded}>
          <CoreList disablePadding>
            {node.children?.map((child, index) => (
              <TreeNode
                key={`${path.join("-")}-child-${index}`}
                node={child}
                level={level + 1}
                path={[...path, "children", index]}
                onDrop={onDrop}
              />
            ))}

            {node.placeholders?.map((placeholder, index) => (
              <TreeNode
                key={`${path.join("-")}-placeholder-${index}`}
                node={placeholder}
                level={level + 1}
                path={[...path, "placeholders", index]}
                onDrop={onDrop}
              />
            ))}
          </CoreList>
        </CoreCollapse>
      )}
    </CoreBox>
  );
};
 
/**
  * Main component that manages the entire component navigator
  * Handles state management and high-level operations
  */
const DraggableComponentNavigator = ({ initialData, onDataChange, resetKey }) => {
  const [data, setData] = useState(initialData);
  const [showWarning, setShowWarning] = useState(false);
  const [pendingMove, setPendingMove] = useState(null);
  const { setDialog } = useContext(CoreDialogContext);

  // History management for undo feature
  const [history, setHistory] = useState([initialData]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update parent component whenever data changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(data);
    }
  }, [data, onDataChange]);

  // Reset functionality
  useEffect(() => {
    if (resetKey) {
      setData(initialData);
      setHistory([initialData]);
      setCurrentIndex(0);
    }
  }, [resetKey, initialData]);

  // Keyboard event handler for Ctrl+Z
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "z") {
        event.preventDefault();
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;

          setCurrentIndex(newIndex);
          setData(history[newIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, history]);
  
  useEffect(() => {
    if (showWarning) {
      setDialog({ 
        cancelButton     : handleCancelMove,
        cancelButtonLabel: "Cancel",
        doneButton       : handleConfirmMove,
        doneButtonLabel  : "Apply Changes",
        noCancelButton   : false,
        noDoneButton     : false,
        onClose          : handleCancelMove,
        showDialog       : true,
        subtitle         : (<CoreStack styleClasses={[CoreClasses.DISPLAY.FLEX]}>
          <CoreAlert severity="warning">
             Moving a parent component into its child will restructure your
             component hierarchy. The parent&apos;s other children will be moved up in
             the hierarchy.
          </CoreAlert>

          <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1, CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
             Are you sure you want to proceed with this change?
          </CoreTypographyBody1>
        </CoreStack>),
        title: "Component Structure Change",
        type : "info"
      });

      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [showWarning, setDialog]);

  /**
    * Handles the drop operation in the component tree
    * @param {Array} sourcePath - Path of the source node
    * @param {Array} targetPath - Path of the target node
    * @param {Object} sourceNode - The node being moved
    */
  const handleDrop = useCallback((sourcePath, targetPath, sourceNode) => {
    if (JSON.stringify(sourcePath) === JSON.stringify(targetPath)) {
      return;
    }
 
    if (NavigationTreeManager.isParentOfTarget(sourcePath, targetPath)) {
      setPendingMove({ sourceNode, sourcePath, targetPath });
      setShowWarning(true);
      return;
    }
    
    setData(prevData => {
      const newData = NavigationTreeManager.handleMove(prevData, sourcePath, targetPath, sourceNode, true);
      // Update history
      const newHistory = history.slice(0, currentIndex + 1);

      setHistory([...newHistory, newData]);
      setCurrentIndex(currentIndex + 1);
      return newData;
    });
  }, [history, currentIndex]);
 
  /**
    * Handles confirmation of a parent-to-child move operation
    */
  const handleConfirmMove = () => {
    if (pendingMove) {
      setData(prevData => {
        const newData = NavigationTreeManager.handleMove(
          prevData,
          pendingMove.sourcePath,
          pendingMove.targetPath,
          pendingMove.sourceNode,
          false
        );
        // Update history
        const newHistory = history.slice(0, currentIndex + 1);

        setHistory([...newHistory, newData]);
        setCurrentIndex(currentIndex + 1);
        return newData;
      });
      setShowWarning(false);
      setPendingMove(null);
    }
  };
 
  const handleCancelMove = () => {
    setShowWarning(false);
    setPendingMove(null);
  };
 
  return (
    <>
      <CoreList disablePadding>
        <TreeNode node={data} path={["root"]} onDrop={handleDrop} />
      </CoreList>
    </>
  );
};
 
export default DraggableComponentNavigator;