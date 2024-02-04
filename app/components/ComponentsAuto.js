import {
  CoreH3,
  CoreH4,
  CoreBox,
  CoreComponentsRegistryDocs,
  CoreStack,
  CoreTypographyBody1,
  CoreClasses,
  CoreComponent
} from "@wrappid/core";

export default function Components() {
  const getPropsString = (propGroup) => {
    let propString = "";

    Object.keys(propGroup).forEach(propKey => {
      propString += `\n\t${propKey}={"${propGroup[propKey]}"}`;
    });

    return propString;
  };

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
                  styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_PRIMARY_LIGHT, CoreClasses.PADDING.P3, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                >
                  {category.propsGroups.map((propsGroup, innerIndex) => (
                    <CoreComponent key={innerIndex} componentName={componentName} {...propsGroup} />
                  ))}
                </CoreStack>

                <CoreStack
                  direction="column"
                  borderRadius="10px"
                  styleClasses={[
                    CoreClasses.BORDER.BORDER,
                    CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
                    CoreClasses.PADDING.P3,
                    CoreClasses.OVERFLOW.OVERFLOW_AUTO,
                    CoreClasses.WIDTH.MAX_W_25
                  ]}
                >
                  <CoreTypographyBody1 code={true}>
                    {category.propsGroups.map((propsGroup) => {
                      return <>{`<${componentName} ${getPropsString(propsGroup)} />\n`}</>;
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
