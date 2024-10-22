/* eslint-disable no-console */
import { useState } from "react";

import {
  CoreBox, CoreButton, CoreClasses, CoreGrid, CoreIcon, CoreIconButton, CoreSelect,
  CoreStack, CoreToolBox, CoreTooltip
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import ComponentSelector from "./ComponentSelector";
import EventsSelector from "./EventsSelector";
import LayoutSelector from "./LayoutSelector";
import PropsSelector from "./PropsSelector";
import { reorderToolbox, toggleToolboxOpen } from "../../../actions/app.action";
import DraggableComponentNavigator from "../header-components/NavigatorCopy";

const initialData = {
  "layout"      : "ComplexLayout",
  "placeholders": [
    {
      "children": [
        {
          "children": [
            {
              "children": [
                {
                  "children"    : [],
                  "component"   : "CoreAlert",
                  "props"       : { "onClick": "()=>{console.log(\"hello\");}" },
                  "styleClasses": ["DEV_BORDER"]
                }
              ],
              "component": "CoreButton",
              "props"    : {
                "label"  : "hola",
                "onClick": "()=>{console.log(\"hello\");}"
              },
              "styleClasses": ["ALIGNMENT.ALIGN_CONTENT_START"]
            }
          ],
          "component"   : "CoreBox",
          "props"       : {},
          "styleClasses": []
        }
      ],
      "id": "CONTENT1"
    },
    {
      "children": [],
      "id"      : "CONTENT2"
    },
    {
      "children": [],
      "id"      : "CONTENT3"
    },
    {
      "children": [],
      "id"      : "CONTENT4"
    },
    {
      "children": [],
      "id"      : "CONTENT5"
    },
    {
      "children": [],
      "id"      : "CONTENT6"
    },
    {
      "children": [],
      "id"      : "CONTENT7"
    },
    {
      "children": [],
      "id"      : "CONTENT8"
    }
  ]
};

export default function RightDrawerComp() {
  const dispatch = useDispatch();
  const toolboxesState = useSelector((state) => 
    state.appBuilderReducer?.toolboxes || {
      1: { isOpenToolBox: true, order: 0 },
      2: { isOpenToolBox: true, order: 1 },
      3: { isOpenToolBox: true, order: 2 },
      4: { isOpenToolBox: true, order: 3 },
      5: { isOpenToolBox: true, order: 4 },
      6: { isOpenToolBox: true, order: 5 }
    }
  );
  // eslint-disable-next-line no-unused-vars
  const [currentData, setCurrentData] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);
  
  const handleDataChange = (newData) => {
    setCurrentData(newData);
    // Do something with the updated data
    console.log(currentData, "Hola new data");
  };

  const handleReset = () => {
    setResetTrigger(prev => prev + 1);
  };

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
      content  : <PropsSelector />,
      id       : 3,
      resize   : "both",
      toolTitle: "Select Props for Component",
    },
    {
      content: <>
        <CoreButton 
          onClick={handleReset}
          variant="contained"
          styleClasses={[CoreClasses.MARGIN.MB2]}>
        Reset
        </CoreButton>

        <DraggableComponentNavigator
          initialData={initialData}
          onDataChange={handleDataChange}
          resetKey={resetTrigger}
        />
      </>,
      id       : 4,
      resize   : "both",
      toolTitle: "Select Theme",
    },
    {
      content  : <EventsSelector />,
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

          <CoreBox gridProps={{ 
            gridSize    : { md: 4, xs: 4 }, 
            styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] 
          }}>
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

  // Sort toolboxes based on their order in the state
  const sortedToolboxes = [...toolboxes].sort((boxA, boxB) => 
    (toolboxesState[boxA.id]?.order ?? 0) - (toolboxesState[boxB.id]?.order ?? 0)
  );

  // Get only visible toolboxes
  const visibleToolboxes = sortedToolboxes.filter(
    toolbox => toolboxesState[toolbox.id]?.isOpenToolBox ?? true
  );

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
            <CoreButton 
              label="Collapse" 
              variant="text" 
              styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]} 
            />
          </CoreTooltip>

          <CoreTooltip title="Expand All Selector" arrow>
            <CoreButton 
              label="Expand" 
              variant="text" 
              styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]} 
            />
          </CoreTooltip>
        </CoreBox>

        <CoreTooltip title="Select Selector Box" arrow>
          <CoreIconButton>
            <CoreIcon icon="more_vert" />
          </CoreIconButton>
        </CoreTooltip>
      </CoreBox>

      {sortedToolboxes.map((toolbox) => {
        const isOpenToolBox = toolboxesState[toolbox.id]?.isOpenToolBox ?? true;
        
        if (!isOpenToolBox) return null;

        // Find position in visible toolboxes array
        const visibleIndex = visibleToolboxes.findIndex(toolBox => toolBox.id === toolbox.id);
        const isFirst = visibleIndex === 0;
        const isLast = visibleIndex === visibleToolboxes.length - 1;
        
        const buttons = [];

        if (!isFirst) buttons.push("keyboard_double_arrow_up");
        if (!isLast) buttons.push("keyboard_double_arrow_down");
        buttons.push("remove_circle");

        return (
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
                  } else if (buttonIcon === "keyboard_double_arrow_up") {
                    dispatch(reorderToolbox(toolbox.id, "up"));
                  } else if (buttonIcon === "keyboard_double_arrow_down") {
                    dispatch(reorderToolbox(toolbox.id, "down"));
                  }
                }}
              >
                <CoreIcon
                  icon={buttonIcon}
                  color={
                    buttonIcon === "remove_circle" 
                      ? (isOpenToolBox ? "primary" : "default")
                      : "inherit"
                  }
                />
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