import { useState, useEffect, useCallback, useMemo, useRef } from "react";

import {
  CoreBox, 
  CoreClasses, 
  CoreIcon, 
  CoreIconButton, 
  CoreStack, 
  CoreTooltip, 
  CoreTypographyBody2,
  CoreTypographyOverline,
  CoreBadge
} from "@wrappid/core";

const ListAction = {
  ADD   : "adding",
  REMOVE: "removing",
};

export default function DialogDesign({ initialItems = [], onTransferDone }) {
  // State management
  const [selectedItemsAdding, setSelectedItemsAdding] = useState([]);
  const [selectedItemsRemoving, setSelectedItemsRemoving] = useState([]);
  const [transferredItems, setTransferredItems] = useState(Array.isArray(initialItems) ? initialItems : []);
  const [activeList, setActiveList] = useState(null);
  const lastClickRef = useRef({ action: null, item: null, time: 0 });
  const DOUBLE_CLICK_THRESHOLD = 1000; // 1000 milliseconds threshold for consecutive clicks

  // Get header classes based on depth
  const getHeaderClasses = useCallback((depth) => {
    const baseClasses = [CoreClasses.POSITION.POSITION_STICKY, CoreClasses.PADDING.P1, CoreClasses.BG.BG_GREY_300, CoreClasses.COLOR.TEXT_BLACK_50];

    // Use ternary operators to determine additional classes based on depth

    return [...baseClasses, depth === 0 ? CoreClasses.POSITION.TOP_0 : CoreClasses.POSITION.TOP_2R, depth === 0 ? CoreClasses.Z_INDEX.Z_3 : (depth === 1 ? CoreClasses.Z_INDEX.Z_2 : CoreClasses.Z_INDEX.Z_1)];
  }, []);

  // Handle item click (selection or transfer)
  const handleItemClick = useCallback((item, action) => {
    const now = Date.now();
    const { item: lastItem, time: lastTime, action: lastAction } = lastClickRef.current;

    // Switch active list if a different action is selected
    action !== activeList && (
      action === ListAction.ADD ? setSelectedItemsRemoving([]) : setSelectedItemsAdding([]),
      setActiveList(action)
    );

    // Determine if this is a double-click
    const isDoubleClick = item === lastItem && action === lastAction && (now - lastTime < DOUBLE_CLICK_THRESHOLD);

    if (isDoubleClick) {
      // Handle double-click actions
      action === ListAction.ADD
        ? (!transferredItems.includes(item) && setTransferredItems(prev => [...prev, item]),
        setSelectedItemsAdding(prev => prev.filter(i => i !== item)))
        : (setTransferredItems(prev => prev.filter(i => i !== item)),
        setSelectedItemsRemoving(prev => prev.filter(i => i !== item)));
    } else {
      // Toggle item selection
      const setSelectedItems = action === ListAction.ADD ? setSelectedItemsAdding : setSelectedItemsRemoving;

      setSelectedItems(prev =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    }

    // Update last click reference
    lastClickRef.current = { action, item, time: now };
  }, [activeList, transferredItems]);

  // Handle transfer of selected items
  const handleTransfer = useCallback(() => {
    setTransferredItems(prev => [...prev, ...selectedItemsAdding]);
    setSelectedItemsAdding([]);
    setActiveList(null);
  }, [selectedItemsAdding]);

  // Handle removal of selected items
  const handleRemoveTransfer = useCallback(() => {
    setTransferredItems(prev => prev.filter(item => !selectedItemsRemoving.includes(item)));
    setSelectedItemsRemoving([]);
    setActiveList(null);
  }, [selectedItemsRemoving]);

  // Notify parent component of transferred items
  useEffect(() => {
    onTransferDone(transferredItems);
  }, [transferredItems, onTransferDone]);

  // Render core keys recursively
  const renderCoreKeys = useCallback(
    (obj, parentKey = "", depth = 0) => {
      const transferred = Array.isArray(transferredItems) ? transferredItems : [];

      return Object.keys(obj).map((key) => {
        const value = obj[key];
        const fullKey = parentKey ? `${parentKey}.${key}` : key;

        // Use a ternary to conditionally return null or the rendered item
        return transferred.includes(fullKey) ? null : (
          typeof value === "object" && !Array.isArray(value) ? (
          // If it's an object, recursively render its children
            <CoreBox key={fullKey}>
              <CoreTypographyBody2 styleClasses={getHeaderClasses(depth)}>
                {key}
              </CoreTypographyBody2>

              <CoreBox styleClasses={[CoreClasses.PADDING.PL3]}>
                {renderCoreKeys(value, fullKey, depth + 1)}
              </CoreBox>
            </CoreBox>
          ) : (
          // Otherwise, render the leaf node (selectable item)
            <CoreBox
              key={fullKey}
              onClick={() => handleItemClick(fullKey, ListAction.ADD)}
              styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, activeList === ListAction.REMOVE ? CoreClasses.OPACITY._50 : null]}
            >
              <CoreTypographyOverline
                styleClasses={[
                  selectedItemsAdding.includes(fullKey)
                    ? CoreClasses.COLOR.TEXT_PRIMARY
                    : CoreClasses.COLOR.TEXT_BLACK,
                ]}
              >
                {key}
              </CoreTypographyOverline>
            </CoreBox>
          )
        );
      });
    },
    [
      transferredItems,
      selectedItemsAdding,
      activeList,
      handleItemClick,
      getHeaderClasses,
    ]
  );

  // Memoize rendered core keys
  const memoizedCoreKeys = useMemo(() => renderCoreKeys(CoreClasses), [renderCoreKeys]);

  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
      {/* Left panel: Available style classes */}
      <CoreBox styleClasses={[
        CoreClasses.BG.BG_GREY_50,
        CoreClasses.BORDER.BORDER,
        CoreClasses.BORDER.BORDER_GREY_300,
        CoreClasses.PADDING.PX1,
        CoreClasses.WIDTH.VW_25
      ]}>
        <CoreBox styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.BORDER.BORDER_BOTTOM,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.MARGIN.MB1, 
          CoreClasses.PADDING.P1
        ]}>
          <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]}>
           Add Style Classes
          </CoreTypographyBody2>
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_Y_AUTO, CoreClasses.HEIGHT.VH_50]}>
          {memoizedCoreKeys}
        </CoreBox>  
      </CoreBox>
      
      {/* Middle panel: Action buttons */}
      <CoreStack spacing={4} styleClasses={[CoreClasses.HEIGHT.VH_50, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.PX1]}>
        <CoreTooltip title={transferredItems.length === 0 ? "" : "Reset"} arrow>
          <CoreIconButton
            onClick={() => { setTransferredItems([]); setActiveList(null); }}
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_CONTENT_END]}
            disabled={transferredItems.length === 0}
            color="primary">
            <CoreIcon icon="restart_alt"/>
          </CoreIconButton>
        </CoreTooltip>

        <CoreTooltip title={selectedItemsAdding.length === 0 ? "Select styleClass to Add" : ListAction.ADD} arrow>
          <CoreBadge badgeContent={selectedItemsAdding.length} color="primary">
            <CoreIconButton
              onClick={handleTransfer}
              disabled={selectedItemsAdding.length === 0}
            >
              <CoreIcon icon="keyboard_double_arrow_right" />
            </CoreIconButton>
          </CoreBadge>
        </CoreTooltip>

        <CoreTooltip
          title={selectedItemsRemoving.length === 0 
            ? (transferredItems.length === 0 ? "" : "Select styleClass to Remove") 
            : ListAction.REMOVE
          }
          arrow>
          <CoreBadge badgeContent={selectedItemsRemoving.length} color="primary">
            <CoreIconButton onClick={handleRemoveTransfer} disabled={selectedItemsRemoving.length === 0} color="primary">
              <CoreIcon icon="keyboard_double_arrow_left"/>
            </CoreIconButton>
          </CoreBadge>
        </CoreTooltip>
      </CoreStack>

      {/* Right panel: Added style classes */}
      <CoreBox styleClasses={[
        CoreClasses.PADDING.P1,
        CoreClasses.BG.BG_GREY_50,
        CoreClasses.BORDER.BORDER,
        CoreClasses.BORDER.BORDER_GREY_300,
        CoreClasses.WIDTH.VW_25
      ]}>
        <CoreBox styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.BORDER.BORDER_BOTTOM,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.PADDING.PB1
        ]}>
          <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]}>
           Your Added Style Classes
          </CoreTypographyBody2>
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.HEIGHT.VH_50, CoreClasses.OVERFLOW.OVERFLOW_Y_AUTO, CoreClasses.PADDING.PT1]}>
          {transferredItems.map((item) => (
            <CoreBox
              key={item}
              onClick={() => handleItemClick(item, ListAction.REMOVE)}
              styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, activeList === ListAction.ADD ? CoreClasses.OPACITY._50 : null]}
            >
              <CoreTypographyOverline 
                styleClasses={[selectedItemsRemoving.includes(item) ? CoreClasses.COLOR.TEXT_PRIMARY : CoreClasses.COLOR.TEXT_BLACK]}
              >
                {item}
              </CoreTypographyOverline>
            </CoreBox>
          ))}
        </CoreBox>
      </CoreBox>
    </CoreBox>
  );
}