import { CoreAvatar, CoreClasses, CoreStack, CoreSpan, CoreH5, CoreTypographyBody1 } from "@wrappid/core";

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
            <CoreSpan code={true}>{" img "}</CoreSpan>props<CoreSpan code={true}>{" src "}</CoreSpan>or<CoreSpan code={true}>{" srcSet "}</CoreSpan>to the component.
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

    </>
  );
}