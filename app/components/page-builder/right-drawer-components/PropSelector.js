import { useState, useEffect } from "react";

import {
  CoreBox,
  CoreTypographyBody1,
  CoreButton,
  CoreComponentsRegistry,
  CoreStack,
  CoreSelect,
  CoreMenuItem,
  CoreTextField,
  CoreSwitch
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { togglePropSelector, updateComponentProps } from "../../../actions/test.action";

// Utility function to safely parse JSON
const safeJSONParse = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

// Utility function to safely parse function strings
const safeFunctionParse = (value) => {
  try {
    if (typeof value === "function") {
      return value; // Return the function directly
    }

    if (typeof value === "string") {
      const trimmedValue = value.trim();

      if (trimmedValue.startsWith("(") && trimmedValue.includes(")") && trimmedValue.includes("=>")) {
        const arrowFunc = new Function(`return ${trimmedValue}`)(); // Create a function from the string

        return arrowFunc;
      } else if (trimmedValue.startsWith("function")) {
        const regFunc = new Function(`return (${trimmedValue})`)(); // Create a function from the string

        return regFunc;
      }
    }

    throw new Error("Invalid function format");
  } catch (error) {
    return null;
  }
};

// Utility function to get the selected component from the state
const getSelectedComponent = (componentsInBoxes, activeBox, componentPath) => {
  if (!componentPath || !Array.isArray(componentPath)) return null;

  let currentComponent = componentsInBoxes?.[activeBox]?.children;

  for (let i = 0; i < componentPath.length; i++) {
    if (currentComponent && currentComponent[componentPath[i]]) {
      currentComponent = currentComponent[componentPath[i]];
      if (currentComponent.children && i < componentPath.length - 1) {
        currentComponent = currentComponent.children;
      }
    } else {
      return null;
    }
  }

  return currentComponent;
};

export default function PropSelector() {
  const dispatch = useDispatch();
  const [propsValues, setPropsValues] = useState({});
  const [availableProps, setAvailableProps] = useState([]);

  const propsComponentPath = useSelector((state) => state.testBuilderReducer?.propsComponentPath);
  const componentsInBoxes = useSelector((state) => state.testBuilderReducer?.componentsInBoxes);
  const activeBox = propsComponentPath?.placeholderIndex;

  const selectedComponent = getSelectedComponent(componentsInBoxes, activeBox, propsComponentPath?.componentPath);

  useEffect(() => {
    if (selectedComponent) {
      const selectedKey = selectedComponent.component;
      const component = CoreComponentsRegistry[selectedKey];
      const props = component && component.comp && component.comp.validProps
        ? component.comp.validProps
        : [];

      setAvailableProps(props);
      
      const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;

      setPropsValues(prevValues => ({
        ...prevValues,
        [componentId]: selectedComponent.props || {}
      }));
    }
  }, [selectedComponent, activeBox, propsComponentPath]);

  useEffect(() => {
    if (propsComponentPath) {
      const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
      const componentProps = propsValues[componentId];

      if (componentProps && Object.keys(componentProps).length > 0) {
        dispatch(updateComponentProps(propsComponentPath, componentProps));
      }
    }
  }, [propsValues, dispatch, propsComponentPath, activeBox]);

  const handleChange = (propName, value, propType) => {
    const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
    let parsedValue = value;

    switch (propType) {
      case "boolean":
        parsedValue = value === "true" || value === true;
        break;

      case "number":
        parsedValue = Number(value);
        break;

      case "integer":
        parsedValue = Number(value);
        break;

      case "object":
        break;

      case "array":
        parsedValue = safeJSONParse(value);
        if (parsedValue === null) return; // Don't update if parsing fails
        break;

      case "function":
        if (typeof value === "string") {
          const parsedFunction = safeFunctionParse(value); // Parse the function string

          if (parsedFunction === null) {
            return; // If parsing fails, do not update the state
          }
          // Store the function as a string representation for Redux
          parsedValue = parsedFunction.toString();
        }
        break;

      case "day":
        break;

      case "month":
        break;

      case "year":
        parsedValue = new Date(value);
        break;

      case "element":
        break;

      case "node":
        break;

      case "ref":
        break;

      case "element string":
        break;

      case "HTML element":
        break;

      case "any":
        break;

      default:
        // Keep as string for other types
        break;
    }

    setPropsValues(prevValues => ({
      ...prevValues,
      [componentId]: {
        ...prevValues[componentId],
        [propName]: parsedValue
      }
    }));
  };

  const renderPropInput = (prop, typeObj) => {
    const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
    const currentProps = propsValues[componentId] || {};
    const currentValue = currentProps[prop.name] ?? "";

    switch (typeObj.type) {
      case "boolean":
        return (
          <CoreSwitch
            checked={Boolean(currentValue)}
            onChange={(event) => handleChange(prop.name, event.target.checked, "boolean")}
          />
        );
        
      case "number":
        return (
          <CoreTextField
            type="number"
            fullWidth
            value={currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
          />
        );

      case "integer":
        return (
          <CoreTextField
            type="number"
            fullWidth
            value={currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
          />
        );

      case "object":
        return;

      case "array":
        return (
          <CoreTextField
            fullWidth
            multiline
            rows={3}
            value={typeof currentValue === "object" ? JSON.stringify(currentValue, null, 2) : currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
          />
        );

      case "function":
        return (
          <CoreTextField
            fullWidth
            multiline
            rows={3}
            value={typeof currentValue === "function" ? currentValue.toString() : currentValue} // Display function as string
            onChange={(event) => handleChange(prop.name, event.target.value, "function")}
          />
        );

      case "day":
        return;

      case "month":
        return;

      case "year":
        return;

      case "element":
        return;

      case "node":
        return;

      case "ref":
        return;

      case "element string":
        return;

      case "HTML element":
        return (
          <CoreBox>
            <CoreTextField
              fullWidth
              value={currentValue}
              onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
            />

            <CoreTypographyBody1 color="warning">
              Warning: {typeObj.type} is stored as a string.
            </CoreTypographyBody1>
          </CoreBox>
        );

      case "any":
        return (
          <CoreTextField
            fullWidth
            multiline
            rows={2}
            value={currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, "any")}
          />
        );

      default:
        if (typeObj.validValues && typeObj.validValues.length > 0) {
          return (
            <CoreSelect
              fullWidth
              value={currentValue}
              onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
              displayEmpty
            >
              <CoreMenuItem value="" disabled>Select...</CoreMenuItem>

              {typeObj.validValues.map((validValue) => (
                <CoreMenuItem key={String(validValue)} value={validValue}>
                  {String(validValue)}
                </CoreMenuItem>
              ))}
            </CoreSelect>
          );
        } else {
          return (
            <CoreTextField
              fullWidth
              value={currentValue}
              onChange={(event) => handleChange(prop.name, event.target.value, typeObj.type)}
            />
          );
        }
    }
  };

  if (!selectedComponent) {
    return null;
  }

  return (
    <CoreBox>
      <CoreTypographyBody1>Props for Component: {selectedComponent.component}</CoreTypographyBody1>

      <CoreStack spacing={2}>
        {availableProps.map((prop, index) => (
          <CoreBox key={index}>
            <CoreTypographyBody1>
              <CoreTypographyBody1 fontWeight="bold">{prop.name}:</CoreTypographyBody1>
            </CoreTypographyBody1>

            {prop.types && prop.types.length > 0 && prop.types.map((typeObj, idx) => (
              <CoreBox key={idx} mt={1}>
                {renderPropInput(prop, typeObj)}
              </CoreBox>
            ))}
          </CoreBox>
        ))}
      </CoreStack>

      <CoreButton onClick={() => dispatch(togglePropSelector(false))}>Close</CoreButton>
    </CoreBox>
  );
}