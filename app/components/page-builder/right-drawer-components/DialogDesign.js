import React from "react";

import {
  CoreBox, CoreClasses, CoreIcon, CoreIconButton, CoreStack, 
  CoreTooltip, 
  CoreTypographyBody2,
  CoreTypographyOverline,
  CoreBadge
} from "@wrappid/core";

export default function DialogDesign({ initialItems = [], onTransferDone }) {
  const [selectedItemsAdding, setSelectedItemsAdding] = React.useState([]);
  const [selectedItemsRemoving, setSelectedItemsRemoving] = React.useState([]);
  const [transferredItems, setTransferredItems] = React.useState(initialItems);
  const [activeList, setActiveList] = React.useState(null); // 'adding' or 'removing'
  const lastClickRef = React.useRef({ action: null, item: null, time: 0 });
  const DOUBLE_CLICK_THRESHOLD = 1000; // 1000 milliseconds threshold for consecutive clicks

  // eslint-disable-next-line no-console
  console.log(transferredItems);
  const getHeaderClasses = (depth) => {
    const baseClasses = [CoreClasses.POSITION.POSITION_STICKY, CoreClasses.PADDING.P1, CoreClasses.BG.BG_GREY_300, CoreClasses.COLOR.TEXT_BLACK_50];

    switch (depth) {
      case 0:
        return [...baseClasses, CoreClasses.POSITION.TOP_0, CoreClasses.Z_INDEX.Z_3];

      case 1:
        return [...baseClasses, CoreClasses.POSITION.TOP_2R, CoreClasses.Z_INDEX.Z_2];

      default:
        return [...baseClasses, CoreClasses.POSITION.TOP_2R, CoreClasses.Z_INDEX.Z_1];
    }
  };

  const handleItemClick = (item, action) => {
    const now = Date.now();
    const { item: lastItem, time: lastTime, action: lastAction } = lastClickRef.current;

    if (action !== activeList) {
      if (action === "add") {
        setSelectedItemsRemoving([]);
      } else {
        setSelectedItemsAdding([]);
      }
      setActiveList(action);
    }

    if (item === lastItem && action === lastAction && now - lastTime < DOUBLE_CLICK_THRESHOLD) {
      if (action === "add") {
        if (!transferredItems.includes(item)) {
          setTransferredItems(prev => [...prev, item]);
          setSelectedItemsAdding(prev => prev.filter(i => i !== item));
        }
      } else if (action === "remove") {
        setTransferredItems(prev => prev.filter(i => i !== item));
        setSelectedItemsRemoving(prev => prev.filter(i => i !== item));
      }
    } else {
      if (action === "add") {
        setSelectedItemsAdding(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
      } else if (action === "remove") {
        setSelectedItemsRemoving(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
      }
    }

    lastClickRef.current = { action, item, time: now };
  };

  const handleTransfer = () => {
    setTransferredItems(prev => [...prev, ...selectedItemsAdding]);
    setSelectedItemsAdding([]);
    setActiveList(null);
  };

  const handleRemoveTransfer = () => {
    setTransferredItems(prev => prev.filter(item => !selectedItemsRemoving.includes(item)));
    setSelectedItemsRemoving([]);
    setActiveList(null);
  };

  React.useEffect(() => {
    onTransferDone(transferredItems);
  }, [transferredItems, onTransferDone]);

  const renderCoreKeys = (obj, parentKey = "", depth = 0) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      // Ensure transferredItems is an array before calling includes
      if (Array.isArray(transferredItems) && transferredItems.includes(fullKey)) {
        return null;
      }

      if (typeof value === "object" && !Array.isArray(value)) {
        return (
          <CoreBox key={fullKey}>
            <CoreTypographyBody2 styleClasses={getHeaderClasses(depth)}>
              {key}
            </CoreTypographyBody2>

            <CoreBox styleClasses={[CoreClasses.PADDING.PL3]}>
              {renderCoreKeys(value, fullKey, depth + 1)}
            </CoreBox>
          </CoreBox>
        );
      }

      return (
        <CoreBox 
          key={fullKey} 
          onClick={() => handleItemClick(fullKey, "add")}
          styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, activeList === "removing" ? CoreClasses.OPACITY._50 : null]}
        >
          <CoreTypographyOverline styleClasses={[selectedItemsAdding.includes(fullKey) ? CoreClasses.COLOR.TEXT_PRIMARY : CoreClasses.COLOR.TEXT_BLACK]}>{key}</CoreTypographyOverline>
        </CoreBox>
      );
    });
  };

  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
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
          {renderCoreKeys(CoreClasses)}
        </CoreBox>  
      </CoreBox>
      
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

        <CoreTooltip title={selectedItemsAdding.length === 0 ? "Select styleClass to Add" : "Add"} arrow>
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
            : "Remove"
          }
          arrow>
          <CoreBadge badgeContent={selectedItemsRemoving.length} color="primary">
            <CoreIconButton onClick={handleRemoveTransfer} disabled={selectedItemsRemoving.length === 0} color="primary">
              <CoreIcon icon="keyboard_double_arrow_left"/>
            </CoreIconButton>
          </CoreBadge>
        </CoreTooltip>
      </CoreStack>

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
              onClick={() => handleItemClick(item, "remove")}
              styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, activeList === "adding" ? CoreClasses.OPACITY._50 : null]}
            >
              <CoreTypographyOverline styleClasses={[selectedItemsRemoving.includes(item) ? CoreClasses.COLOR.TEXT_PRIMARY : CoreClasses.COLOR.TEXT_BLACK]}>{item}</CoreTypographyOverline>
            </CoreBox>
          ))}
        </CoreBox>
      </CoreBox>
    </CoreBox>
  );
}