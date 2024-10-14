/* eslint-disable etc/no-commented-out-code */
import {
  CoreBox,
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreComponentsRegistry,
  CoreAccordionSummary,
  CoreIcon,
  CoreAccordion,
  CoreAccordionDetail,
  CoreTypographyBody2
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

  // Filtering layout components from the CoreComponentsRegistry
  const layoutComponentRegistry = Object.fromEntries(
    // eslint-disable-next-line no-unused-vars, id-length
    Object.entries(CoreComponentsRegistry).filter(([_, value]) => value.layout === true) // Changed _ to key
  );

  const prepareLayoutMenu = (layoutComponentRegistry) => {
    return Object.entries(layoutComponentRegistry).map(([layoutName]) => ({
      Children: layoutName,
      id      : layoutName,
      label   : layoutName.trim(),
      name    : layoutName.trim(),
      type    : "layoutName",
    }));
  };

  const allCoreComponents = { ...CoreComponentsRegistry };
  const componentList = Object.keys(allCoreComponents).filter(key => !Object.hasOwn(layoutComponentRegistry, key));

  /**
   * Handles component selection
   * @param {string} component - Name of the selected component
   */
  const handleComponentSelect = (component) => {
    dispatch(addComponent({ boxIndex: activeBox, component, path: selectedComponentPath }));
    dispatch(setActiveBox(null)); // Reset activeBox after adding a component
    dispatch(setSelectedComponentPath(null)); // Reset selectedComponentPath after adding a component
  };

  return (
    <CoreBox>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CoreTypographyBody2>
            Components
          </CoreTypographyBody2>
        </CoreAccordionSummary>

        <CoreAccordionDetail>
          <CoreList variant="grid">
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
        </CoreAccordionDetail>
      </CoreAccordion>

      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CoreTypographyBody2>
            Layouts
          </CoreTypographyBody2>
        </CoreAccordionSummary>

        <CoreAccordionDetail>
          <CoreList variant="grid">
            {prepareLayoutMenu(layoutComponentRegistry).map((layoutItem) => (
              <CoreListItem
                onClick={() => handleComponentSelect(layoutItem.name)}
                key={layoutItem.id}
                styleClasses={[CoreClasses.CURSOR.CURSOR_POINTER]}
              >
                {layoutItem.label}
              </CoreListItem>
            ))}
          </CoreList>
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreBox>
  );
}
