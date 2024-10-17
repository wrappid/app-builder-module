/* eslint-disable etc/no-commented-out-code */
import {
  CoreBox, CoreButton, CoreClasses, CoreGrid, CoreIcon, CoreIconButton, CoreSelect, CoreStack, CoreToolBox, CoreTooltip, CoreTypographyBody1
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import ComponentSelector from "./ComponentSelector";
import LayoutSelector from "./LayoutSelector";
import PropSelector from "./PropSelector";
import { toggleToolboxOpen } from "../../../actions/test.action"; 

export default function RightDrawerComp() {
  const dispatch = useDispatch();
  const toolboxesState = useSelector((state) => 
    state.testBuilderReducer?.toolboxes || {
      1: { isOpenToolBox: true },
      2: { isOpenToolBox: true },
      3: { isOpenToolBox: true },
      4: { isOpenToolBox: true },
      5: { isOpenToolBox: true },
      6: { isOpenToolBox: true }
    }
  );
  const toolboxes = [
    {
      content  : <LayoutSelector />,
      id       : 1,
      resize   : "horizontal",
      toolTitle: "Select Layout",
    },
    {
      content  : <ComponentSelector />,
      id       : 2,
      resize   : "both",
      toolTitle: "Select any Component",
    },
    {
      content  : <PropSelector />,
      id       : 3,
      resize   : "both",
      toolTitle: "Select Props for Component",
    },
    {
      content  : <CoreTypographyBody1>Theme List</CoreTypographyBody1>,
      id       : 4,
      resize   : "both",
      toolTitle: "Select Theme",
    },
    {
      content  : <CoreTypographyBody1>Event List</CoreTypographyBody1>,
      id       : 5,
      resize   : "both",
      toolTitle: "Select Event",
    },
    {
      content: (
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

          <CoreBox gridProps={{ gridSize: { md: 4, xs: 4 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }}>
            <CoreIconButton>
              <CoreIcon>screen_rotation</CoreIcon>
            </CoreIconButton>

            <CoreIconButton title="Device posture">
              <CoreIcon>devices_fold</CoreIcon>
            </CoreIconButton>
          </CoreBox>
        </CoreGrid>
      ),
      id       : 6,
      resize   : "both",
      toolTitle: "Select Device",
    },
  ];

  return (
    <CoreStack
      styleClasses={[CoreClasses.HEIGHT.VH_92, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL, CoreClasses.BORDER.BORDER_START, CoreClasses.BORDER.BORDER_GREY_400]}
    >
      <CoreBox
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.P1]}
      >
        <CoreBox
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_3]}
        >
          <CoreTooltip title="Collapse All Selector" arrow>
            <CoreButton label="Collapse" variant="text" styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]} />
          </CoreTooltip>

          <CoreTooltip title="Expand All Selector" arrow>
            <CoreButton label="Expand" variant="text" styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]} />
          </CoreTooltip>
        </CoreBox>

        <CoreTooltip title="Select Selector Box" arrow>
          <CoreIconButton>
            <CoreIcon icon="more_vert" />
          </CoreIconButton>
        </CoreTooltip>
      </CoreBox>

      {/* Map over the toolboxes configuration array */}
      {toolboxes.map((toolbox, index) => {
        const isFirst = index === 0;
        const isLast = index === toolboxes.length - 1;

        // Define the buttons based on the position (first, last, or in between)
        const buttons = [];

        if (!isFirst) buttons.push("keyboard_double_arrow_up");
        if (!isLast) buttons.push("keyboard_double_arrow_down");
        buttons.push("remove_circle");

        // Handle toolbox open/close state
        // Default to true (visible) unless explicitly set in state
        const isOpenToolBox = toolboxesState?.[toolbox.id]?.isOpenToolBox ?? true;

        return (
          // Conditionally render based on isOpenToolBox
          isOpenToolBox && (
            <CoreToolBox
              key={toolbox.id}
              toolTitle={toolbox.toolTitle}
              resize={toolbox.resize}
              expandProp={true}
              toolboxActionButton={buttons.map((buttonIcon, buttonIndex) => (
                <CoreIconButton
                  key={buttonIndex}
                  onClick={() => {
                    if (buttonIcon === "remove_circle") {
                      dispatch(toggleToolboxOpen(toolbox.id, !isOpenToolBox));
                    }
                  }}
                >
                  <CoreIcon
                    icon={buttonIcon}
                    color={buttonIcon === "remove_circle" ? (isOpenToolBox === true ? "primary" : "default") : "inherit"}
                  />

                </CoreIconButton>
              ))}
            >
              {toolbox.content}
            </CoreToolBox>
          )
        );
      })}
    </CoreStack>
  );
}
