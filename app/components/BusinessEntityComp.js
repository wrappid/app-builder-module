import React from "react";

import {
  CoreDivider,
  CoreIcon,
  CoreTypographyBody2,
  CoreTypographyCaption,
  CoreTypographySubtitle2,
  CoreAsyncSelect,
  CoreCheckbox,
  CoreIconButton,
  CoreInput,
  CoreJSONInput,
  CoreTextButton,
  CoreBox,
  CoreGrid,
  CoreCard,
  CoreCardContent,
  CoreClasses,
} from "@wrappid/core";

import {
  __BusinessEntityIncFunc,
  recurrsive_ModelFunc,
} from "./businessComponentUtil";
import { DB_CONST } from "../constants/constants";
import { getUUID } from "../utils/appUtils";
import { getLabel } from "../utils/stringUtils";

export default function BusinessEntityComp(props) {
  const { value = "{}", readOnly, formik } = props;
  const [schema, setSchema] = React.useState();

  const handleSchemaChange = (value) => {
    // put id to model
    const tempSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.ADD_MODEL_ID,
      value
    );

    formik.setFieldValue(props.id, JSON.stringify(tempSchema));
  };

  const addNestedModel = (parentModelID) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.ADD_MODEL,
      schema,
      parentModelID
    );

    handleSchemaChange(updatedSchema);
  };
  const updateNestedModel = (parentModelID, currentModelID, newModelName) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL,
      schema,
      parentModelID,
      currentModelID,
      newModelName
    );

    handleSchemaChange(updatedSchema);
  };

  const removeNestedModel = (parentModelID, currentModelID) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.REMOVE_MODEL,
      schema,
      parentModelID,
      currentModelID,
      null
    );

    handleSchemaChange(updatedSchema);
  };

  const updateNestedModelAs = (
    parentModelID,
    currentModelID,
    currentModelAs
  ) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL_AS,
      schema,
      parentModelID,
      currentModelID,
      null,
      currentModelAs
    );

    handleSchemaChange(updatedSchema);
  };

  const updateNestedModelRequired = (
    parentModelID,
    currentModelID,
    required
  ) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL_REQUIRED_FLAG,
      schema,
      parentModelID,
      currentModelID,
      null,
      null,
      required
    );

    handleSchemaChange(updatedSchema);
  };

  const updateNestedModelRightJoinFlag = (
    parentModelID,
    currentModelID,
    right
  ) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL_RIGHT_JOIN_FLAG,
      schema,
      parentModelID,
      currentModelID,
      null,
      null,
      null,
      right
    );

    handleSchemaChange(updatedSchema);
  };

  const updateNestedModelAttributes = (
    parentModelID,
    currentModelID,
    currentModelAttributes
  ) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL_ATTRIBUTES,
      schema,
      parentModelID,
      currentModelID,
      null,
      null,
      null,
      null,
      currentModelAttributes
    );

    handleSchemaChange(updatedSchema);
  };

  const updateNestedModelWhereFlag = (
    parentModelID,
    currentModelID,
    whereVal
  ) => {
    const updatedSchema = recurrsive_ModelFunc(
      __BusinessEntityIncFunc.UPDATE_MODEL_WHERE,
      schema,
      parentModelID,
      currentModelID,
      null,
      null,
      null,
      null,
      null,
      whereVal
    );

    handleSchemaChange(updatedSchema);
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
      // put id to model
      tempSchema = recurrsive_ModelFunc(
        __BusinessEntityIncFunc.ADD_MODEL_ID,
        tempSchema
      );
      // add database if missing
      tempSchema.database = tempSchema?.database || DB_CONST.RXEFY_DB;
      setSchema(tempSchema);
    }
  }, [value]);

  const renderModel = (
    database,
    modelID,
    model,
    raw = false,
    nested = false,
    attributes = [],
    include = [],
    where = {},
    order = []
  ) => {
    return (
      <>
        <CoreAsyncSelect
          id={"database"}
          label="Database"
          optionsData={[
            { label: DB_CONST.RXEFY_DB },
            { label: DB_CONST.RXEFY_MEDICINE_DB },
          ]}
          value={database}
          handleChange={(value) => {
            const tmpSchema = { database: value?.label };

            handleSchemaChange(tmpSchema);
          }}
        />

        <CoreDivider />

        {database && (
          <>
            <CoreTypographySubtitle2>Root Model</CoreTypographySubtitle2>

            <CoreTypographyCaption>{`ID: ${
              modelID || "Not selected any model"
            }`}</CoreTypographyCaption>

            <CoreDivider />

            <CoreAsyncSelect
              id={"root-model"}
              label="Model"
              endpoint={"/business/tables/" + schema?.database || ""}
              value={model || ""}
              handleChange={(value) => {
                const tmpSchema = {
                  database: schema?.database,
                  model: value?.id,
                };

                handleSchemaChange(tmpSchema);
              }}
            />

            {model && (
              <>
                <CoreCheckbox
                  label={<CoreTypographyCaption>Raw</CoreTypographyCaption>}
                  checked={raw || false}
                  onChange={(event) => {
                    handleSchemaChange({
                      ...schema,
                      raw: event.target.checked,
                    });
                  }}
                />

                <CoreCheckbox
                  label={<CoreTypographyCaption>Nested</CoreTypographyCaption>}
                  checked={nested || false}
                  onChange={(event) => {
                    handleSchemaChange({
                      ...schema,
                      nested: event.target.checked,
                    });
                  }}
                />

                <CoreAsyncSelect
                  itemKey={"root-attributes"}
                  label="Attributes"
                  multiple={true}
                  endpoint={
                    "/business/tables/attributes/" +
                      schema?.database +
                      "/" +
                      schema?.model || ""
                  }
                  value={attributes?.map((attribute) => {
                    return {
                      id   : attribute,
                      label: getLabel(attribute),
                    };
                  })}
                  handleChange={(values) => {
                    // eslint-disable-next-line no-console
                    console.log(`Attributes changes to = [${values}]`);
                    if (values && values.length > 0) {
                      handleSchemaChange({
                        ...schema,
                        attributes: values.map((value) => {
                          return value?.id;
                        }),
                      });
                    } else {
                      handleSchemaChange({
                        ...schema,
                        attributes: [],
                      });
                    }
                  }}
                />

                <CoreJSONInput
                  label="Where Clause"
                  value={where}
                  onChange={(event) => {
                    const whereVal = event.target.value;

                    handleSchemaChange({
                      ...schema,
                      where: JSON.parse(whereVal),
                    });
                  }}
                />

                <CoreJSONInput
                  label="Order Clause"
                  value={order}
                  onChange={(event) => {
                    const orderVal = event.target.value;

                    handleSchemaChange({
                      ...schema,
                      order: JSON.parse(orderVal),
                    });
                  }}
                />

                <CoreBox
                  styleClasses={[
                    CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                  ]}
                >
                  <CoreTypographySubtitle2>
                    Included Models
                  </CoreTypographySubtitle2>

                  <CoreTextButton
                    label={
                      <>
                        <CoreIcon>add</CoreIcon>Model
                      </>
                    }
                    OnClick={() => {
                      addNestedModel(modelID);
                    }}
                  />
                </CoreBox>

                <CoreDivider />

                <CoreBox styleClasses={[CoreClasses.PADDING.PL2]}>
                  {include && (
                    <>
                      {include
                        ?.sort((first, next) => first.model - next.model)
                        .map((incSchema) => {
                          return renderIncludeModel(
                            modelID,
                            incSchema?.modelID,
                            incSchema?.model,
                            incSchema?.as,
                            incSchema?.required,
                            incSchema?.right,
                            incSchema?.attributes,
                            incSchema?.include,
                            incSchema?.where
                          );
                        })}
                    </>
                  )}
                </CoreBox>
              </>
            )}
          </>
        )}
      </>
    );
  };

  const renderIncludeModel = (
    parentModelID,
    modelID,
    model,
    modelAs,
    required,
    right,
    attributes,
    include,
    where
  ) => {
    return (
      <CoreBox
        key={`incSchema-${modelAs || model}`}
        styleClasses={[CoreClasses.BUSINESS_ENTITY.INCLUDED_MODEL_CARD]}
      >
        <CoreBox
          styleClasses={[
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
          ]}
        >
          <CoreTypographyCaption limitChars={20} hideSeeMore={true}>{`ID: ${
            modelID || "Not selected any model"
          }`}</CoreTypographyCaption>

          <CoreIconButton
            title="Remove Included Model"
            onClick={() => {
              removeNestedModel(parentModelID, modelID);
            }}
          >
            <CoreIcon>cancel</CoreIcon>
          </CoreIconButton>
        </CoreBox>

        <CoreAsyncSelect
          itemKey={`inc-model-${model}`}
          label="Include Model"
          endpoint={"/business/tables/" + schema?.database || ""}
          value={model}
          handleChange={(value) => {
            updateNestedModel(parentModelID, modelID, value?.id || "");
          }}
        />

        {model && (
          <>
            <CoreInput
              label="Include Model As"
              value={modelAs}
              onChange={(event) => {
                const value = event.target.value;

                updateNestedModelAs(parentModelID, modelID, value);
              }}
            />

            <CoreAsyncSelect
              itemKey={`inc-attributes-${modelAs || model || getUUID()}`}
              label="Attributes"
              multiple={true}
              endpoint={
                "/business/tables/attributes/" + schema?.database + "/" + model
              }
              value={attributes}
              handleChange={(values) => {
                const attributes = values.map((value) => {
                  if (typeof value === "object") {
                    return value?.id;
                  } else {
                    return value;
                  }
                });

                updateNestedModelAttributes(parentModelID, modelID, attributes);
              }}
            />

            <CoreCheckbox
              label={<CoreTypographyCaption>Required</CoreTypographyCaption>}
              checked={required || false}
              onChange={(event) => {
                const requiredFlag = event.target.checked;

                updateNestedModelRequired(parentModelID, modelID, requiredFlag);
              }}
            />

            <CoreCheckbox
              label={<CoreTypographyCaption>Right Join</CoreTypographyCaption>}
              checked={right || false}
              onChange={(event) => {
                const rightJoinFlag = event.target.checked;

                updateNestedModelRightJoinFlag(
                  parentModelID,
                  modelID,
                  rightJoinFlag
                );
              }}
            />

            <CoreJSONInput
              label="Where Clause"
              value={where}
              onChange={(event) => {
                const whereVal = event.target.value;

                updateNestedModelWhereFlag(
                  parentModelID,
                  modelID,
                  JSON.parse(whereVal)
                );
              }}
            />

            <CoreBox
              styleClasses={[
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
              ]}
            >
              <CoreTypographySubtitle2>Included Models</CoreTypographySubtitle2>

              <CoreTextButton
                label={
                  <>
                    <CoreIcon>add</CoreIcon>Model
                  </>
                }
                OnClick={() => {
                  // eslint-disable-next-line no-console
                  console.log(`parent model=${model}`);
                  addNestedModel(modelID);
                }}
              />
            </CoreBox>

            <CoreDivider />

            <CoreBox styleClasses={[CoreClasses.PADDING.PL2]}>
              {include && (
                <>
                  {include?.map((incSchema) => {
                    return renderIncludeModel(
                      modelID,
                      incSchema?.modelID,
                      incSchema?.model,
                      incSchema?.as,
                      incSchema?.required,
                      incSchema?.right,
                      incSchema?.attributes,
                      incSchema?.include,
                      incSchema?.where
                    );
                  })}
                </>
              )}
            </CoreBox>
          </>
        )}
      </CoreBox>
    );
  };

  return (
    <CoreBox>
      <CoreTypographyBody2>
        <b>@TODO:</b>&nbsp;WIP Business Entity
      </CoreTypographyBody2>

      <CoreGrid>
        {!readOnly && (
          <CoreCard gridProps={{ gridSize: { sm: 7, xs: 12 } }}>
            <CoreCardContent>
              {(schema?.modelID || schema?.model) && (
                <>
                  {renderModel(
                    schema?.database,
                    schema?.modelID,
                    schema?.model,
                    schema?.raw,
                    schema?.nested,
                    schema?.attributes,
                    schema?.include,
                    schema?.where,
                    schema?.order
                  )}
                </>
              )}
            </CoreCardContent>
          </CoreCard>
        )}

        <CoreCard
          gridProps={{
            gridSize: readOnly ? { md: 12, sm: 12, xs: 12 } : { sm: 5, xs: 12 },
          }}
        >
          <CoreCardContent>
            <CoreTypographyBody2 noWrap={false}>
              <pre>{JSON.stringify(schema, null, 4)}</pre>
            </CoreTypographyBody2>
          </CoreCardContent>
        </CoreCard>
      </CoreGrid>
    </CoreBox>
  );
}
