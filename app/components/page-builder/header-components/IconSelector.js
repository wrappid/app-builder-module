import { CoreBox, CoreClasses, CoreIcon, CoreIconButton, CoreTooltip } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import { toggleToolboxOpen } from "../../../actions/app.action"; 

export default function IconSelector() {
  const dispatch = useDispatch();
  const toolboxesState = useSelector((state) => 
    state.appBuilderReducer?.toolboxes || {
      1: { isOpenToolBox: true },
      2: { isOpenToolBox: true },
      3: { isOpenToolBox: true },
      4: { isOpenToolBox: true },
      5: { isOpenToolBox: true },
      6: { isOpenToolBox: true }
    }
  );

  const iconSelectors = [
    { icon: "view_module", id: 1, title: "Layout" },
    { icon: "widgets", id: 2, title: "Component" },
    { icon: "tune", id: 3, title: "Props" },
    { icon: "palette", id: 4, title: "Theme" },
    { icon: "event", id: 5, title: "Event" },
    { icon: "devices", id: 6, title: "Device" },
    { icon: "layers", title: "Navigator" } // No ID for Navigator
  ];

  return (
    <CoreBox
      styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_3]}
    >
      {iconSelectors.map((selector) => {
        const isOpenToolBox = selector.id ? toolboxesState[selector.id]?.isOpenToolBox ?? true : false;

        return (
          <CoreTooltip key={selector.id || selector.title} title={selector.title} arrow>
            <CoreIconButton
              onClick={selector.id ? () => dispatch(toggleToolboxOpen(selector.id, !isOpenToolBox)) : undefined}
            >
              <CoreIcon 
                icon={selector.icon} 
                color={selector.id && isOpenToolBox ? "primary" : "default"} // "Navigator" always gets "default"
              />
            </CoreIconButton>
          </CoreTooltip>
        );
      })}
    </CoreBox>
  );
}
