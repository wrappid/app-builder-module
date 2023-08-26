import { CoreClasses, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CoreAvatarDocs from "./CoreAvatar.docs";
import CoreBadgeDocs from "./CoreBadge.docs";
// import CoreChipDocs from "./CoreChip.docs";
// import CoreDividerDocs from "./CoreDivider.docs";
// import CoreH1Docs from "./heading/CoreH1.docs";
// import CoreH2Docs from "./heading/CoreH2.docs";
// import CoreH3Docs from "./heading/CoreH3.docs";
// import CoreH4Docs from "./heading/CoreH4.docs";
// import CoreH5Docs from "./heading/CoreH5.docs";
// import CoreH6Docs from "./heading/CoreH6.docs";
// import CoreLabelDocs from "./paragraph/CoreLabel.docs.js";
// import CoreTypographyBody1Docs from "./paragraph/CoreTypographyBody1.docs";
// import CoreTypographyBody2Docs from "./paragraph/CoreTypographyBody2.docs";
// import CoreTypographyButtonDocs from "./paragraph/CoreTypographyButton.docs";
// import CoreTypographyCaptionDocs from "./paragraph/CoreTypographyCaption.docs";
// import CoreTypographyOverlineDocs from "./paragraph/CoreTypographyOverline.docs";
// import CoreTypographySubtitle1Docs from "./paragraph/CoreTypographySubtitle1.docs";
// import CoreTypographySubtitle2Docs from "./paragraph/CoreTypographySubtitle2.docs";
// import CoreListDocs from "./CoreList.docs";
// import CoreTableDocs from "./CoreTable.docs";
// import CoreTooltipDocs from "./CoreTooltip.docs";

export default function DataDisplay() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        Data Display Components
      </CoreH4>

      <CoreTypographyBody1>
        Some description related to Data Display components must go here.
      </CoreTypographyBody1>

      <CoreAvatarDocs />

      <CoreBadgeDocs />

      {/* <CoreH1Docs />      

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
      
      <CoreChipDocs />

      <CoreDividerDocs />

      <CoreListDocs />

      <CoreTableDocs />

      <CoreTooltipDocs /> */}
    </>
  );
}
