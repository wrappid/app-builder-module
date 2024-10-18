import { layoutData } from "../components/page-builder/content-components/DefaultCanvasViewer";
import {
  SELECT_LAYOUT,
  SET_ACTIVE_BOX,
  SET_SELECTED_COMPONENT_PATH,
  ADD_COMPONENT,
  SET_PROPS_COMPONENT_PATH,
  TOGGLE_PROP_SELECTOR,
  UPDATE_COMPONENT_PROPS,
  UPDATE_COMPONENT_STYLE_CLASSES,
  TOGGLE_LAYOUT_SELECTOR,
  TOGGLE_COMPONENT_SELECTOR,
  TOGGLE_TOOLBOX_OPEN,
  REORDER_TOOLBOX
} from "../types/appBuilder.types";
import { GET_PAGE_DATA } from "../types/appBuilderTypes";

/**
 * Initial state for the test builder reducer
 * @type {Object}
 */
const initialState = {
  activeBox            : null,
  componentsInBoxes    : [],
  isLayoutSelectorOpen : true, 
  isPropSelectorOpen   : false, // Boolean to track whether PropSelector is open
  propsComponentPath   : null, // Path to the component whose props are being edited
  selectedComponentPath: null, 
  selectedLayout       : "BlankLayout",
  toolboxes            : {
    1: { isOpenToolBox: true, order: 0 },
    2: { isOpenToolBox: true, order: 1 },
    3: { isOpenToolBox: true, order: 2 },
    4: { isOpenToolBox: true, order: 3 },
    5: { isOpenToolBox: true, order: 4 },
    6: { isOpenToolBox: true, order: 5 }
  }
};

/**
 * Initializes componentsInBoxes based on the selected layout
 * @param {string} layout - Layout to initialize
 * @returns {Object[]} Array of initialized boxes
 */
const initializeComponentsInBoxes = (layout) => {
  const boxIds = layoutData[layout];

  return boxIds.map((id) => ({
    id, 
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    children: []
  }));
};

/**
 * Handles the SELECT_LAYOUT action
 * @param {Object} state - Current state
 * @param {string} newLayout - New layout to be selected
 * @returns {Object} Updated state
 */
const handleSelectLayout = (state, newLayout) => {
  const componentsInBoxes = initializeComponentsInBoxes(newLayout); 

  return {
    ...state,
    componentsInBoxes, 
    selectedLayout: newLayout, 
  };
};

/**
 * Recursively traverses the component tree and adds the new component at the specified path.
 * 
 * @param {Object} currentLevel - The current level of the component tree being traversed.
 * @param {Array} path - Array of indices that defines the path where the component should be added.
 * @param {Object} component - The component object to be added.
 */
const addComponentRecursively = (currentLevel, path, component) => {
  path.forEach((currentIndex) => {
    // Ensure current level has children array; initialize child if it does not exist
    currentLevel.children = currentLevel.children || [];
    currentLevel.children[currentIndex] = currentLevel.children[currentIndex] || { children: [] };

    // Move down the tree to the next level
    currentLevel = currentLevel.children[currentIndex];
  });

  currentLevel.children.push({
    component,
    props       : {},
    styleClasses: [],
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    children    : []
  });
};

/**
 * Adds a new component to the component tree structure in the state.
 * 
 * @param {Object} state - The current application state.
 * @param {Object} payload - Contains the component to be added, the box index, and the path.
 * @returns {Object} Updated state with the new component added.
 */
const handleAddComponent = (state, payload) => {
  const { component, boxIndex, path } = payload;
  const newComponentsInBoxes = [...state.componentsInBoxes]; 

  // Ensure boxIndex exists; initialize it if necessary
  newComponentsInBoxes[boxIndex] = newComponentsInBoxes[boxIndex] || { children: [] };

  // If no path is provided, add the component at the root level (box)
  if (path === null) {
    newComponentsInBoxes[boxIndex].children.push({
      component,
      props       : {},
      styleClasses: [],
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      children    : []
    });
  } else {
    // Add the component recursively along the specified path
    addComponentRecursively(newComponentsInBoxes[boxIndex], path, component);
  }

  return {
    ...state,
    activeBox            : null,
    componentsInBoxes    : newComponentsInBoxes,
    selectedComponentPath: null,
  };
};

/**
 * Updates the properties or style classes of a specified component in the state.
 * 
 * @param {Object} state - The current application state.
 * @param {Object} payload - The action payload containing component path and update data.
 * @param {string} updateType - The type of update, either "props" or "styleClasses".
 * @returns {Object} Updated state with modified components.
 */
const updateComponent = (state, payload, updateType) => {
  const { componentPath } = payload; 
  const newComponentsInBoxes = [...state.componentsInBoxes]; 

  let currentLevel = newComponentsInBoxes[componentPath.placeholderIndex]; // Access the correct placeholder based on the componentPath

  // Iterate through the component path to find the target component
  componentPath.componentPath.forEach((componentIndex, index) => {
    if (index === componentPath.componentPath.length - 1) {
      const { props, styleClasses } = payload; 

      // Update props or styleClasses based on the updateType
      updateType === "props"
        ? (currentLevel.children[componentIndex].props = {
          ...currentLevel.children[componentIndex].props,
          ...props,
        })
        : (currentLevel.children[componentIndex].styleClasses = Array.isArray(styleClasses)
          ? styleClasses
          : []); // Assign styleClasses only if it's an array
    } else {
      currentLevel = currentLevel.children[componentIndex]; // Move down to the next level in the component tree
    }
  });

  return {
    ...state,
    componentsInBoxes: newComponentsInBoxes, 
  };
};

/**
 * Updates the properties of a specified component in the application state.
 * 
 * @param {Object} state - The current application state.
 * @param {Object} payload - The action payload containing the component path and new properties.
 * @returns {Object} Updated state with modified component properties.
 */
const updateComponentProps = (state, payload) => updateComponent(state, payload, "props");

/**
 * Updates the style classes of a specified component in the application state.
 * 
 * @param {Object} state - The current application state.
 * @param {Object} payload - The action payload containing the component path and new style classes.
 * @returns {Object} Updated state with modified component style classes.
 */
const updateComponentStyleClasses = (state, payload) => updateComponent(state, payload, "styleClasses");

/**
 * Reducer function for the test builder
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} New state
 */
const appBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LAYOUT:
      return handleSelectLayout(state, action.payload);

    case SET_ACTIVE_BOX:
      return {
        ...state,
        activeBox: action.payload,
      };

    case SET_SELECTED_COMPONENT_PATH:
      return {
        ...state,
        selectedComponentPath: action.payload,
      };

    case ADD_COMPONENT:
      return handleAddComponent(state, action.payload);

    case SET_PROPS_COMPONENT_PATH:
      return {
        ...state,
        propsComponentPath: action.payload
      };

    case TOGGLE_LAYOUT_SELECTOR:
      return {
        ...state,
        isLayoutSelectorOpen: action.payload
      };

    case TOGGLE_COMPONENT_SELECTOR:
      return {
        ...state,
        isComponentSelectorOpen: action.payload
      };

    case TOGGLE_PROP_SELECTOR:
      return {
        ...state,
        isPropSelectorOpen: action.payload
      };

    case TOGGLE_TOOLBOX_OPEN:
      return {
        ...state,
        toolboxes: {
          ...state.toolboxes,
          [action.payload.toolboxId]: {
            ...state.toolboxes[action.payload.toolboxId],
            isOpenToolBox: action.payload.isOpenToolBox,
            // Preserve existing order when toggling visibility
            order        : state.toolboxes[action.payload.toolboxId]?.order ?? 0
          }
        }
      };

    case REORDER_TOOLBOX: {
      const { toolboxId, direction } = action.payload;
      const currentOrder = state.toolboxes[toolboxId].order;
      const newOrder = direction === "up" ? currentOrder - 1 : currentOrder + 1;

      // Don't reorder if we're at the edges
      if (newOrder < 0 || newOrder >= Object.keys(state.toolboxes).length) {
        return state;
      }

      // Find the toolbox that needs to swap positions
      const swapToolboxId = Object.keys(state.toolboxes).find(
        id => state.toolboxes[id].order === newOrder && 
             state.toolboxes[id].isOpenToolBox === true
      );

      // If no valid toolbox to swap with, return current state
      if (!swapToolboxId) {
        return state;
      }

      // Perform the swap
      return {
        ...state,
        toolboxes: {
          ...state.toolboxes,
          [swapToolboxId]: {
            ...state.toolboxes[swapToolboxId],
            order: currentOrder
          },
          [toolboxId]: {
            ...state.toolboxes[toolboxId],
            order: newOrder
          }
        }
      };
    }

    case UPDATE_COMPONENT_PROPS:
      return updateComponentProps(state, action.payload);

    case UPDATE_COMPONENT_STYLE_CLASSES:
      return updateComponentStyleClasses(state, action.payload);
      
    case GET_PAGE_DATA:
      return {
        ...state,
        pageData: action.payload,
      };

    default:
      return state;
  }
};

export default appBuilderReducer;