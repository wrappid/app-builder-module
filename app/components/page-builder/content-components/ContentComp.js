
import { CoreBox, CoreButton, CoreClasses, CoreIcon, CoreIconButton } from "@wrappid/core";

import ViewerOption from "./ViewerOption";

export default function ContentComp() {
  return (
    <>
      <ViewerOption />

      <CoreBox styleClasses={[CoreClasses.MARGIN.MT2, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
        <CoreIconButton>
          <CoreIcon icon="devices"/>
        </CoreIconButton>

        <CoreButton label="Preview" variant="text"/>

        <CoreButton label="Publish"/>
      </CoreBox>
    </>
  );
}