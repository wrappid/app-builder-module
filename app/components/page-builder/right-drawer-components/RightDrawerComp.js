import {
  CoreBox, CoreClasses, CoreGrid, CoreIcon, CoreIconButton, CoreSelect, CoreStack, CoreToolBox, CoreTypographyBody1 
} from "@wrappid/core";

import LayoutSelector from "./LayoutSelector";
export default function RightDrawerComp() {

  return (
    <CoreStack spacing={2} styleClasses={[CoreClasses.HEIGHT.VH_100, CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL]}>
    
      {/* Tool box for Layout list */}
        
      <CoreToolBox toolTitle="Select Layout" resize="both">
        <LayoutSelector />
      </CoreToolBox>
            
      {/* Tool box for Component list */}
        
      <CoreToolBox toolTitle="Component Viewer Menu" resize="both">
        <CoreTypographyBody1>Component Viewer Menu</CoreTypographyBody1>
      </CoreToolBox>
            
      {/* Tool box for Props list related to selected component */}
        
      <CoreToolBox toolTitle="Props Viewer Menu" resize="both">
        <CoreTypographyBody1>Props Viewer Menu</CoreTypographyBody1>
      </CoreToolBox>
            
      {/* Tool box for styles list related to selected component */}
        
      <CoreToolBox toolTitle="Styles Viewer Menu" resize="both">
        <CoreTypographyBody1>Default Styles</CoreTypographyBody1>

        <CoreTypographyBody1>Advance Styles</CoreTypographyBody1>
      </CoreToolBox>

      <CoreToolBox toolTitle="Select Device">
        <CoreGrid>
          <CoreSelect
            gridProps={{ gridSize: { md: 12 } }}
            label="Device"
            selectID="currentDevice"
            options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
          />

          <CoreSelect
            gridProps={{ gridSize: { md: 8, xs: 4 } }}
            label="Zoom"
            selectID="currentZoom"
            options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}

          />

          <CoreBox
            gridProps={{ gridSize: { md: 4, xs: 4 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }}
          >
            <CoreIconButton>
              <CoreIcon>screen_rotation</CoreIcon>
            </CoreIconButton>

            <CoreIconButton
              title={"Device posture"}
            >
              <CoreIcon>devices_fold</CoreIcon>
            </CoreIconButton>
          </CoreBox>
        </CoreGrid>
      </CoreToolBox>
            
    </CoreStack>
  );
}