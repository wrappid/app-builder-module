import {
  CoreAccordion, CoreAccordionDetail, CoreChip, CoreAccordionSummary, CoreAvatar, CoreClasses, CoreH4, CoreStack, CoreTypographyBody1, CoreIcon, CoreDivider, CoreH5 
} from "@wrappid/core";

import PropsSection from "./PropsSection";
import CodeSample from "../CodeSample";

export default function CoreAvatarDocs(){
  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreAvatar</CoreH5>

      <CoreTypographyBody1>Avatars are found throughout material design with uses in everything from tables to dialog menus.</CoreTypographyBody1>

      <CodeSample
        title={"Image avatars"}
        description={
          <>
          Image avatars can be created by passing standard 
            {/* eslint-disable-next-line react/jsx-newline */}
            <CoreTypographyBody1 variant="span" code={true}>img</CoreTypographyBody1> props <CoreTypographyBody1 variant="span" code={true}>src</CoreTypographyBody1> or <CoreTypographyBody1 variant="span" code={true}>srcSet</CoreTypographyBody1> to the component.
          </>
        }
        code={`<CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />`}
        renderElement={
          <CoreStack direction="row">
            <CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />

            <CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />

            <CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />
          </CoreStack>
        } />

      <CoreH4>Letter avatars</CoreH4>

      <CoreTypographyBody1>Avatars containing simple characters can be created by passing a string as
        <CoreChip label="children"/>.</CoreTypographyBody1>

      <CoreStack direction="row">
        <CoreAvatar styleClasses={[CoreClasses.BG.BG_BLACK]}>H</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>OP</CoreAvatar>
      </CoreStack>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Sizes</CoreH4>

      <CoreTypographyBody1>You can change the size of the avatar with the <CoreChip label="height"/> and 

        <CoreChip label="width"/> CSS properties.</CoreTypographyBody1>

      <CoreStack direction="row">
        <CoreAvatar 
          src="https://mui.com/static/images/avatar/1.jpg"
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} />

        <CoreAvatar 
          src="https://mui.com/static/images/avatar/1.jpg"
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]} />

        <CoreAvatar 
          src="https://mui.com/static/images/avatar/1.jpg"
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]} />

        <CoreAvatar 
          src="https://mui.com/static/images/avatar/1.jpg"
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]} />

        <CoreAvatar 
          src="https://mui.com/static/images/avatar/1.jpg"
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]} />
      </CoreStack>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Icon avatars</CoreH4>

      <CoreTypographyBody1>Icon avatars are created by passing an icon as
        <CoreChip label="children"/>.</CoreTypographyBody1>

      <CoreStack direction="row">
        <CoreAvatar styleClasses={[CoreClasses.BG.BG_BLACK]}><CoreIcon>folder</CoreIcon></CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}><CoreIcon>pageview</CoreIcon></CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Variants</CoreH4>

      <CoreTypographyBody1>If you need square or rounded avatars, use the
        <CoreChip label="variant"/>prop.</CoreTypographyBody1>

      <CoreStack direction="row">

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded"><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack>

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Fallbacks (NOT IMPLEMENTED)</CoreH4>

      {/* <CoreTypographyBody1>If you need square or rounded avatars, use the
        <CoreChip label="variant"/>prop.</CoreTypographyBody1>

      <CoreStack direction="row">

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded"><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack> */}

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Grouped (NOT IMPLEMENTED)</CoreH4>

      {/* <CoreTypographyBody1>If you need square or rounded avatars, use the
        <CoreChip label="variant"/>prop.</CoreTypographyBody1>

      <CoreStack direction="row">

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded"><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack> */}

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>Total avatars (NOT IMPLEMENTED)</CoreH4>

      {/* <CoreTypographyBody1>If you need square or rounded avatars, use the
        <CoreChip label="variant"/>prop.</CoreTypographyBody1>

      <CoreStack direction="row">

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded"><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack> */}

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      <CoreH4>With badge (NOT IMPLEMENTED)</CoreH4>

      {/* <CoreTypographyBody1>If you need square or rounded avatars, use the
        <CoreChip label="variant"/>prop.</CoreTypographyBody1>

      <CoreStack direction="row">

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>

        <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded"><CoreIcon>assignment</CoreIcon></CoreAvatar>
      </CoreStack> */}

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>

        <CoreAccordionDetail>{<pre>{summary}</pre>}</CoreAccordionDetail>
      </CoreAccordion>

      {/* PROP  */}

      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Props used exactly as in MUI</CoreH4>

      <CoreDivider />

      <PropsSection propName={"alt"} subtitle={"Used in combination with src or srcSet to provide an alt attribute for the rendered img element."} types={"'string'"} />
      
      <CoreDivider />

      <PropsSection propName={"children"} subtitle={"Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string."} types={"'node'"} />
      
      <CoreDivider />

      <PropsSection propName={"sizes"} subtitle={"The sizes attribute for the img element."} types={"'string'"} />
      
      <CoreDivider />

      <PropsSection propName={"src"} subtitle={"The src attribute for the img element."} types={"'string'"} />
      
      <CoreDivider />

      <PropsSection propName={"srcSet"} subtitle={"The srcSet attribute for the img element. Use this attribute for responsive image display."} types={"'string'"} />
      
      <CoreDivider />

      <PropsSection propName={"variant"} subtitle={"The shape of the avatar."} types={"'circular' | 'rounded' | 'square' | 'string'"} />

      <CoreDivider />

      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Props used with different names than in MUI</CoreH4>

      <PropsSection propName={"styleClasses"} subtitle={"Set the text-align on the component."} types={"'center' | 'inherit' | 'justify' | 'left' | 'right'"} />

      <CoreDivider />

      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Props to be supported in future</CoreH4>

      <CoreDivider />

      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Props never to be supported</CoreH4>

      <CoreTypographyBody1>{"sx"}</CoreTypographyBody1>

      <CoreDivider />

    </>
  );
}