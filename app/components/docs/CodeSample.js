import React from "react";

import { CoreBox, CoreClasses, CoreDivider, CoreH6, CoreTypographyBody1 } from "@wrappid/core";

export default function CodeSample(props) {
  const { title, description, code, renderElement } = props;

  React.useEffect(() => {
  }, []);
    
  return (
    <>
      <CoreH6>{title}</CoreH6>

      <CoreTypographyBody1>{description}</CoreTypographyBody1>

      <CoreBox styleClasses={[CoreClasses.BORDER.BORDER]}>
        <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P3]}>
          {renderElement}
        </CoreBox>
          
        <CoreDivider />
          
        <CoreBox styleClasses={[CoreClasses.PADDING.P1]}>
          <CoreTypographyBody1 code={true}>
            {code}
          </CoreTypographyBody1>
        </CoreBox>
      </CoreBox>
    </>
  );
}
