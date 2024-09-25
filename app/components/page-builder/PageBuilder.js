import { CoreLayoutItem, RightDrawerLayout } from "@wrappid/core";

import ContentComp from "./content-components/ContentComp";
import RightDrawerComp from "./right-drawer-components/RightDrawerComp";

export default function PageBuilder() {
  return (
    <>  
      {/* Content area of pagebuilder */}
      <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.Content}>
        <ContentComp />
      </CoreLayoutItem>

      {/* Right-Drawer area of pagebuilder */}
      <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.RightDrawer}>
        <RightDrawerComp />
      </CoreLayoutItem>
    </>
  );
}