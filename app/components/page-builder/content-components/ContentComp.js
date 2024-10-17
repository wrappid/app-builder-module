/* eslint-disable etc/no-commented-out-code */

import { CoreBox, CoreClasses } from "@wrappid/core";

import ViewerOption from "./ViewerOption";

export default function ContentComp() {
  return (
    <CoreBox styleClasses={[CoreClasses.HEIGHT.VH_92, CoreClasses.OVERFLOW.OVERFLOW_SCROLL, CoreClasses.SCROLL_BAR_HIDE]}>
      <ViewerOption />

      {/* <CoreBox styleClasses={[CoreClasses.MARGIN.MT2, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
        <CoreIconButton>
          <CoreIcon icon="devices"/>
        </CoreIconButton>

        <CoreButton label="Preview" variant="text"/>

        <CoreButton label="Publish"/>
      </CoreBox> */}
    </CoreBox>
  );
}