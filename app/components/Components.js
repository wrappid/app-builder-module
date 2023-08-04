import { CoreH5, CoreComponent, /* CoreMarkdownViewer, */ CoreComponentsRegistryDocs, CoreTypographyBody1, CoreStack } from "@wrappid/core";

export default function Components() {
  return (
    <>
      {Object.keys(CoreComponentsRegistryDocs || {}).map(componentName => {
        return (
          <>
            <CoreH5>{componentName}</CoreH5>

            <CoreStack direction="row">
              <CoreComponent componentName={componentName} />

              <CoreComponent componentName={componentName} {...CoreComponentsRegistryDocs[componentName].categoryGroup[0].propsGroups[0]} />
            </CoreStack>

            {/* <CoreTypographyBody1 code={true}>
              {JSON.stringify(CoreComponentsRegistryDocs[componentName], null, 2)}
            </CoreTypographyBody1> */}

            {/* <CoreMarkdownViewer url={CoreComponentsRegistry[componentName].readme} /> */}
          </>
        );
      })}

    </>
  );
}
