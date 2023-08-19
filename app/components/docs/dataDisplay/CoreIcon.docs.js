import {
  CoreButton,
  CoreGrid,
  CoreIcon,
  CoreClasses,
  CoreBox,
  CoreStack,
  CoreH5,
  CoreTypographyBody1,
  CoreTypographyBody2,
  __IconTypes,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreIconDocs() {
  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreIcon</CoreH5>

      <CoreTypographyBody1>
        Guidance and suggestions for using icons with Wrappid CoreIcon.
      </CoreTypographyBody1>

      <CodeSample
        title={"SVG Icons"}
        code={`<CoreStack direction="column" spacing={1}>
<CoreGrid>
	<CoreBox gridProps={{ gridSize: 8 }}>
	<CoreTypographyBody2>Filled</CoreTypographyBody2>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 4 }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
		CoreClasses.PADDING.PL5]}>
	<CoreIcon>delete</CoreIcon>
	<CoreIcon>delete_forever</CoreIcon>
	</CoreBox>
</CoreGrid>
<CoreGrid>
	<CoreBox gridProps={{ gridSize: 8 }}>
	<CoreTypographyBody2>Outlined</CoreTypographyBody2>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 4 }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
		CoreClasses.PADDING.PL5]}>
	<CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>delete</CoreIcon>
	<CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>delete_forever</CoreIcon>
	</CoreBox>
</CoreGrid>
<CoreGrid>
	<CoreBox gridProps={{ gridSize: 8 }}>
	<CoreTypographyBody2>Edge-Cases</CoreTypographyBody2>
	</CoreBox>
	<CoreBox gridProps={{ gridSize: 4 }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
		CoreClasses.PADDING.PL5]}>
	<CoreIcon>3d_rotation</CoreIcon>
	<CoreIcon>4k</CoreIcon>
	<CoreIcon>360</CoreIcon>
	</CoreBox>
</CoreGrid>
</CoreStack>`}
        renderElement={
          <CoreStack direction="column" spacing={1}>
            <CoreGrid>
              <CoreBox gridProps={{ gridSize: 8 }}>
                <CoreTypographyBody2>Filled</CoreTypographyBody2>
              </CoreBox>
              <CoreBox
                gridProps={{ gridSize: 4 }}
                styleClasses={[
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.PADDING.PL5,
                ]}
              >
                <CoreIcon>delete</CoreIcon>
                <CoreIcon>delete_forever</CoreIcon>
              </CoreBox>
            </CoreGrid>
            <CoreGrid>
              <CoreBox gridProps={{ gridSize: 8 }}>
                <CoreTypographyBody2>Outlined</CoreTypographyBody2>
              </CoreBox>
              <CoreBox
                gridProps={{ gridSize: 4 }}
                styleClasses={[
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.PADDING.PL5,
                ]}
              >
                <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>
                  delete
                </CoreIcon>
                <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>
                  delete_forever
                </CoreIcon>
              </CoreBox>
            </CoreGrid>
            <CoreGrid>
              <CoreBox gridProps={{ gridSize: 8 }}>
                <CoreTypographyBody2>Edge-Cases</CoreTypographyBody2>
              </CoreBox>
              <CoreBox
                gridProps={{ gridSize: 4 }}
                styleClasses={[
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.PADDING.PL5,
                ]}
              >
                <CoreIcon>3d_rotation</CoreIcon>
                <CoreIcon>4k</CoreIcon>
                <CoreIcon>360</CoreIcon>
              </CoreBox>
            </CoreGrid>

            {/**
             * @todo
             * Need support for Rounded, Two-Tone, Sharp */}
          </CoreStack>
        }
      />

      <CodeSample
        title={"Color"}
        description={
          <>
            Every color comes with three variants namely "main", "light" and
            "dark". Black and white come with 2 variants. For example:
            "TEXT_BLACK" and "TEXT_BLACK_50". Opacity comes in four variants
            namely 25, 50, 75 and 100.
          </>
        }
        code={`<CoreBox styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK, CoreClasses.PADDING.P3]}>
<CoreStack direction="row" spacing={1}>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_LIGHT]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_WARNING]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_WHITE]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_RESET]}>home</CoreIcon>
	<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_OPACITY_75]}>home</CoreIcon>
</CoreStack>
</CoreBox>`}
        renderElement={
          <CoreBox
            styleClasses={[
              CoreClasses.BG.BG_SECONDARY_DARK,
              CoreClasses.PADDING.P3,
            ]}
          >
            <CoreStack direction="row" spacing={2}>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_LIGHT]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_WARNING]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_WHITE]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_RESET]}>
                home
              </CoreIcon>
              <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_OPACITY_75]}>
                home
              </CoreIcon>
            </CoreStack>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Size"}
        code={`<CoreStack direction="row" spacing={2}>
	<CoreIcon fontSize='small'>home</CoreIcon>
	<CoreIcon fontSize='medium'>home</CoreIcon>
	<CoreIcon fontSize='large'>home</CoreIcon>
	<CoreIcon size={'large'}>home</CoreIcon>
</CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreIcon fontSize="small">home</CoreIcon>
            <CoreIcon fontSize="medium">home</CoreIcon>
            <CoreIcon fontSize="large">home</CoreIcon>
            <CoreIcon size={"large"}>home</CoreIcon>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Font Awesome"}
        // description={<></>}
        code={`<CoreStack direction="row" spacing={2}>
<CoreIcon
	type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}
	icon="fa-user-circle"
/>
<CoreButton
	variant="contained"
	startIcon={
		<CoreIcon
			type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}
			icon="fa-user-circle"
		/>
	}
	label="Example"
	OnClick={()=>{}}
/>
</CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreIcon
              type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}
              icon="fa-user-circle"
            />
            <CoreButton
              variant="contained"
              startIcon={
                <CoreIcon
                  type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}
                  icon="fa-user-circle"
                />
              }
							label="Example"
							OnClick={()=>{}}
            />
          </CoreStack>
        }
      />
    </>
  );
}
