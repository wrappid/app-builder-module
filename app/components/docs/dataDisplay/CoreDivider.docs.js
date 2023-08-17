import { CoreAccordion, CoreAccordionDetail, CoreAccordionSummary, CoreBadge, CoreClasses, CoreH2, CoreH4, CoreIcon, CoreTypographyBody1 } from "@wrappid/core";

export default function CoreDividerDocs(){
  const summary = `import React from 'react';
    import {CoreH1} from "@wrappid/core";
    
    export default function CoreH1Docs() {
    
      return (
        <CoreH1>CoreH1. Heading</CoreH1>
      );
    }
    `;
  
  return (
    <>
      <CoreH2>CoreDivider</CoreH2>

      <CoreTypographyBody1>A divider is a thin line that groups content in lists and layouts.</CoreTypographyBody1>
  
      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>
    </>
  );
}