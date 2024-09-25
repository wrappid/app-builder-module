import {
  CoreAvatar,
  CoreBox, CoreCard, CoreCardContent, CoreCardHeader, CoreClasses, CoreGrid, CoreH6, CoreIcon, CoreIconButton, 
  CoreTypographyBody1, 
  CoreTypographyBody2
} from "@wrappid/core";

export default function RenderLayoutViewerCanvas() {
  return (
    <>
      <CoreBox
        styleClasses={[CoreClasses.BG.BG_DOT_GRID_1, CoreClasses.HEIGHT.VH_75]}>
        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreGrid styleClasses={[CoreClasses.HEIGHT.VH_25]}>
            <CoreBox gridProps={{ gridSize: 9, styleClasses: [CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.BORDER.BORDER_STYLE_DASHED] }}>
              <CoreTypographyBody1 styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}>Content section</CoreTypographyBody1>
            </CoreBox>

            <CoreBox gridProps={{ gridSize: 3, styleClasses: [CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.BORDER.BORDER_STYLE_DASHED] }}>
              <CoreIconButton>
                <CoreIcon icon="add" fontSize="large"/>
              </CoreIconButton>
            </CoreBox>
          </CoreGrid>

          <CoreBox styleClasses={[
            CoreClasses.HEIGHT.VH_50,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.BORDER.BORDER_STYLE_DASHED
          ]}>
            <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.BORDER.BORDER_STYLE_DASHED]}>
              <CoreCardHeader
                styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}
                avatar={
                  <CoreAvatar styleClasses={[CoreClasses.BG.BG_ERROR, CoreClasses.BORDER.BORDER_STYLE_DASHED]} aria-label="recipe">
        R
                  </CoreAvatar>
                }
                action={
                  <CoreIconButton aria-label="settings" styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}>
                    <CoreIcon icon="more_vert" styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}/>
                  </CoreIconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />

              <CoreCardContent styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}>
                <CoreH6 gutterBottom component="div" styleClasses={[CoreClasses.BORDER.BORDER_STYLE_DASHED]}>
                  Lizard
                </CoreH6>

                <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK, CoreClasses.BORDER.BORDER_STYLE_DASHED]}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </CoreTypographyBody2>
              </CoreCardContent>
            </CoreCard>
          </CoreBox>
        </CoreBox>
      </CoreBox>
    </>
  );
}