import {
  CoreBox,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreButton
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { togglePropSelector } from "../../../actions/test.action"; // Action to add prop

export default function PropSelector() {
  const dispatch = useDispatch();

  const propsComponentPath = useSelector((state) => state.testBuilderReducer?.propsComponentPath); // Path of the selected component
  const componentsInBoxes = useSelector((state) => state.testBuilderReducer?.componentsInBoxes); // All components in the boxes
  const activeBox = propsComponentPath?.placeholderIndex;

  const getSelectedComponent = (componentsInBoxes, activeBox, componentPath) => {
    if (!componentPath || !Array.isArray(componentPath)) return null; // If no componentPath or not an array, return null

    let currentComponent = componentsInBoxes?.[activeBox]?.children;

    // Traverse the componentPath to reach the target component
    for (let i = 0; i < componentPath.length; i++) {
      if (currentComponent && currentComponent[componentPath[i]]) {
        currentComponent = currentComponent[componentPath[i]];
        // If there are more levels, go deeper into the children
        if (currentComponent.children && i < componentPath.length - 1) {
          currentComponent = currentComponent.children;
        }
      } else {
        return null; // If path is invalid, return null
      }
    }

    return currentComponent; // Return the found component or null if not found
  };

  // Get the selected component using the function
  const selectedComponent = getSelectedComponent(componentsInBoxes, activeBox, propsComponentPath?.componentPath);

  const availableProps = ["color", "size", "variant"]; // Sample props to add (you can fetch dynamic props based on component type)

  // const handlePropSelect = (prop) => {
  //   // Dispatch an action to add the selected prop to the component's props
  //   dispatch(addComponentProp(propsComponentPath, prop));

  //   // Optionally close the PropSelector
  //   dispatch(togglePropSelector(false));
  // };

  if (!selectedComponent) {
    return null; // No component selected
  }else{
    return (
      <CoreBox>
        <CoreTypographyBody1>Select Prop for Component: {selectedComponent.component}</CoreTypographyBody1>

        <CoreList>
          {availableProps.map((prop, index) => (
            <CoreListItem
              key={index}
            // onClick={() => handlePropSelect(prop)} // Add prop on click
            // styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER]}
            >
              {prop}
            </CoreListItem>
          ))}
        </CoreList>

        <CoreButton onClick={() => dispatch(togglePropSelector(false))}>Close</CoreButton>
      </CoreBox>
    );
  }
  
}
