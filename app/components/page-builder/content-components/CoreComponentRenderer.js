import React from "react";

import { CoreComponentsRegistry } from "@wrappid/core";

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

    const childrenElements = (data.children || []).map((child, index) =>
      renderCoreComponent({ ...child, key: index })
    );

    // Add default Props

    // Add default props for specific components
    let defaultProps = { };

    if (data.component === "CoreIcon") {
      defaultProps = { ...defaultProps, icon: "star" }; // Example default icon
    } else if (data.component === "CoreAvatar") {
      defaultProps = { ...defaultProps, alt: "User" };
    }
    // Add more component-specific default props as needed

    return React.createElement(
      ComponentToRender,
      { 
        key: data.key,
        ...defaultProps,
        // Pass props here
      },
      childrenElements.length > 0 ? childrenElements : null
    );
  };

  return renderCoreComponent(componentData);
};

export default CoreComponentRenderer;