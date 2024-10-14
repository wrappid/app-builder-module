/* eslint-disable etc/no-commented-out-code */
import { CoreClasses, CoreIcon, CoreIconButton, CoreStack, CoreToolBox } from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import ComponentSelector from "./ComponentSelector";
import LayoutSelector from "./LayoutSelector";
import PropSelector from "./PropSelector";
import { toggleComponentSelector, togglePropSelector, toggleLayoutSelector } from "../../../actions/test.action";

/**
 * RightDrawerComp component
 * @returns {React.Component} The RightDrawerComp component
 */
export default function RightDrawerComp() {
  const isPropSelectorOpen = useSelector((state) => state.testBuilderReducer?.isPropSelectorOpen); // Read from Redux
  const isComponentSelectorOpen = useSelector((state) => state.testBuilderReducer?.isComponentSelectorOpen); // Read from Redux
  const isLayoutSelectorOpen = useSelector((state) => state.testBuilderReducer?.isLayoutSelectorOpen); // Read from Redux

  const dispatch = useDispatch();

  return (
    <CoreStack spacing={2} styleClasses={[CoreClasses.HEIGHT.VH_100, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL]}>
      {/* Tool box for Layout list */}
      {isLayoutSelectorOpen &&
      <CoreToolBox 
        toolTitle="Select Layout" 
        resize="both"
        toolboxActionButton={<CoreIconButton onClick={() => dispatch(toggleLayoutSelector(false))}>
          <CoreIcon icon="close" color="secondary"/>
        </CoreIconButton>}>
        <LayoutSelector />
      </CoreToolBox>}

      {/* Tool box for Component list */}
      {isComponentSelectorOpen &&
      <CoreToolBox
        toolTitle="Select any Component"
        resize="both"
        toolboxActionButton={<CoreIconButton onClick={() => dispatch(toggleComponentSelector(false))}>
          <CoreIcon icon="close" color="secondary"/>
        </CoreIconButton>}>
        <ComponentSelector />
      </CoreToolBox>}

      {/* Tool box for Props list related to selected component */}
      {isPropSelectorOpen && 
      <CoreToolBox 
        toolTitle="Select Props for Component" 
        resize="both"
        toolboxActionButton={<CoreIconButton onClick={() => dispatch(togglePropSelector(false))}>
          <CoreIcon icon="close" color="secondary"/>
        </CoreIconButton>}>
        <PropSelector />
      </CoreToolBox>}

      {/* Tool box for styles list related to selected component */}

      {/* <CoreToolBox toolTitle="Select Device">
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
      </CoreToolBox> */}
    </CoreStack>
  );
}