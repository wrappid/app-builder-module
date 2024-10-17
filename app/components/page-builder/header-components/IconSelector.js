/* eslint-disable etc/no-commented-out-code */
import { CoreBox, CoreClasses, CoreIcon, CoreIconButton, CoreTooltip } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import { toggleToolboxOpen } from "../../../actions/test.action"; 
export default function IconSelector() {
  const dispatch = useDispatch();
  //   const toolboxesState = useSelector((state) => state.testBuilderReducer?.toolboxes || {}); // Get the current OpenToolBox state from Redux
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
  // JSON-driven configuration for the icon buttons and corresponding toolbox IDs
  const iconSelectors = [
    { icon: "view_module", id: 1, title: "Layout" },
    { icon: "widgets", id: 2, title: "Component" },
    { icon: "tune", id: 3, title: "Props" },
    { icon: "palette", id: 4, title: "Theme" },
    { icon: "event", id: 5, title: "Event" },
    { icon: "devices", id: 6, title: "Device" },
    { icon: "layers", title: "Navigator" }
  ];

  return (
    <CoreBox
      styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_3]}
    >
      {iconSelectors.map((selector) => {
        const isOpenToolBox = toolboxesState[selector.id]?.isOpenToolBox || false;

        return (
          <CoreTooltip key={selector.id} title={selector.title} arrow>
            <CoreIconButton
              onClick={() => dispatch(toggleToolboxOpen(selector.id, !isOpenToolBox))}
            >
              <CoreIcon icon={selector.icon} color={isOpenToolBox === true ? "primary" : "default"}/>
            </CoreIconButton>
          </CoreTooltip>
        );
      })}
    </CoreBox>
  );
}
