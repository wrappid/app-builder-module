/* eslint-disable no-fallthrough */

export const safeJSONParse = (value) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export const safeFunctionParse = (value) => {
  try {
    if (typeof value === "function") {
      return value;
    }
    if (typeof value === "string") {
      const trimmedValue = value.trim();

      if (trimmedValue.startsWith("(") && trimmedValue.includes(")") && trimmedValue.includes("=>")) {
        return new Function(`return ${trimmedValue}`)();
      } else if (trimmedValue.startsWith("function")) {
        return new Function(`return (${trimmedValue})`)();
      }
    }
    throw new Error("Invalid function format");
  } catch (error) {
    return null;
  }
};

export const getSelectedComponent = (componentsInBoxes, activeBox, componentPath) => {
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

export const handlePropChange = (value, propType) => {
  switch (propType) {
    case "boolean":
      return value === "true" || value === true;

    case "number":
      return Number(value);

    case "integer": {
      const parsedInt = parseInt(value, 10);

      return isNaN(parsedInt) ? null : parsedInt;
    }
    
    case "object":
      break;
    
    case "array":
      return safeJSONParse(value);

    case "function":
      return safeFunctionParse(value);

    default:
      return value;
  }
};

export const renderInputForType = ({ 
  type, 
  currentValue, 
  onChange, 
  prop 
}) => {
  const { CoreTextField, CoreSwitch } = require("@wrappid/core");

  switch (type) {
    case "boolean":
      return (
        <CoreSwitch
          checked={Boolean(currentValue)}
          onChange={(event) => onChange(prop.name, event.target.checked, "boolean")}
        />
      );

    case "number":
      
    case "integer":
      return (
        <CoreTextField
          type={type === "integer" ? "text" : "number"}
          fullWidth
          value={currentValue}
          onChange={(event) => onChange(prop.name, event.target.value, type)}
        />
      );

    case "object":

    case "array":

    case "function":
      return (
        <CoreTextField
          fullWidth
          multiline
          rows={3}
          value={typeof currentValue === "object" ? 
            JSON.stringify(currentValue, null, 2) : 
            typeof currentValue === "function" ? 
              currentValue.toString() : 
              currentValue
          }
          onChange={(event) => onChange(prop.name, event.target.value, type)}
          helperText={`Please enter a valid ${type}.`}
        />
      );

    default:
      return (
        <CoreTextField
          fullWidth
          value={currentValue}
          onChange={(event) => onChange(prop.name, event.target.value, type)}
        />
      );
  }
};