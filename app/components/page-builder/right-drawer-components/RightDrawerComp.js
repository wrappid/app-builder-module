import {
  CoreBox, CoreClasses, CoreGrid, CoreIcon, CoreIconButton, CoreSelect, CoreStack, CoreToolBox
} from "@wrappid/core";
import { useSelector } from "react-redux";

import ComponentSelector from "./ComponentSelector";
import LayoutSelector from "./LayoutSelector";
import PropSelector from "./PropSelector";

/**
 * RightDrawerComp component
 * @returns {React.Component} The RightDrawerComp component
 */
export default function RightDrawerComp() {
  const isPropSelectorOpen = useSelector((state) => state.testBuilderReducer?.isPropSelectorOpen); // Read from Redux

  return (
    <CoreStack spacing={2} styleClasses={[CoreClasses.HEIGHT.VH_100, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL]}>
      {/* Tool box for Layout list */}
      <CoreToolBox toolTitle="Select Layout" resize="both">
        <LayoutSelector />
      </CoreToolBox>

      {/* Tool box for Component list */}
      <CoreToolBox toolTitle="Component Viewer Menu" resize="both">
        <ComponentSelector />
      </CoreToolBox>

      {/* Tool box for Props list related to selected component */}
      <CoreToolBox toolTitle="Props Viewer Menu" resize="both">
        {isPropSelectorOpen && <PropSelector />}
      </CoreToolBox>

      {/* Tool box for styles list related to selected component */}

      <CoreToolBox toolTitle="Select Device">
        <CoreGrid>
          <CoreSelect
            gridProps={{ gridSize: { md: 12 } }}
            label="Device"
            selectID="currentDevice"
            options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
          />

          <CoreSelect
            gridProps={{ gridSize: { md: 8, xs: 4 } }}
            label="Zoom"
            selectID="currentZoom"
            options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
          />

          <CoreBox
            gridProps={{ gridSize: { md: 4, xs: 4 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }}
          >
            <CoreIconButton>
              <CoreIcon>screen_rotation</CoreIcon>
            </CoreIconButton>

            <CoreIconButton
              title={"Device posture"}
            >
              <CoreIcon>devices_fold</CoreIcon>
            </CoreIconButton>
          </CoreBox>
        </CoreGrid>
      </CoreToolBox>
    </CoreStack>
  );
}