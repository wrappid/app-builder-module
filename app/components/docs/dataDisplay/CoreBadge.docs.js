import {
  CoreBadge,
  CoreClasses,
  CoreH4,
  CoreIcon,
  CoreSpan,
  CoreStack,
  CoreTypographyBody1,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

export default function CoreBadgeDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreBadge
      </CoreH4>

      <CoreTypographyBody1>
        Badge generates a small badge to the top-right of its child(ren).
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic badge"}
        description={
          "Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."
        }
        renderElement={
          <CoreBadge badgeContent={4} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
            <CoreIcon>mail</CoreIcon>
          </CoreBadge>
        }
        code={`<CoreBadge 
        badgeContent={4} 
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>`}
      />

      <CodeSample
        title={"Color"}
        description={"Use color prop to apply theme palette to component."}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge badgeContent={4} styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]}>
              <CoreIcon>mail</CoreIcon>
            </CoreBadge>

            <CoreBadge badgeContent={4} styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
              <CoreIcon>mail</CoreIcon>
            </CoreBadge>
          </CoreStack>
        }
        code={`<CoreBadge 
        badgeContent={4} 
        styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>
        <CoreBadge 
        badgeContent={4} 
        styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>`}
      />

      <CodeSample title={"Customization (NOT IMPLEMENTED)"} />

      <CodeSample title={"Badge visibility (NOT IMPLEMENTED)"} />

      <CodeSample
        title={"Maximum value"}
        description={
          <>
            You can use the <CoreSpan>max</CoreSpan> prop to cap the value of the badge content.
          </>
        }
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge badgeContent={99} styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]}>
              <CoreIcon>mail</CoreIcon>
            </CoreBadge>

            <CoreBadge badgeContent={100} styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
              <CoreIcon>mail</CoreIcon>
            </CoreBadge>

            <CoreBadge
              badgeContent={1000}
              max={999}
              styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}
            >
              <CoreIcon>mail</CoreIcon>
            </CoreBadge>
          </CoreStack>
        }
        code={`<CoreBadge 
        badgeContent={99} 
        styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>
        <CoreBadge 
        badgeContent={100} 
        styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>
        <CoreBadge 
        badgeContent={1000} max={999}
        styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>`}
      />

      <CodeSample
        title={"Dot badge"}
        description={
          <>
            The dot prop changes a badge into a small <CoreSpan>dot</CoreSpan>. This can be used as
            a notification that something has changed without giving a count.
          </>
        }
        renderElement={
          <CoreBadge variant="dot" styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
            <CoreIcon>mail</CoreIcon>
          </CoreBadge>
        }
        code={`<CoreBadge 
        variant="dot" 
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>`}
      />

      <CodeSample
        title={"Badge overlap"}
        description={
          <>
            You can use the <CoreSpan>overlap</CoreSpan> prop to place the badge relative to the
            corner of the wrapped element.
          </>
        }
        renderElement={
          <CoreBadge badgeContent=" " styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]} />
        }
        code={`<CoreBadge 
        variant="dot" 
        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
        <CoreIcon>mail</CoreIcon></CoreBadge>`}
      />
    </>
  );
}
