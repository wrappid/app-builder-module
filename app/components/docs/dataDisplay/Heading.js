// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
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
} from "@wrappid/core";

export default function Heading() {
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
      </>
  )
}
