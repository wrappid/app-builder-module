import { CoreAccordion, CoreAccordionDetail, CoreAccordionSummary, CoreBadge, CoreClasses, CoreH2, CoreH4, CoreIcon, CoreTypographyBody1 } from "@wrappid/core";

export default function CoreBadgeDocs(){
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
      <CoreH2>CoreBadge</CoreH2>

      <CoreTypographyBody1>Badge generates a small badge to the top-right of its child(ren).</CoreTypographyBody1>
  
      <CoreH4>Basic badge</CoreH4>
      
      <CoreTypographyBody1>Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.</CoreTypographyBody1>

      <CoreBadge badgeContent={4} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}><CoreIcon>mail</CoreIcon></CoreBadge>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>
    </>
  );
}