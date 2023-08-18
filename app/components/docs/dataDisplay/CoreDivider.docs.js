import {
  CoreH5,
  CoreClasses,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreDivider,
  CoreListItemIcon,
  CoreAvatar,
  CoreBox,
  CoreChip,
  CoreIcon,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreDividerDocs() {
  const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
  Nulla ut facilisis ligula.`;

  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreDivider
      </CoreH5>

      <CoreTypographyBody1>
        A divider is a thin line that groups content in lists and layouts.
      </CoreTypographyBody1>

      {/* List Divider */}
      <CodeSample
        title={"List dividers"}
        description={
          <>Can be rendered by simply using CoreDivider component.</>
        }
        code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_PRIMARY]}>
  <CoreListItem>
    <CoreListItemText primary="ListItem 1" />
  </CoreListItem>
  <CoreDivider />
  <CoreListItem>
    <CoreListItemText primary="ListItem 2" />
  </CoreListItem>
  <CoreDivider />
  <CoreListItem>
    <CoreListItemText primary="ListItem 3" />
  </CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_PRIMARY]}>
            <CoreListItem>
              <CoreListItemText primary="ListItem 1" />
            </CoreListItem>
            <CoreDivider />
            <CoreListItem>
              <CoreListItemText primary="ListItem 2" />
            </CoreListItem>
            <CoreDivider />
            <CoreListItem>
              <CoreListItemText primary="ListItem 3" />
            </CoreListItem>
          </CoreList>
        }
      />

      {/* Inset Divider */}
      {/* <CodeSample
      title={"Inset dividers"}
      code={`<CoreList>
  <CoreListItem>
    <CoreListItemText primary="ListItem 1" />
  </CoreListItem>
  <CoreDivider />
  <CoreListItem>
    <CoreListItemText primary="ListItem 2" />
  </CoreListItem>
  <CoreDivider />
  <CoreListItem>
    <CoreListItemText primary="ListItem 3" />
  </CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.TEXT.TEXT_CENTER, CoreClasses.BG.BG_PRIMARY]}>
            <CoreListItem>
              <CoreListItemIcon><CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" /></CoreListItemIcon>
              <CoreListItemText primary="ListItem 1" secondary="Jan 9, 2014" />
            </CoreListItem>
            <CoreDivider variant="inset" />
            <CoreListItem>
            <CoreListItemIcon><CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" /></CoreListItemIcon>
              <CoreListItemText primary="ListItem 2" secondary="Jan 9, 2014" />
            </CoreListItem>
            <CoreDivider variant="inset"/>
            <CoreListItem>
            <CoreListItemIcon><CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" /></CoreListItemIcon>
              <CoreListItemText primary="ListItem 3" secondary="Jan 9, 2014" />
            </CoreListItem>
          </CoreList>
        }
      
      /> */}

      {/* Dividers with text */}
      <CodeSample
        title={"Dividers with text"}
        description={
          <>You can also render a divider with content.</>
        }
        code={`<CoreList styleClasses={[CoreClasses.BG.BG_PRIMARY]}>
  <CoreListItem>
    <CoreListItemText primary={sampleText} />
  </CoreListItem>
  <CoreDivider textAlign="center">CENTER</CoreDivider>
  <CoreListItem>
    <CoreListItemText primary={sampleText} />
  </CoreListItem>
  <CoreDivider textAlign="left">LEFT</CoreDivider>
  <CoreListItem>
    <CoreListItemText primary={sampleText} />
  </CoreListItem>
  <CoreDivider textAlign="right">RIGHT</CoreDivider>
  <CoreListItem>
    <CoreListItemText primary={sampleText} />
  </CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList styleClasses={[CoreClasses.BG.BG_PRIMARY]}>
            <CoreListItem>
              <CoreListItemText primary={sampleText} />
            </CoreListItem>
            <CoreDivider textAlign="center">CENTER</CoreDivider>
            <CoreListItem>
              <CoreListItemText primary={sampleText} />
            </CoreListItem>
            <CoreDivider textAlign="left">LEFT</CoreDivider>
            <CoreListItem>
              <CoreListItemText primary={sampleText} />
            </CoreListItem>
            <CoreDivider textAlign="right">RIGHT</CoreDivider>
            <CoreListItem>
              <CoreListItemText primary={sampleText} />
            </CoreListItem>
            <CoreDivider><CoreChip label="CHIP" /></CoreDivider>
            <CoreListItem>
              <CoreListItemText primary={sampleText} />
            </CoreListItem>
          </CoreList>
        }
      />

      {/* Vertical Divider */}
      <CodeSample
        title={"Vertical Divider"}
        description={
          <>You can also render a divider vertically using the orientation prop.</>
        }
        code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_1, CoreClasses.BG.BG_PRIMARY, CoreClasses.PADDING.P1]}>
  <CoreIcon>format_align_left</CoreIcon>
  <CoreIcon>format_align_center</CoreIcon>
  <CoreIcon>format_align_right</CoreIcon>
  <CoreDivider orientation="vertical" flexItem/>
  <CoreIcon>format_bold</CoreIcon>
  <CoreIcon>format_italic</CoreIcon>
</CoreBox>`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_1, CoreClasses.BG.BG_PRIMARY, CoreClasses.PADDING.P1]}>
            <CoreIcon>format_align_left</CoreIcon>
            <CoreIcon>format_align_center</CoreIcon>
            <CoreIcon>format_align_right</CoreIcon>
            <CoreDivider orientation="vertical" flexItem/>
            <CoreIcon>format_bold</CoreIcon>
            <CoreIcon>format_italic</CoreIcon>
          </CoreBox>
        }
      />

      {/*  */}
    </>
  );
}
