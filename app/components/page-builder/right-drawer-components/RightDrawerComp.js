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
      styleClasses={[CoreClasses.HEIGHT.VH_95, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL, CoreClasses.BORDER.BORDER_START, CoreClasses.BORDER.BORDER_GREY_400]}
    >
      <CoreBox
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
      >
        <CoreBox
          styleClasses={[
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.GAP.GAP_3,
            CoreClasses.PADDING.P0_5,
          ]}
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

        if (!isFirst) {
          buttons.push("keyboard_double_arrow_up");
        }
        if (!isLast) {
          buttons.push("keyboard_double_arrow_down");
        }
        buttons.push("visibility");

        return (
          <CoreToolBox
            key={toolbox.id}
            toolTitle={toolbox.toolTitle}
            resize={toolbox.resize}
            toolboxActionButton={buttons.map((buttonIcon, buttonIndex) => (
              <CoreIconButton key={buttonIndex}>
                <CoreIcon icon={buttonIcon} />
              </CoreIconButton>
            ))}
          >
            {toolbox.content}
          </CoreToolBox>
        );
      })}
    </CoreStack>
  );
}

