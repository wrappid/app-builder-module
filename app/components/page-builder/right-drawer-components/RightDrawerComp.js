/* eslint-disable etc/no-commented-out-code */
import {
  CoreBox, CoreButton, CoreClasses, CoreGrid, CoreIcon, CoreIconButton, CoreSelect, CoreStack, CoreToolBox, CoreTooltip, CoreTypographyBody1 
} from "@wrappid/core";

import ComponentSelector from "./ComponentSelector";
import LayoutSelector from "./LayoutSelector";
import PropSelector from "./PropSelector";

/**
 * RightDrawerComp component
 * @returns {React.Component} The RightDrawerComp component
 */
export default function RightDrawerComp() {
  // const isPropSelectorOpen = useSelector((state) => state.testBuilderReducer?.isPropSelectorOpen); // Read from Redux
  // const isComponentSelectorOpen = useSelector((state) => state.testBuilderReducer?.isComponentSelectorOpen); // Read from Redux
  // const isLayoutSelectorOpen = useSelector((state) => state.testBuilderReducer?.isLayoutSelectorOpen); // Read from Redux

  // const dispatch = useDispatch();

  return (
    <CoreStack styleClasses={[CoreClasses.HEIGHT.VH_100, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL, CoreClasses.BORDER.BORDER_START, CoreClasses.BORDER.BORDER_GREY_400]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_3]}>
          <CoreTooltip title= "Collapse All Selector" arrow>
            <CoreButton label="Collapse" variant="text" styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}/>
          </CoreTooltip>

          <CoreTooltip title= "Expand All Selector" arrow>
            <CoreButton label="Expand" variant="text" styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}/>
          </CoreTooltip>
        </CoreBox>

        <CoreTooltip title= "Select Selector Box" arrow>
          <CoreIconButton>
            <CoreIcon icon="more_vert"/>
          </CoreIconButton>
        </CoreTooltip>
      </CoreBox>

      {/* Tool box for Layout list */}
      <CoreToolBox 
        toolTitle="Select Layout" 
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_down" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <LayoutSelector />
      </CoreToolBox>

      {/* Tool box for Component list */}
      <CoreToolBox
        toolTitle="Select any Component"
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_up" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_down" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <ComponentSelector />
      </CoreToolBox>

      {/* Tool box for Props list related to selected component */}
      <CoreToolBox 
        toolTitle="Select Props for Component" 
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_up" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_down" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <PropSelector />
      </CoreToolBox>

      <CoreToolBox
        toolTitle="Select Theme" 
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_up" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_down" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <CoreTypographyBody1>Theme List</CoreTypographyBody1>
      </CoreToolBox>

      <CoreToolBox
        toolTitle="Select Event" 
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_up" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_down" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <CoreTypographyBody1>Theme List</CoreTypographyBody1>
      </CoreToolBox>

      {/* Tool box for styles list related to selected component */}

      <CoreToolBox 
        toolTitle="Select Device" 
        resize="both"
        toolboxActionButton={<><CoreIconButton>
          <CoreIcon icon="keyboard_double_arrow_up" />
        </CoreIconButton>

        <CoreIconButton>
          <CoreIcon icon="visibility"/>
        </CoreIconButton></>}>
        <CoreGrid>
          <CoreSelect
            gridProps={{ gridSize: { md: 12 } }}
            label="Device"
            selectID="currentDevice"
            options={[{ id: "", label: "Laptop" }, { id: "10", label: "Tab" }, { id: "20", label: "Android" }, { id: "30", label: "iPhone" }]}
          />

          <CoreSelect
            gridProps={{ gridSize: { md: 8, xs: 4 } }}
            label="Zoom"
            selectID="currentZoom"
            options={[{ id: "", label: "25%" }, { id: "10", label: "50%" }, { id: "20", label: "75%" }, { id: "30", label: "100%" }]}
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