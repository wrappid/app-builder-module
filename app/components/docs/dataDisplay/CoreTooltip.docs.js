import React, { useState } from "react";

import {
  CoreH5,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTooltip,
  CoreIcon,
  CoreIconButton,
  CoreClasses,
  CoreGrid,
  CoreBox,
  CoreButton,
  CoreStack,
} from "@wrappid/core";

import styled from "styled-components";
import { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";

import CodeSample from "../CodeSample";

const LightTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: CoreClasses.BG.BG_SECONDARY,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: CoreClasses.BG.BG_SECONDARY,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: CoreClasses.BG.BG_SECONDARY,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 16,
    border: "1px solid #dadde9",
  },
}));

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

export default function CoreTooltipDocs() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTable</CoreH5>

      <CoreTypographyBody1>
        Tooltips display informative text when users hover over, focus on, or
        tap an element. When activated, Tooltips display a text label
        identifying an element, such as a description of its function.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic Tooltip"}
        code={`<CoreTooltip title="Delete">
	<CoreIconButton>
		<CoreIcon>delete</CoreIcon>
	</CoreIconButton>
</CoreTooltip>`}
        renderElement={
          <CoreTooltip title="Delete">
            <CoreIconButton>
              <CoreIcon>delete</CoreIcon>
            </CoreIconButton>
          </CoreTooltip>
        }
      />

      <CodeSample
        title={"Positioned Tooltip"}
        description={
          <>
            The <code>Tooltip</code> has 12 placement choices. They don't have
            directional arrows; instead, they rely on motion emanating from the
            source to convey direction.
          </>
        }
        code={`<CoreBox styleClasses={[
CoreClasses.WIDTH.W_100,
CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
]}>
	<CoreTooltip title="Add" placement="top-start">
		<CoreButton variant="text" label="TOP-START" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="top">
		<CoreButton variant="text" label="TOP" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="top-end">
		<CoreButton variant="text" label="TOP-END" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="left-start">
		<CoreButton variant="text" label="LEFT-START" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="left">
		<CoreButton variant="text" label="LEFT" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="left-end">
		<CoreButton variant="text" label="LEFT-END" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="right-start">
		<CoreButton variant="text" label="RIGHT-START" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="right">
		<CoreButton variant="text" label="RIGHT" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="right-end">
		<CoreButton variant="text" label="RIGHT-END" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="bottom-start">
		<CoreButton variant="text" label="BOTTOM-START" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="bottom">
		<CoreButton variant="text" label="BOTTOM" OnClick={()=>{}} />
	</CoreTooltip>
	<CoreTooltip title="Add" placement="bottom-end">
		<CoreButton variant="text" label="BOTTOM-END" OnClick={()=>{}} />
	</CoreTooltip>
</CoreBox>`}
        renderElement={
          <CoreBox
            styleClasses={[
              CoreClasses.WIDTH.W_100,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            ]}
          >
            <CoreTooltip title="Add" placement="top-start">
              <CoreButton variant="text" label="TOP-START" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="top">
              <CoreButton variant="text" label="TOP" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="top-end">
              <CoreButton variant="text" label="TOP-END" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="left-start">
              <CoreButton
                variant="text"
                label="LEFT-START"
                OnClick={() => {}}
              />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="left">
              <CoreButton variant="text" label="LEFT" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="left-end">
              <CoreButton variant="text" label="LEFT-END" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="right-start">
              <CoreButton
                variant="text"
                label="RIGHT-START"
                OnClick={() => {}}
              />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="right">
              <CoreButton variant="text" label="RIGHT" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="right-end">
              <CoreButton variant="text" label="RIGHT-END" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="bottom-start">
              <CoreButton
                variant="text"
                label="BOTTOM-START"
                OnClick={() => {}}
              />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="bottom">
              <CoreButton variant="text" label="BOTTOM" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip title="Add" placement="bottom-end">
              <CoreButton
                variant="text"
                label="BOTTOM-END"
                OnClick={() => {}}
              />
            </CoreTooltip>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Customization"}
        description={<>Here are some examples of customizing the component.</>}
        code={`const LightTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: CoreClasses.BG.BG_SECONDARY,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.arrow}\`]: {
    color: CoreClasses.BG.BG_SECONDARY,
  },
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: CoreClasses.BG.BG_SECONDARY,
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: 16,
    border: "1px solid #dadde9",
  },
}));

<CoreStack direction="row" spacing={2}>
    <LightTooltip variant="text" title="Add">
      <CoreButton label="LIGHT" OnClick={() => {}} />
    </LightTooltip>
    <BootstrapTooltip variant="text" title="Add">
      <CoreButton label="BOOTSTRAP" OnClick={() => {}} />
    </BootstrapTooltip>
    <HtmlTooltip
      variant="text"
      title={
        <>
          <CoreTypographyBody2 color="inherit">
            Tooltip with HTML
          </CoreTypographyBody2>
          <em>{"And here's"}</em> <b>{"some"}</b>{" "}
          <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
        </>
      }
    >
      <CoreButton label="No Wrapping" OnClick={() => {}} />
    </HtmlTooltip>
  </CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <LightTooltip variant="text" title="Add">
              <CoreButton label="LIGHT" OnClick={() => {}} />
            </LightTooltip>
            <BootstrapTooltip variant="text" title="Add">
              <CoreButton label="BOOTSTRAP" OnClick={() => {}} />
            </BootstrapTooltip>
            <HtmlTooltip
              variant="text"
              title={
                <>
                  <CoreTypographyBody2 color="inherit">
                    Tooltip with HTML
                  </CoreTypographyBody2>
                  <em>{"And here's"}</em> <b>{"some"}</b>{" "}
                  <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
                </>
              }
            >
              <CoreButton label="No Wrapping" OnClick={() => {}} />
            </HtmlTooltip>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Arrow Tooltip"}
        description={
          <>
            You can use the <code>arrow</code> prop to give your tooltip an
            arrow indicating which element it refers to.
          </>
        }
        code={`<CoreTooltip title="Add" arrow>
  <CoreButton label="Arrow" OnClick={() => {}} />
</CoreTooltip>`}
        renderElement={
          <CoreTooltip title="Add" arrow>
            <CoreButton label="Arrow" OnClick={() => {}} />
          </CoreTooltip>
        }
      />

      {/* NOT WORKING... disableFocusListener, disableHoverListener, disableTouchListener disabling tooltip*/}
      {/* <CodeSample
        title={"Triggers"}
        description={
          <>
            You can define the types of events that cause a tooltip to show. The
            touch action requires a long press due to the{" "}
            <code>enterTouchDelay</code> prop being set to <code>700ms</code> by
            default.
          </>
        }
        code={`<CoreStack direction="row" spacing={2}>
  <CoreTooltip disableFocusListener title="Add">
    <CoreButton label="Hover or touch" OnClick={()=>{}} variant="text" />
  </CoreTooltip>

  <CoreTooltip disableHoverListener title="Add">
    <CoreButton label="Focus or touch" OnClick={()=>{}} variant="text" />
  </CoreTooltip>

  <CoreTooltip disableFocusListener disableTouchListener title="Add">
    <CoreButton label="Hover" OnClick={()=>{}} variant="text" />
  </CoreTooltip>
</CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreTooltip disableFocusListener title="Add">
              <CoreButton
                label="Hover or touch"
                OnClick={() => {}}
                variant="text"
              />
            </CoreTooltip>

            <CoreTooltip disableHoverListener title="Add">
              <CoreButton
                label="Focus or touch"
                OnClick={() => {}}
                variant="text"
              />
            </CoreTooltip>

            <CoreTooltip disableFocusListener disableTouchListener title="Add">
              <CoreButton label="Hover" OnClick={() => {}} variant="text" />
            </CoreTooltip>
          </CoreStack>
        }
      /> */}

      <CodeSample
        title={"Controlled Tooltips"}
        description={
          <>
            You can use the <code>open</code>, <code>onOpen</code> and{" "}
            <code>onClose</code> props to control the behavior of the tooltip.
          </>
        }
        code={`<CoreTooltip
  open={open}
  onClose={handleClose}
  onOpen={handleOpen}
  title="Add"
>
  <CoreButton label="Controlled" OnClick={() => {}} />
</CoreTooltip>`}
        renderElement={
          <CoreTooltip
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            title="Add"
          >
            <CoreButton label="Controlled" OnClick={() => {}} />
          </CoreTooltip>
        }
      />

      <CodeSample
        title={"Variable Width"}
        description={<></>}
        code={`const CustomWidthTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    maxWidth: 500,
  },
});

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <CoreTooltip {...props} classes={{ popper: className }} />
))({
  [\`& .\${tooltipClasses.tooltip}\`]: {
    maxWidth: "none",
  },
});
  
<CoreStack direction="row" spacing={2}>
  <CoreTooltip variant="text" title={longText}>
    <CoreButton label="Default Width [300px]" OnClick={() => {}} />
  </CoreTooltip>
  <CustomWidthTooltip variant="text" title={longText}>
    <CoreButton label="Custom Width [500px]" OnClick={() => {}} />
  </CustomWidthTooltip>

  <NoMaxWidthTooltip variant="text" title={longText}>
    <CoreButton label="No Wrapping" OnClick={() => {}} />
  </NoMaxWidthTooltip>
</CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreTooltip variant="text" title={longText}>
              <CoreButton label="Default Width [300px]" OnClick={() => {}} />
            </CoreTooltip>
            <CustomWidthTooltip variant="text" title={longText}>
              <CoreButton label="Custom Width [500px]" OnClick={() => {}} />
            </CustomWidthTooltip>

            <NoMaxWidthTooltip variant="text" title={longText}>
              <CoreButton label="No Wrapping" OnClick={() => {}} />
            </NoMaxWidthTooltip>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Interactive"}
        description={
          <>
            Tooltips are interactive by default. It won't close when the user
            hovers over the tooltip before the <code>leaveDelay</code> is
            expired. You can disable this behavior (thus failing the success
            criterion which is required to reach level AA) by passing{" "}
            <code>disableInteractive</code>.
          </>
        }
        code={`<CoreTooltip title="Add" disableInteractive>
  <CoreButton variant="text" label="Not interactive" OnClick={() => {}} />
</CoreTooltip>`}
        renderElement={
          <CoreTooltip title="Add" disableInteractive>
            <CoreButton
              variant="text"
              label="Not interactive"
              OnClick={() => {}}
            />
          </CoreTooltip>
        }
      />

      <CodeSample
        title={"Disabled Elements"}
        description={
          <>
            By default disabled elements like <code>{`<CoreButton>`}</code> do
            not trigger user interactions so a <code>CoreTooltip</code> will not
            activate on normal events like hover. To accommodate disabled
            elements, add a simple wrapper element, such as a <code>span</code>.
          </>
        }
        code={`<CoreTooltip
  component="span"
  title="You don't have permission to do this"
>
  <span>
    <CoreButton
      label="A Disabled Button"
      OnClick={() => {}}
      disabled
    />
  </span>
</CoreTooltip>`}
        renderElement={
          <CoreTooltip
            component="span"
            title="You don't have permission to do this"
          >
            <span>
              <CoreButton
                label="A Disabled Button"
                OnClick={() => {}}
                disabled
              />
            </span>
          </CoreTooltip>
        }
      />

      <CodeSample
        title={"Transition"}
        description={<>Use different transition.</>}
        code={`<CoreStack direction="row" spacing={2}>
  <CoreTooltip title="Add">
    <CoreButton label="Grow" OnClick={()=>{}} />
  </CoreTooltip>
  <CoreTooltip
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title="Add"
  >
    <CoreButton label="Fade" OnClick={()=>{}} />
  </CoreTooltip>
  <CoreTooltip TransitionComponent={Zoom} title="Add">
    <CoreButton label="Zoom" OnClick={()=>{}} />
  </CoreTooltip>
</CoreStack>`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreTooltip title="Add">
              <CoreButton label="Grow" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              title="Add"
            >
              <CoreButton label="Fade" OnClick={() => {}} />
            </CoreTooltip>
            <CoreTooltip TransitionComponent={Zoom} title="Add">
              <CoreButton label="Zoom" OnClick={() => {}} />
            </CoreTooltip>
          </CoreStack>
        }
      />

      {/* NOT WORKING... Hover on element to show tooltip does not work */}
      {/* <CodeSample
        title={"Follow cursor"}
        description={<></>}
        code={``}
        renderElement={
          <CoreTooltip
            title="You don't have permission to do this"
            followCursor
          >
            <CoreBox
              styleClasses={[
                CoreClasses.BG.BG_SECONDARY_DARK,
                CoreClasses.PADDING.P2,
              ]}
            >
              Disabled Action
            </CoreBox>
          </CoreTooltip>
        }
      /> */}

      <CodeSample
        title={"Showing and Hiding"}
        description={
          <>
            The tooltip is normally shown immediately when the user's mouse
            hovers over the element, and hides immediately when the user's mouse
            leaves. A delay in showing or hiding the tooltip can be added
            through the <code>enterDelay</code> and <code>leaveDelay</code>{" "}
            props, as shown in the Controlled Tooltips demo above.
          </>
        }
        code={`<CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
  <CoreButton label="[500ms, 200ms]" OnClick={()=>{}}/>
</CoreTooltip>`}
        renderElement={
          <CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
            <CoreButton label="[500ms, 200ms]" OnClick={()=>{}}/>
          </CoreTooltip>
        }
      />
    </>
  );
}
