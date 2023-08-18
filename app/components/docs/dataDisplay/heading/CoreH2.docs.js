import {
  CoreH2,
  CoreTypographyBody1,
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreH5,
  CoreDivider,
  CoreClasses
} from "@wrappid/core";

import PropsSection from "../PropsSection";

export default function CoreH2Docs() {
  const summary = `import React from 'react';
import {CoreH2} from "@wrappid/core";

export default function CoreH2Docs() {

  return (
    <CoreH2>CoreH2. Heading</CoreH2>
  );
}
`;

  return (
    <>
      <CoreH2>CoreH2. Heading</CoreH2>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>Props used exactly as in MUI</CoreH5>

      <PropsSection propName={"children"} subtitle={"Override or extend the styles applied to the component."} types={"'object'"} />
      
      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>Props used with different names than in MUI</CoreH5>

      <PropsSection propName={"styleClasses"} subtitle={"Set the text-align on the component."} types={"'center' | 'inherit' | 'justify' | 'left' | 'right'"} />

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>Props to be supported in future</CoreH5>

      <PropsSection
        propName={"variant"}
        subtitle={"Applies the theme typography styles."}
        types={"'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string"}
        defaultProp={true}
        defaultType={"'body1'"} />

      <PropsSection
        propName={"variantMapping"}
        subtitle={"The component maps the variant prop to a range of different HTML element types. For instance, subtitle1 to <h6>. If you wish to change that mapping, you can provide your own."}
        types={"object"}
        defaultProp={true}
        defaultType={"{ h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p', inherit: 'p', }"} />

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>Props never to be supported</CoreH5>

      <CoreTypographyBody1>{"sx"}</CoreTypographyBody1>

      <CoreDivider />
    </>
  );
}

// all stuff related to CoreH2