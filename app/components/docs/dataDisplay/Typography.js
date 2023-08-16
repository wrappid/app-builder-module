import React from "react";

import {
  CoreDivider,
  CoreH1,
  CoreH2,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyButton,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2,
  CoreAccordion,
  CoreAccordionSummary,
  CoreAccordionDetail,
  CoreChip,
  CoreClasses,
  CoreStack,
  CoreBox,
} from "@wrappid/core";

export default function Typography() {

  const summary = `
  import React from "react";
  import {
    CoreH1,
    CoreH2,
    CoreH3,
    CoreH4,
    CoreH5,
    CoreH6,
    CoreTypographyBody1,
    CoreTypographyBody2,
    CoreTypographyButton,
    CoreTypographyCaption,
    CoreTypographyOverline,
    CoreTypographySubtitle1,
    CoreTypographySubtitle2,
  } from "@wrappid/core";

  export default function Typography() {
    return (
    <>
      <CoreH6>CoreTypography</CoreH6>

      <CoreH1>CoreH1. Heading</CoreH1>

      <CoreH2>CoreH2. Heading</CoreH2>

      <CoreH3>CoreH3. Heading</CoreH3>

      <CoreH4>CoreH4. Heading</CoreH4>

      <CoreH5>CoreH5. Heading</CoreH5>

      <CoreH6>CoreH6. Heading</CoreH6>

      <CoreTypographySubtitle1>
        CoreTypographySubtitle1. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam.
      </CoreTypographySubtitle1>

      <CoreTypographySubtitle2>
        CoreTypographySubtitle2. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam.
      </CoreTypographySubtitle2>

      <CoreTypographyBody1>
        CoreTypographyBody1. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam a
        magna rhoncus posuere quis eu sem. Donec nec convallis ipsum. Donec
        euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody1>

      <CoreTypographyBody1 limitChars="100">
        CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
        euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
        amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
        ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
        finibus.
      </CoreTypographyBody1>

      <CoreTypographyBody2>
        CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam a
        magna rhoncus posuere quis eu sem. Donec nec convallis ipsum. Donec
        euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody2>

      <CoreTypographyBody2 limitChars="100">
        CoreTypographyBody2 with limitChars. Fusce mattis egestas risus, in
        euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
        amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
        ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
        finibus.
      </CoreTypographyBody2>

      <CoreTypographyButton>CoreTypographyButton</CoreTypographyButton>

      <CoreTypographyCaption>CoreTypographyCaption</CoreTypographyCaption>

      <CoreTypographyOverline>CoreTypographyOverline</CoreTypographyOverline>

      </>
    )
  }
`;

  const demo = `<CoreBox>
  <CoreH4 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>CoreH4. Heading</CoreH4>
  </CoreBox>`;

  return (
    <>
      <CoreH6>CoreTypography</CoreH6>

      <CoreH1>CoreH1. Heading</CoreH1>

      <CoreDivider />

      <CoreH2>CoreH2. Heading</CoreH2>

      <CoreDivider />

      <CoreH3>CoreH3. Heading</CoreH3>

      <CoreDivider />

      <CoreH4>CoreH4. Heading</CoreH4>

      <CoreDivider />

      <CoreH5>CoreH5. Heading</CoreH5>

      <CoreDivider />

      <CoreH6>CoreH6. Heading</CoreH6>

      <CoreDivider />

      <CoreTypographySubtitle1>
        CoreTypographySubtitle1. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam.
      </CoreTypographySubtitle1>

      <CoreDivider />

      <CoreTypographySubtitle2>
        CoreTypographySubtitle2. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam.
      </CoreTypographySubtitle2>

      <CoreDivider />

      <CoreTypographyBody1>
        CoreTypographyBody1. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam a
        magna rhoncus posuere quis eu sem. Donec nec convallis ipsum. Donec
        euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody1>

      <CoreDivider />

      <CoreTypographyBody1 limitChars="100">
        CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
        euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
        amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
        ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
        finibus.
      </CoreTypographyBody1>

      <CoreDivider />

      <CoreTypographyBody2>
        CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
        tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam a
        magna rhoncus posuere quis eu sem. Donec nec convallis ipsum. Donec
        euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu
        scelerisque nisi metus at mi. Phasellus luctus in magna id finibus.
      </CoreTypographyBody2>

      <CoreDivider />

      <CoreTypographyBody2 limitChars="100">
        CoreTypographyBody2 with limitChars. Fusce mattis egestas risus, in
        euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
        amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
        ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
        nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
        finibus.
      </CoreTypographyBody2>

      <CoreDivider />

      <CoreTypographyButton>CoreTypographyButton</CoreTypographyButton>

      <CoreDivider />

      <CoreTypographyCaption>CoreTypographyCaption</CoreTypographyCaption>

      <CoreDivider />

      <CoreTypographyOverline>CoreTypographyOverline</CoreTypographyOverline>

      <CoreDivider />

      <CoreAccordion>
        <CoreAccordionSummary>
          <CoreTypographyBody1 sx={{fontStyle: 'italic', fontWeight: 700}}>{"Source Code"}</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
        {<pre>{summary}</pre>}
        </CoreAccordionDetail>
      </CoreAccordion>


      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Props</CoreH4>

      <CoreDivider />

      <CoreChip label={<CoreTypographySubtitle2>align</CoreTypographySubtitle2>} size="small" />

      <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT1]}>Set the text-align on the component.</CoreTypographyBody2>

      <CoreStack direction="row" spacing={1} styleClasses={[CoreClasses.MARGIN.MT1]}>
      <CoreTypographyBody2 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
        Type:
      </CoreTypographyBody2>
      
        <CoreChip label="'center' | 'inherit' | 'justify' | 'left' | 'right'" size="small" />
      </CoreStack>

      <CoreStack direction="row" spacing={1} styleClasses={[CoreClasses.MARGIN.MT1]}>
      <CoreTypographyBody2 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
        Default:
      </CoreTypographyBody2>
      
        <CoreChip label="'inherit'" size="small" />
      </CoreStack>

      <CoreDivider />

      <CoreChip label={<CoreTypographySubtitle2>children</CoreTypographySubtitle2>} size="small" />

      <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT1]}>The content of the component.</CoreTypographyBody2>

      <CoreStack direction="row" spacing={1} styleClasses={[CoreClasses.MARGIN.MT1]}>
      <CoreTypographyBody2 styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}>
        Type:
      </CoreTypographyBody2>
      
        <CoreChip label="'node'" size="small" />
      </CoreStack>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY1]}>Demo</CoreH4>

      <CoreBox>
      <CoreH4 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>CoreH4. Heading</CoreH4>
      </CoreBox>

      <pre>{demo}</pre>
    </>
  );
}
