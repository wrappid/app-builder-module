import React from "react";

import {
  CoreCard, CoreCardContent, CoreColorInput, CoreGrid, CoreH5, CoreInput, CoreTypographyBody1, CoreTypographyBody2, CoreTypographySubtitle1
} from "@wrappid/core";

function ThemeSchemaComponent(props) {
  const { id: fieldID, value = "{}", readOnly, formik } = props;
  const [schema, setSchema] = React.useState();
    
  const handleSchemaChange = (value) => { 
    formik.setFieldValue(fieldID, JSON.stringify(value));
  };

  React.useEffect(() => {
    let tempSchema = {};

    try {
      if (typeof value === "object") {
        tempSchema = value;
      } else if (typeof value === "string") {
        tempSchema = JSON.parse(value);
      }
    } catch (error) {
      tempSchema = JSON.parse("{}");
    } finally {
      setSchema(tempSchema);
    }
  }, [value]);

  /**
   * Updates a value in a nested JSON data structure.
   * Args:
   *  key: The key of the value to update, in dot notation (e.g., "first.second.third").
   *  value: The new value to set.
   * 
   * Returns:
   *  The updated JSON data structure.
   */
  const changeSchemaProperties = (key, value) => {
    let tempSchema = schema;

    // eslint-disable-next-line no-console
    console.log("schema key=", key);
    // eslint-disable-next-line no-console
    console.log("schema value=", value);

    const keys = key.split(".");
    let current = tempSchema;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];

      if (!current[key]) {
        throw new Error(`Key path '${key}' does not exist in the JSON tempSchema`);
      }
      current = current[key];
    }
    current[keys[keys.length - 1]] = value;

    handleSchemaChange(tempSchema);
  };

  return (
    <>
      <CoreTypographyBody1>
        Theme Schema Component: Work In Progress
      </CoreTypographyBody1>
    
      <CoreGrid>
        {!readOnly && (
          <CoreCard gridProps={{ gridSize: { sm: 7, xs: 12 } }}>
            <CoreCardContent>
              {schema?.palette ? (
                <CoreGrid>
                  <CoreH5 gridProps={{ gridSize: 12 }}>Palette</CoreH5>

                  {Object.keys(schema?.palette).map(paletteKey => {
                    return (
                      <>
                        <CoreTypographyBody1 gridProps={{ gridSize: 12 }}>{paletteKey} Colors</CoreTypographyBody1>

                        {typeof schema?.palette[paletteKey] === "object" ? (
                          Object.keys(schema?.palette[paletteKey]).map(key => {
                            return (
                              typeof schema?.palette[paletteKey][key] === "string"
                                && schema?.palette[paletteKey][key].startsWith("#") ? (
                                  <CoreColorInput
                                    label={`${paletteKey} ${key}`}
                                    gridProps={{ gridSize: { md: 4 } }}
                                    onChange={(value) => {
                                      changeSchemaProperties(`palette.${paletteKey}.${key}`, value);
                                    }}
                                    value={schema?.palette[paletteKey][key]} />
                                ) : (
                                  <CoreInput gridProps={{ gridSize: { md: 4 } }} label={`${paletteKey} ${key}`} value={schema?.palette[paletteKey][key]} />
                                )
                            );
                          })
                        ) : (
                          <CoreInput gridProps={{ gridSize: { md: 4 } }} label={`${paletteKey}`} value={schema?.palette[paletteKey]} />
                        )}
                      </>
                    );
                  })}

                  <CoreColorInput
                    label="Primary Main"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.primary.main", value);
                    }}
                    value={schema?.palette?.primary?.main} />

                  <CoreColorInput
                    label="Primary Light"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.primary.light", value);
                    }}
                    value={schema?.palette?.primary?.light} />

                  <CoreColorInput
                    label="Primary Dark"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.primary.dark", value);
                    }}
                    value={schema?.palette?.primary?.dark} />

                  <CoreTypographyBody1 gridProps={{ gridSize: 12 }}>Secondary Colors</CoreTypographyBody1>

                  <CoreColorInput
                    label="Secondary Main"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.secondary.main", value);
                    }}
                    value={schema?.palette?.secondary?.main} />

                  <CoreColorInput
                    label="Secondary Light"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.secondary.light", value);
                    }}
                    value={schema?.palette?.secondary?.light} />

                  <CoreColorInput
                    label="Secondary Dark"
                    gridProps={{ gridSize: { md: 4 } }}
                    onChange={(value)=>{
                      changeSchemaProperties("palette.secondary.dark", value);
                    }}
                    value={schema?.palette?.secondary?.dark} />

                </CoreGrid>
              ) : (
                <CoreTypographySubtitle1>No palette defined here.</CoreTypographySubtitle1>
              )}</CoreCardContent>
          </CoreCard>
        )}

        <CoreCard
          gridProps={{ gridSize: readOnly ? { md: 12, sm: 12, xs: 12 } : { sm: 5, xs: 12 } }}
        >
          <CoreCardContent>
            <CoreTypographyBody2 noWrap={false}>
              <pre>{JSON.stringify(schema, null, 4)}</pre>
            </CoreTypographyBody2>
          </CoreCardContent>
        </CoreCard>
      </CoreGrid>
    </>
  );
}

export default ThemeSchemaComponent;