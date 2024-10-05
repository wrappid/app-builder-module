import { useState } from "react";

import {
  CoreBox, CoreClasses, CoreH6, CoreIcon, CoreIconButton, CoreStack, 
  CoreTypographyBody2,
  CoreTypographyOverline
} from "@wrappid/core";

export default function DialogDesign() {
  const [selectedItemsAdding, setSelectedItemsAdding] = useState([]); // For selecting items to add
  const [selectedItemsRemoving, setSelectedItemsRemoving] = useState([]); // For selecting items to remove
  const [transferredItems, setTransferredItems] = useState([]); // Transferred items state

  // Returns classes based on nesting depth
  const getHeaderClasses = (depth) => {
    const baseClasses = [CoreClasses.POSITION.POSITION_STICKY, CoreClasses.PADDING.PY1, CoreClasses.BG.BG_WHITE, CoreClasses.MARGIN.MB1];

    switch (depth) {
      case 0:
        return [...baseClasses, CoreClasses.POSITION.TOP_0, CoreClasses.Z_INDEX.Z_3];

      case 1:
        return [...baseClasses, CoreClasses.POSITION.TOP_2R, CoreClasses.Z_INDEX.Z_2];

      default:
        return [...baseClasses, CoreClasses.POSITION.TOP_2R, CoreClasses.Z_INDEX.Z_1];
    }
  };

  // Handles item selection (toggle for both adding/removing)
  const handleItemClick = (item) => {
    setSelectedItemsAdding((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Handles the transfer of items to the "added" list
  const handleTransfer = () => {
    setTransferredItems((prev) => [...prev, ...selectedItemsAdding]);
    setSelectedItemsAdding([]); // Reset adding selection
  };

  // Handles removing items from the transferred list
  const handleRemoveTransfer = () => {
    setTransferredItems((prev) => prev.filter((item) => !selectedItemsRemoving.includes(item)));
    setSelectedItemsRemoving([]); // Reset removing selection
  };

  // Recursively renders keys with appropriate nesting and depth
  const renderCoreKeys = (obj, parentKey = "", depth = 0) => {
    return Object.keys(obj).map((key) => {
      const value = obj[key];
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === "object" && !Array.isArray(value)) {
        return (
          <CoreBox key={fullKey}>
            <CoreH6 styleClasses={getHeaderClasses(depth)}>
              {key}
            </CoreH6>

            <CoreBox styleClasses={[CoreClasses.PADDING.PL3]}>
              {renderCoreKeys(value, fullKey, depth + 1)}
            </CoreBox>
          </CoreBox>
        );
      }

      return (
        <CoreBox 
          key={fullKey} 
          onClick={() => handleItemClick(fullKey)}
          styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, selectedItemsAdding.includes(fullKey) ? CoreClasses.BG.BG_GREY_200 : null]}
        >
          <CoreTypographyOverline styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}>{key}</CoreTypographyOverline>
        </CoreBox>
      );
    });
  };

  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
      {/* Available Items Section */}
      <CoreBox styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_Y_AUTO, CoreClasses.HEIGHT.VH_50]}>
        {renderCoreKeys(CoreClasses)}
      </CoreBox>  

      {/* Transfer Buttons */}
      <CoreStack spacing={2} styleClasses={[CoreClasses.HEIGHT.VH_50, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.PX1]}>
        <CoreIconButton onClick={handleTransfer} disabled={selectedItemsAdding.length === 0}>
          <CoreIcon icon="keyboard_double_arrow_right" color="success"/>
        </CoreIconButton>

        <CoreIconButton onClick={handleRemoveTransfer} disabled={selectedItemsRemoving.length === 0}>
          <CoreIcon icon="keyboard_double_arrow_left" color="warning"/>
        </CoreIconButton>
      </CoreStack>

      {/* Transferred Items Section */}
      <CoreBox styleClasses={[CoreClasses.HEIGHT.VH_50, CoreClasses.PADDING.PX1, CoreClasses.OVERFLOW.OVERFLOW_Y_AUTO]}>
        <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
          {/* Clear button to reset transferred items */}
          <CoreIconButton onClick={() => { setTransferredItems([]); }} styleClasses={[CoreClasses.MARGIN.MB3, CoreClasses.ALIGNMENT.ALIGN_CONTENT_END]}>
            <CoreIcon icon="restart_alt" color="primary"/>
          </CoreIconButton>
        </CoreBox>

        <CoreBox>
          <CoreTypographyBody2>
            Added style classes
          </CoreTypographyBody2>

          {/* Render transferred items */}
          {transferredItems.map((item) => (
            <CoreBox
              key={item}
              onClick={() => setSelectedItemsRemoving((prev) =>
                prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
              )}
              styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER, selectedItemsRemoving.includes(item) ? CoreClasses.BG.BG_GREY_200 : null]}
            >
              <CoreTypographyOverline styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}>{item}</CoreTypographyOverline>
            </CoreBox>
          ))}
        </CoreBox>
      </CoreBox>
    </CoreBox>
  );
}
