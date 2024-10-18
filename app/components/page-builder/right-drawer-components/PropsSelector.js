import { useState, useEffect } from "react";

import {
  CoreBox,
  CoreComponentsRegistry,
  CoreSelect,
  CoreMenuItem,
  CoreTable,
  CoreTableBody,
  CoreTableRow,
  CoreTableCell,
  CoreClasses,
  CoreTypographyBody2,
  CoreTypographyBody1,
  defaultValidProps
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { 
  getSelectedComponent, 
  handlePropChange, 
  renderInputForType 
} from "./PropUtilities";
import StyleSelector from "./StyleSelector";
import { updateComponentProps } from "../../../actions/app.action";

export default function PropsSelector() {
  const dispatch = useDispatch();
  const [propsValues, setPropsValues] = useState({});
  const [availableProps, setAvailableProps] = useState([]);
  const [selectedType, setSelectedType] = useState({});

  const propsComponentPath = useSelector((state) => state.appBuilderReducer?.propsComponentPath);
  const componentsInBoxes = useSelector((state) => state.appBuilderReducer?.componentsInBoxes);
  const activeBox = propsComponentPath?.placeholderIndex;

  const selectedComponent = getSelectedComponent(componentsInBoxes, activeBox, propsComponentPath?.componentPath);

  useEffect(() => {
    if (selectedComponent) {
      const selectedKey = selectedComponent.component;
      const component = CoreComponentsRegistry[selectedKey];
      const props = [...(component?.comp?.validProps || []), ...defaultValidProps];

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
    const parsedValue = handlePropChange(value, propType);
    
    if (parsedValue === null) return;

    setPropsValues((prevValues) => ({
      ...prevValues,
      [componentId]: {
        ...prevValues[componentId],
        [propName]: parsedValue,
      },
    }));
  };

  const renderPropInput = (prop) => {
    const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
    const currentProps = propsValues[componentId] || {};
    const currentValue = currentProps[prop.name] ?? "";
    const selectedPropType = selectedType[prop.name];

    if (prop.name === "styleClasses") {
      return <StyleSelector />;
    }

    if (prop.types && prop.types.length > 1) {
      return (
        <>
          <CoreSelect
            fullWidth
            value={selectedPropType || ""}
            onChange={(event) => setSelectedType(prev => ({
              ...prev,
              [prop.name]: event.target.value
            }))}
            displayEmpty
            variant="standard"
          >
            <CoreMenuItem value="" disabled>Select Type</CoreMenuItem>

            {prop.types.map((typeObj, idx) => (
              <CoreMenuItem key={idx} value={typeObj.type}>
                {typeObj.type}
              </CoreMenuItem>
            ))}
          </CoreSelect>

          {selectedPropType && renderInputForType({
            currentValue,
            onChange: handleChange,
            prop,
            type    : selectedPropType
          })}
        </>
      );
    }

    const type = prop.types?.[0]?.type || typeof currentValue || "string";

    return renderInputForType({
      currentValue,
      onChange: handleChange,
      prop,
      type
    });
  };

  if (!selectedComponent) {
    return <CoreTypographyBody1>Click prop button to add props</CoreTypographyBody1>;
  }

  return (
    <CoreBox>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>
        <CoreTypographyBody2>Properties - {selectedComponent.component}</CoreTypographyBody2>
      </CoreBox>

      <CoreTable>
        <CoreTableBody styleClasses={[CoreClasses.BORDER.BORDER_STYLE_HIDDEN]}>
          {availableProps.map((prop) => (
            <CoreTableRow key={prop.name}>
              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0]}>
                {prop.name}:
              </CoreTableCell>

              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0, CoreClasses.BORDER.BO]}>
                {renderPropInput(prop)}
              </CoreTableCell>
            </CoreTableRow>
          ))}
        </CoreTableBody>
      </CoreTable>
    </CoreBox>
  );
}