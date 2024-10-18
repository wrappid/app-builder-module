import { useState, useEffect } from "react";

import {
  CoreBox,
  CoreTextField,
  CoreTable,
  CoreTableBody,
  CoreTableRow,
  CoreTableCell,
  CoreClasses,
  CoreTypographyBody2,
  CoreTypographyBody1,
  defaultValidEvents
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { getSelectedComponent, safeFunctionParse } from "./PropUtilities";
import { updateComponentProps } from "../../../actions/app.action";

export default function EventsSelector() {
  const dispatch = useDispatch();
  const [eventValues, setEventValues] = useState({});

  const propsComponentPath = useSelector((state) => state.appBuilderReducer?.propsComponentPath);
  const componentsInBoxes = useSelector((state) => state.appBuilderReducer?.componentsInBoxes);
  const activeBox = propsComponentPath?.placeholderIndex;

  const selectedComponent = getSelectedComponent(componentsInBoxes, activeBox, propsComponentPath?.componentPath);

  useEffect(() => {
    if (selectedComponent) {
      const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;

      setEventValues((prevValues) => ({
        ...prevValues,
        [componentId]: selectedComponent.props || {},
      }));
    }
  }, [selectedComponent, activeBox, propsComponentPath]);

  useEffect(() => {
    if (propsComponentPath) {
      const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
      const componentEvents = eventValues[componentId];

      if (componentEvents && Object.keys(componentEvents).length > 0) {
        dispatch(updateComponentProps(propsComponentPath, componentEvents));
      }
    }
  }, [eventValues, dispatch, propsComponentPath, activeBox]);

  const handleEventChange = (eventName, value) => {
    const componentId = `${activeBox}-${propsComponentPath?.componentPath.join("-")}`;
    const parsedFunction = safeFunctionParse(value);
    
    if (parsedFunction === null) return;

    setEventValues((prevValues) => ({
      ...prevValues,
      [componentId]: {
        ...prevValues[componentId],
        [eventName]: parsedFunction.toString(),
      },
    }));
  };

  if (!selectedComponent) {
    return <CoreTypographyBody1>Click prop button to add events</CoreTypographyBody1>;
  }

  return (
    <CoreBox>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>
        <CoreTypographyBody2>Events - {selectedComponent.component}</CoreTypographyBody2>
      </CoreBox>

      <CoreTable>
        <CoreTableBody styleClasses={[CoreClasses.BORDER.BORDER_STYLE_HIDDEN]}>
          {defaultValidEvents.map((event) => (
            <CoreTableRow key={event.name}>
              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0]}>
                {event.name}:
              </CoreTableCell>

              <CoreTableCell styleClasses={[CoreClasses.PADDING.P0, CoreClasses.BORDER.BO]}>
                <CoreTextField
                  fullWidth
                  multiline
                  rows={3}
                  value={eventValues[`${activeBox}-${propsComponentPath?.componentPath.join("-")}`]?.[event.name] || ""}
                  onChange={(eventObj) => handleEventChange(event.name, eventObj.target.value)}
                />
              </CoreTableCell>
            </CoreTableRow>
          ))}
        </CoreTableBody>
      </CoreTable>
    </CoreBox>
  );
}