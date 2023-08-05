import {
  CoreH3,
  CoreH4,
  CoreBox,
  CoreComponentsRegistryDocs,
  CoreStack,
  CoreTypographyBody1,
  CoreDivider,
  CoreAvatar,
  CoreClasses,
  CoreComponent,
} from "@wrappid/core";

export default function Components() {
  return (
    <CoreBox>
      {Object.keys(CoreComponentsRegistryDocs || {}).map((componentName) => {
        const componentData =
          CoreComponentsRegistryDocs[componentName]?.documentation;
        return (
          <CoreBox key={componentName}>
            <CoreH3>{componentName}</CoreH3>
            {componentData.categoryGroup.map((category, index) => (
              <CoreBox key={index}>
                <CoreH4>{category.title}</CoreH4>
                <CoreTypographyBody1>
                  {category.description}
                </CoreTypographyBody1>
                <CoreStack
                  direction="row"
                  borderRadius="10px"
                  styleClasses={[
                    CoreClasses.BORDER.BORDER,
                    CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
                    CoreClasses.PADDING.P3,
                    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                  ]}
                >
                  {category.propsGroups.map((propsGroup, innerIndex) => {
                    return <CoreComponent key={innerIndex} componentName={componentName} {...propsGroup} />
                  })}                 
                </CoreStack>
                <CoreStack
                  borderRadius="10px"
                  styleClasses={[
                    CoreClasses.BORDER.BORDER,
                    CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
                    CoreClasses.PADDING.P3,
                  ]}
                >
                  <CoreTypographyBody1 code={true}>
                  {category.propsGroups.map(( ) => {
                    return  `<${componentName } />`;
                  })}    
                  </CoreTypographyBody1>
                </CoreStack>
              </CoreBox>
            ))}
          </CoreBox>
        );
      })}
    </CoreBox>
  );
}
