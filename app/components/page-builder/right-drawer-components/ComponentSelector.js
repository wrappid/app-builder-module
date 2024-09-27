import {
  CoreBox,
  CoreClasses,
  CoreTypographyBody1,
  CoreList,
  CoreListItem
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { addComponent, setActiveBox, setSelectedComponentPath } from "../../../actions/test.action";

/**
 * ComponentSelector component
 * @returns {React.Component} The ComponentSelector component
 */
export default function ComponentSelector() {
  const dispatch = useDispatch();
  const activeBox = useSelector((state) => state.testBuilderReducer?.activeBox);
  const selectedComponentPath = useSelector((state) => state.testBuilderReducer?.selectedComponentPath);
  const componentList = ["Header", "Footer", "Button", "Image"];

  /**
   * Handles component selection
   * @param {string} component - Name of the selected component
   */
  const handleComponentSelect = (component) => {
    dispatch(addComponent({ boxIndex: activeBox, component, path: selectedComponentPath }));
    // Reset activeBox and selectedComponentPath after adding a component
    dispatch(setActiveBox(null));
    dispatch(setSelectedComponentPath(null));
  };

  if (activeBox === null) {
    return (
      <CoreBox>
        <CoreTypographyBody1>Click &quot;+&quot; on the canvas layout to add a component</CoreTypographyBody1>
      </CoreBox>
    );
  }

  return (
    <CoreBox>
      <CoreTypographyBody1>Select Component for Box {activeBox + 1}</CoreTypographyBody1>

      <CoreList>
        {componentList.map((comp) => (
          <CoreListItem 
            onClick={() => handleComponentSelect(comp)} 
            key={comp}
            styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER]}
          >
            {comp}
          </CoreListItem>
        ))}
      </CoreList>
    </CoreBox>
  );
}