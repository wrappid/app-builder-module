import React, { useState } from "react";

import {
  CoreH5,
  CoreTypographyBody1,
  CoreTooltip,
  CoreIcon,
  CoreIconButton,
  CoreClasses,
  CoreGrid,
  CoreBox,
  CoreButton,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreTooltipDocs() {
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
        title={"Arrow Tooltip"}
        description={
          <>
            You can use the <code>arrow</code> prop to give your tooltip an
            arrow indicating which element it refers to.
          </>
        }
        code={``}
        renderElement={
          <CoreTooltip title="Add" arrow>
            <CoreButton label="Arrow" OnClick={()=>{}}/>
          </CoreTooltip>
        }
      />
    </>
  );
}
