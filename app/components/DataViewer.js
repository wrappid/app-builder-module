import React from "react";

import {
  AppContainerLayout,
  CoreAsyncSelect,
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreDataTable,
  CoreForm,
  CoreLayoutItem,
  FORM_EDIT_MODE
} from "@wrappid/core";

import { getLabel } from "../utils/stringUtils";

export default function DataViewer(props) {
  const {
    entity,
    enableCreate = false,
    rowActions,
    preRenderDetailsPaneComponent,
    postRenderDetailsPaneComponent,
  } = props;
  const [model, setModel] = React.useState("");
  const [_collapseForm, set_collapseForm] = React.useState(false);

  React.useEffect(() => {
    if (entity) {
      setModel(entity);
    }
  }, [entity]);

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
      
        {!entity && (
          <CoreAsyncSelect
            id="model"
            label="Database Model"
            itemKey="model"
            endpoint="/models"
            query={{ input: "" }}
            value={model}
            handleChange={(values) => {
              setModel(values.id);
            }}
          />
        )}

        {enableCreate &&
        model &&
        model !== "" &&
        /* _formJSON && */
        (_collapseForm ? (
          <CoreForm
            apiMode={"create"}
            onMountRead={false}
            formId={model}
            mode={FORM_EDIT_MODE}
            afterCancel={() => {
              set_collapseForm(!_collapseForm);
            }}
          />
        ) : (
          <CoreBox styleClasses={[CoreClasses.LAYOUT.RIGHT_ALIGN]}>
            <CoreButton
              sx={{ display: "flex", selfAlign: "end" }}
              label={"Create " + getLabel(model)}
              OnClick={() => {
                set_collapseForm(!_collapseForm);
              }}
            />
          </CoreBox>
        ))}

        {model && model !== "" && (
          <CoreDataTable
            serverSide={true}
            entity={model}
            editable={true}
            deletable={true}
            showToolbar={true}
            rowActions={rowActions}
            preRenderDetailsPaneComponent={preRenderDetailsPaneComponent}
            postRenderDetailsPaneComponent={postRenderDetailsPaneComponent}
          />
        )}
      </CoreLayoutItem>
    </>
  );
}
