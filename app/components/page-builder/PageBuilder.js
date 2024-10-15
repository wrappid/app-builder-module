import { CoreLayoutItem, RightDrawerLayout } from "@wrappid/core";

import ContentComp from "./content-components/ContentComp";
import HeaderComp from "./header-components/HeaderComp";
import RightDrawerComp from "./right-drawer-components/RightDrawerComp";

export default function PageBuilder() {
  return (
    <> 
      {/* Header area of pagebuilder */} 
      <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.Header}>
        <HeaderComp />
      </CoreLayoutItem>
      
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