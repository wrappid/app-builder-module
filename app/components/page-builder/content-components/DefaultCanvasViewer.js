import {
  CoreBox,
  CoreClasses,
  CoreIcon,
  CoreIconButton,
  CoreLayoutItem,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { setActiveBox, setSelectedComponentPath } from "../../../actions/test.action";

/**
 * Layout data for different layout types
 * @type {Object.<string, string[]>}
 */
export const layoutData = {
  AppContainerLayout : ["CONTENT"],
  BlankLayout        : ["CONTENT"],
  CenteredBlankLayout: ["CONTENT"],
  ComplexLayout      : [
    "CONTENT1",
    "CONTENT2",
    "CONTENT3",
    "CONTENT4",
    "CONTENT5",
    "CONTENT6",
    "CONTENT7",
    "CONTENT8"
  ],
  FixedFooterLayout      : ["CONTENT", "FOOTER"],
  FixedHeaderFooterLayout: ["CONTENT", "FOOTER", "HEADER"],
  FixedHeaderLayout      : ["CONTENT", "HEADER"],
  FooterLayout           : ["CONTENT", "FOOTER"],
  HCenteredBlankLayout   : ["CONTENT"],
  HeaderFooterLayout     : ["CONTENT", "FOOTER", "HEADER"],
  HeaderLayout           : ["CONTENT", "HEADER"],
  LeftDrawerLayout       : ["Content", "Header", "LeftDrawer"],
  LeftRightDrawerLayout  : ["Content", "Header", "LeftDrawer", "RightDrawer"],
  RightDrawerLayout      : ["Content", "Header", "RightDrawer"],
  ThreeColumnLayout      : ["COL_1", "COL_2", "COL_3"],
  TwoColumnLayout        : ["COL_1", "COL_2"],
  VCenteredBlankLayout   : ["CONTENT"]
};

/**
 * DefaultCanvasViewer component
 * @returns {React.Component} The DefaultCanvasViewer component
 */
export default function DefaultCanvasViewer() {
  const dispatch = useDispatch();
  const selectedLayout = useSelector((state) => state.testBuilderReducer?.selectedLayout);
  const componentsInBoxes = useSelector((state) => state.testBuilderReducer?.componentsInBoxes) || [];
  
  const layoutPlaceholders = layoutData[selectedLayout] || [];

  // Dispatch layout selection when the component mounts
  // React.useEffect(() => {
  //   if (selectedLayout) {
  //     dispatch(selectLayout(selectedLayout));
  //   }
  // }, [dispatch, selectedLayout]);

  /**
   * Handles click on add button for parent components
   * @param {number} placeholderIndex - Index of the box where component will be added
   */
  const handleAddClick = (placeholderIndex) => {
    dispatch(setActiveBox(placeholderIndex));
    dispatch(setSelectedComponentPath(null));
  };

  /**
   * Handles click on add button for child components
   * @param {number} placeholderIndex - Index of the box where component will be added
   * @param {number[]} componentPath - Path to the parent component
   */
  const handleAddChildClick = (placeholderIndex, componentPath) => {
    dispatch(setActiveBox(placeholderIndex));
    dispatch(setSelectedComponentPath(componentPath));
  };

  /**
   * Renders components recursively
   * @param {Object[]} components - Array of components to render
   * @param {number} placeholderIndex - Index of the current box
   * @param {number[]} path - Current path in the component tree
   * @returns {React.Component[]} Array of rendered components
   */
  const renderComponents = (components, placeholderIndex, path = []) => {
    const children = components?.children || [];

    return children.map((component, componentIndex) => {
      const currentPath = [...path, componentIndex];

      return (
        <CoreBox
          key={`${placeholderIndex}-${componentIndex}`} // Unique key
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyBody1>{component.component}</CoreTypographyBody1>

          <CoreIconButton
            onClick={() => handleAddChildClick(placeholderIndex, currentPath)}
            size="small"
            variant="text"
          >
            <CoreIcon icon="add" />
          </CoreIconButton>

          <CoreStack spacing={1}>
            {component.children && component.children.length > 0 && renderComponents({ children: component.children }, placeholderIndex, currentPath)}
          </CoreStack>
        </CoreBox>
      );
    });
  };

  return (
    <CoreBox styleClasses={[CoreClasses.BG.BG_DOT_GRID_1, CoreClasses.HEIGHT.VH_75, CoreClasses.OVERFLOW.OVERFLOW_AUTO, CoreClasses.PADDING.P2]}>
      <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1, CoreClasses.SHADOW.NORMAL, CoreClasses.OVERFLOW.OVERFLOW_AUTO]}>
        {layoutPlaceholders && layoutPlaceholders.length > 0 && (
          <>
            {layoutPlaceholders.map((sectionId, placeholderIndex) => (
              <CoreLayoutItem key={sectionId} id={`${selectedLayout}.PLACEHOLDER.${sectionId}`}>
                <CoreTypographyBody1>PLACEHOLDER {placeholderIndex + 1}</CoreTypographyBody1>

                <CoreStack spacing={1}>
                  {renderComponents(componentsInBoxes[placeholderIndex] || {}, placeholderIndex)}
                </CoreStack>

                <CoreIconButton
                  variant="text"
                  onClick={() => handleAddClick(placeholderIndex)}
                >
                  <CoreIcon icon="add" />
                </CoreIconButton>
              </CoreLayoutItem>
            ))}
          </>
        )}
      </CoreBox>
    </CoreBox>
  );
}
