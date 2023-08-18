import React from "react";
import {
  CoreLabel,
  CoreTypographyBody1,
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreH5,
  CoreDivider,
  CoreClasses,
} from "@wrappid/core";

import PropsSection from "../PropsSection";

export default function CoreLabelDocs() {
  const summary = `import React from 'react';
import {CoreLabel} from "@wrappid/core";

export default function CoreLabelDocs() {

  return (
    <CoreLabel>CoreLabel. CoreLabel</CoreLabel>
  );
}
`;

  return (
    <>
      <CoreLabel>CoreLabel</CoreLabel>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>
        Props used exactly as in MUI
      </CoreH5>

      <PropsSection
        propName={"children"}
        subtitle={"Override or extend the styles applied to the component."}
        types={"'object'"}
      />

      <PropsSection
        propName={"size"}
        subtitle={"The size of the component."}
        types={"'normal' | 'small' | string"}
        defaultProp={true}
        defaultType={"'normal'"}
      />

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>
        Props used with different names than in MUI
      </CoreH5>

      <PropsSection
        propName={"styleClasses"}
        subtitle={"Set the text-align on the component."}
        types={"'center' | 'inherit' | 'justify' | 'left' | 'right'"}
      />

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>
        Props to be supported in future
      </CoreH5>

      <PropsSection
        propName={"color"}
        subtitle={"The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide in MUI."}
        types={"'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning' | string"}
        defaultProp={false}
      />

      <PropsSection
        propName={"disableAnimation"}
        subtitle={"If true, the transition animation is disabled."}
        types={"bool"}
        defaultProp={true}
        defaultType={"false"}
      />

      <PropsSection
        propName={"disabled"}
        subtitle={"If true, the component is disabled."}
        types={"bool"}
        defaultProp={false}
      />

      <PropsSection
        propName={"error"}
        subtitle={"If true, the label is displayed in an error state."}
        types={"bool"}
        defaultProp={false}
      />

      <PropsSection
        propName={"variant"}
        subtitle={"The variant to use."}
        types={
          "'filled' | 'outlined' | 'standard'"
        }
        defaultProp={true}
        defaultType={"'body1'"}
      />

      <PropsSection
        propName={"focused"}
        subtitle={
          "If true, the input of this label is focused."
        }
        types={"bool"}
        defaultProp={false}
      />

      <PropsSection
        propName={"margin"}
        subtitle={
          "If dense, will adjust vertical spacing. This is normally obtained via context from FormControl."
        }
        types={"dense"}
        defaultProp={false}
      />

      <CoreH5 styleClasses={[CoreClasses.MARGIN.MY1]}>
        Props never to be supported
      </CoreH5>

      <CoreTypographyBody1>{"sx"}</CoreTypographyBody1>

      <CoreDivider />
    </>
  );
}

// all stuff related to CoreLabel
