import React from "react";

import { CoreH5, CoreTypographyBody1 } from "@wrappid/core";

import CoreH1Docs from "./heading/CoreH1.docs";
import CoreH2Docs from "./heading/CoreH2.docs";
import CoreH3Docs from "./heading/CoreH3.docs";
import CoreH4Docs from "./heading/CoreH4.docs";
import CoreH5Docs from "./heading/CoreH5.docs";
import CoreH6Docs from "./heading/CoreH6.docs";
import CoreTypographyBody1Docs from "./paragraph/CoreTypographyBody1.docs";
import CoreTypographyButtonDocs from "./paragraph/CoreTypographyButton.docs";
import CoreLabelDocs from "./paragraph/CoreLabel.docs";
import CoreTypographyBody2Docs from "./paragraph/CoreTypographyBody2.docs";
import CoreTypographySubtitle1Docs from "./paragraph/CoreTypographySubtitle1.docs";
import CoreTypographySubtitle2Docs from "./paragraph/CoreTypographySubtitle2.docs";
import CoreTypographyOverlineDocs from "./paragraph/CoreTypographyOverline.docs";
import CoreTypographyCaptionDocs from "./paragraph/CoreTypographyCaption.docs";

export default function DataDisplay() {
  return (
    <>
      <CoreH5>Data Display Components</CoreH5>

      <CoreTypographyBody1>Use typography to present your design and content as clearly and efficiently as possible.</CoreTypographyBody1>

      <CoreH1Docs />
      <CoreH2Docs />
      <CoreH3Docs />
      <CoreH4Docs />
      <CoreH5Docs />
      <CoreH6Docs />
      <CoreTypographyBody1Docs />
      <CoreTypographyBody2Docs />
      <CoreTypographySubtitle1Docs />
      <CoreTypographySubtitle2Docs />
      <CoreTypographyOverlineDocs />
      <CoreTypographyCaptionDocs />
      <CoreTypographyButtonDocs />
      <CoreLabelDocs />


      {/* <Typography /> */}
    </>
  );
}
