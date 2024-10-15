import React from "react";

import { CoreComponentsRegistry, CoreClasses } from "@wrappid/core";

const propsHandler = (props, styleClasses, defaultProps = {}, componentSpecificDefaults = {}) => {
  let processedProps = { ...props };

  // Handle style classes constants
  if (styleClasses) {
    processedProps.styleClasses = styleClasses.map((styleClass) => {
      const parts = styleClass.split(".");
      let result = CoreClasses;

      for (const part of parts) {
        if (result && typeof result === "object" && part in result) {
          result = result[part];
        } else {
          // If we can't find the nested property, return the original string
          return styleClass;
        }
      }
      return result;
    });
  }

  // Handle default props for any specific components
  const mergedDefaults = { ...defaultProps, ...componentSpecificDefaults };

  // Merge defaults with provided props
  return { ...mergedDefaults, ...processedProps };
};

const CoreComponentRenderer = ({ componentData }) => {
  const renderCoreComponent = (data) => {
    if (!data || typeof data !== "object") {
      return null;
    }

    const ComponentInfo = CoreComponentsRegistry[data.component];
    const ComponentToRender = ComponentInfo?.comp;

    if (!ComponentToRender) {
      // eslint-disable-next-line no-console
      console.warn(`Component ${data.component} not found in CoreComponentsRegistry`);
      return null;
    }

    // eslint-disable-next-line no-unused-vars
    const childrenElements = (data.children || []).map((child, index) =>
      renderCoreComponent({ ...child, key: index })
    );

    // Add default props for specific components
    let componentSpecificDefaults = {};
    // Add more component-specific default props as needed

    // Use propsHandler to process props
    const processedProps = propsHandler(
      data.props || {},
      data.styleClasses,
      ComponentInfo?.defaultProps || {},
      componentSpecificDefaults
    );

    return React.createElement(
      ComponentToRender,
      {
        key: data.key,
        ...processedProps
      }
      // eslint-disable-next-line no-unused-vars
      // childrenElements.length > 0 ? childrenElements : null
    );
  };

  return renderCoreComponent(componentData);
};

export default CoreComponentRenderer;