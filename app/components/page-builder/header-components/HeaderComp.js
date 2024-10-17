import { CoreBox, CoreButton, CoreClasses, CoreInput, CoreTypographyBody2 } from "@wrappid/core";

import IconSelector from "./IconSelector";
export default function HeaderComp() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.HEIGHT.VH_8,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
      CoreClasses.BG.BG_GREY_100,
      CoreClasses.PADDING.PX1
    ]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
        <CoreButton
          variant="text"
          styleClasses={[CoreClasses.GAP.GAP_1, CoreClasses.COLOR.TEXT_BLACK_50]}>
          <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0, CoreClasses.COLOR.TEXT_BLACK_50]}>Example Module</CoreTypographyBody2>
        </CoreButton>  

        <CoreInput
          id="outlined-basic"
          placeholder="Page Name"
          styleClasses={[CoreClasses.MARGIN.M0]}
        />
      </CoreBox>

      <IconSelector/>

      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.GAP.GAP_2,
        CoreClasses.COLOR.TEXT_BLACK_50
      ]}>
        <CoreButton label="Preview" variant="text" color="inherit"/>

        <CoreButton label="History" variant="text" color="inherit"/>

        <CoreButton label="Request for Review" variant="text" color="inherit"/>
          
        <CoreButton label="Save" />
      </CoreBox>
    </CoreBox>
  );
}