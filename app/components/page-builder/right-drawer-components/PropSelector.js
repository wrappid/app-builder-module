import { useState, useEffect } from "react";

import {
  CoreBox,
  CoreTypographyBody1,
  CoreButton,
  CoreComponentsRegistry,
  CoreSelect,
  CoreMenuItem,
  CoreTextField,
  CoreSwitch,
  CoreTable,
  CoreTableBody,
  CoreTableRow,
  CoreTableCell,
  CoreClasses
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import StyleSelector from "./StyleSelector";
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
  const [selectedType, setSelectedType] = useState({});

  const propsComponentPath = useSelector((state) => state.testBuilderReducer?.propsComponentPath);
  const componentsInBoxes = useSelector((state) => state.testBuilderReducer?.componentsInBoxes);
  const activeBox = propsComponentPath?.placeholderIndex;

  const selectedComponent = getSelectedComponent(componentsInBoxes, activeBox, propsComponentPath?.componentPath);

  useEffect(() => {
    if (selectedComponent) {
      const selectedKey = selectedComponent.component;
      const component = CoreComponentsRegistry[selectedKey];
      const props = component && component.comp && component.comp.validProps ? component.comp.validProps : [];

      setAvailableProps(props);

      const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;

      setPropsValues((prevValues) => ({
        ...prevValues,
        [componentId]: selectedComponent.props || {},
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
        parsedValue = parseInt(value, 10); // Ensures the value is parsed as an integer in base 10
        if (isNaN(parsedValue)) {
          return; // Don't update if the value is not a valid integer
        }
        break;

      case "object":
        parsedValue = safeJSONParse(value);
        if (parsedValue === null) {
          return; // Don't update if parsing fails
        }
        break;

      case "array":
        parsedValue = safeJSONParse(value);
        if (parsedValue === null) return; // Don't update if parsing fails
        break;

      case "function":
        if (typeof value === "string") {
          const parsedFunction = safeFunctionParse(value); // Parse the function string

          if (parsedFunction === null) return; // If parsing fails, do not update the state
          parsedValue = parsedFunction.toString();
        }
        break;

      default:
        break;
    }

    setPropsValues((prevValues) => ({
      ...prevValues,
      [componentId]: {
        ...prevValues[componentId],
        [propName]: parsedValue,
      },
    }));
  };

  const handleTypeChange = (propName, type) => {
    setSelectedType((prevState) => ({
      ...prevState,
      [propName]: type,
    }));
  };

  const renderPropInput = (prop) => {
    const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
    const currentProps = propsValues[componentId] || {};
    const currentValue = currentProps[prop.name] ?? "";
    const selectedPropType = selectedType[prop.name];

    if (prop.types && prop.types.length > 1) {
      // Multiple types, show a type selector
      return (
        <>
          <CoreSelect
            fullWidth
            value={selectedPropType || ""}
            onChange={(event) => handleTypeChange(prop.name, event.target.value)}
            displayEmpty
            variant="standard"
          >
            <CoreMenuItem value="" disabled>
              Select Type
            </CoreMenuItem>

            {prop.types.map((typeObj, idx) => (
              <CoreMenuItem key={idx} value={typeObj.type}>
                {typeObj.type}
              </CoreMenuItem>
            ))}
          </CoreSelect>

          {/* Render the input based on the selected type */}
          {selectedPropType && renderInputForType(prop, selectedPropType, currentValue)}
        </>
      );
    } else if (prop.types && prop.types.length === 1) {
      // Single type, render the input directly
      return renderInputForType(prop, prop.types[0].type, currentValue);
    }
  };

  const renderInputForType = (prop, type, currentValue) => {
    switch (type) {
      case "boolean":
        return (
          <CoreSwitch
            checked={Boolean(currentValue)}
            onChange={(event) => handleChange(prop.name, event.target.checked, "boolean")}
          />
        );

      case "number":
        return;

      case "integer":
        return (
          <CoreTextField
            type={type === "integer" ? "text" : "number"}
            fullWidth
            value={currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, type)}
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
            onChange={(event) => handleChange(prop.name, event.target.value, type)}
            helperText={`Please enter a valid ${type}.`}
          />
        );

      case "function":
        return (
          <CoreTextField
            fullWidth
            multiline
            rows={3}
            value={typeof currentValue === "function" ? currentValue.toString() : currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, "function")}
          />
        );

      default:
        return (
          <CoreTextField
            fullWidth
            value={currentValue}
            onChange={(event) => handleChange(prop.name, event.target.value, type)}
          />
        );
    }
  };

  if (!selectedComponent) {
    return null;
  }
  return (
    <CoreBox>
      <CoreTypographyBody1>Props for Component: {selectedComponent.component}</CoreTypographyBody1>

      <CoreTable>
        <CoreTableBody styleClasses={[CoreClasses.BORDER.BORDER_STYLE_HIDDEN]}>
          {availableProps.map((prop) => (
            <CoreTableRow key={prop.name}>
              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0]}>
                {prop.name}:
              </CoreTableCell>

              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0, CoreClasses.BORDER.BO]}>{renderPropInput(prop)}</CoreTableCell>
            </CoreTableRow>
          ))}

          <CoreTableRow>
            <CoreTableCell styleClasses={[CoreClasses.PADDING.P0, CoreClasses.BORDER.BO]}>
              styleClasses:
            </CoreTableCell>

            <CoreTableCell styleClasses={[CoreClasses.PADDING.P0, CoreClasses.BORDER.BO]}>
              <StyleSelector />
            </CoreTableCell>
          </CoreTableRow>
          
        </CoreTableBody>
      </CoreTable>

      <CoreButton onClick={() => dispatch(togglePropSelector(false))}>Close</CoreButton>
      
    </CoreBox>
  );
}
