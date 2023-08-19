import { CoreChip, CoreClasses, CoreH5, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreChipDocs(){
  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreChip
      </CoreH5>

      <CoreTypographyBody1>
      Chips are compact elements that represent an input, attribute, or action.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic chip"}
        description={
          "The Chip component supports outlined and filled styling."
        }
        renderElement={
          <CoreStack direction="row">
            <CoreChip label="Chip Filled" />

            <CoreChip label="Chip Outlined" variant="outlined" />
          </CoreStack>
        }
        code={`<CoreChip label="Chip Filled" />
<CoreChip label="Chip Outlined" variant="outlined" />`}
      />
    </>
  );
}