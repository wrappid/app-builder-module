import React from 'react';
import {
  CoreBox,
  CoreClasses,
  CoreIcon,
  CoreIconButton,
  CoreLayoutItem,
  CoreStack,
  CoreTypographyBody1,
  CoreComponentsRegistry
} from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { setActiveBox, setSelectedComponentPath, addComponent } from "../../../actions/test.action";
import ReactComponentRenderer from './ReactComponentRenderer';

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

  const handleAddClick = (placeholderIndex) => {
    dispatch(setActiveBox(placeholderIndex));
    dispatch(setSelectedComponentPath(null));
  };

  const handleAddChildClick = (placeholderIndex, componentPath) => {
    dispatch(setActiveBox(placeholderIndex));
    dispatch(setSelectedComponentPath(componentPath));
  };

  const renderComponents = (components, placeholderIndex, path = []) => {
    const children = components?.children || [];

    return children.map((component, componentIndex) => {
      const currentPath = [...path, componentIndex];
      const ComponentInfo = CoreComponentsRegistry[component.component];

      return (
        <CoreBox
          key={`${placeholderIndex}-${componentIndex}`}
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.MB2]}
        >
          <CoreTypographyBody1>
            Component: {component.component} (Category: {ComponentInfo?.category || 'Unknown'})
          </CoreTypographyBody1>

          <CoreBox styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.PADDING.P2, CoreClasses.BG.BG_GREY_200]}>
            <CoreTypographyBody1>Rendered Component:</CoreTypographyBody1>
            <ReactComponentRenderer componentData={component} />
          </CoreBox>

          <CoreIconButton
            onClick={() => handleAddChildClick(placeholderIndex, currentPath)}
            size="small"
            variant="text"
          >
            <CoreIcon icon="add" />
          </CoreIconButton>

          {component.children && component.children.length > 0 && (
            <CoreBox styleClasses={[CoreClasses.MARGIN.MT2, CoreClasses.PADDING.P2, CoreClasses.BG.BG_GREY_100]}>
              <CoreTypographyBody1>Children:</CoreTypographyBody1>
              <CoreStack spacing={1}>
                {renderComponents({ children: component.children }, placeholderIndex, currentPath)}
              </CoreStack>
            </CoreBox>
          )}
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