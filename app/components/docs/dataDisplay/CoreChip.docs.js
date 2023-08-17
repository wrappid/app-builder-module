import {
  CoreAccordion, CoreAccordionDetail, CoreAccordionSummary, CoreChip, CoreH2, CoreH4, CoreTypographyBody1 
} from "@wrappid/core";

export default function CoreChipDocs(){
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
      <CoreH2>CoreChip</CoreH2>

      <CoreTypographyBody1>Chips are compact elements that represent an input, attribute, or action.</CoreTypographyBody1>
  
      <CoreH4>Basic chip</CoreH4>
      
      <CoreTypographyBody1>The <CoreChip label="chip"/> component supports outlined and filled styling.</CoreTypographyBody1>

      <CoreChip label="Chip Filled" />

      <CoreChip label="Chip Outlined" variant="outlined" />

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>
    </>
  );
}