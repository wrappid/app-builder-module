import React from "react";

import {
  CoreForm,
  FORM_EDIT_MODE,
  CoreAsyncSelect,
  CoreGrid
} from "@wrappid/core";

export default function DataCreator(props) {
  const { entity } = props;
  const [model, setModel] = React.useState();

  React.useEffect(() => {
    if (entity) {
      setModel(entity);
      /**
       * @todo have to chek if we should use forms[entity] or
       * getForm(enitity) getForm is async have to call it cautiously
       */
    }
  }, [entity]);

  return (
    <CoreGrid>
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

      {model && model !== "" && (
        /* _formJSON && */ <CoreForm
          apiMode={"create"}
          onMountRead={false}
          formId={model}
          // formJson={{ [model]: _formJSON }}
          mode={FORM_EDIT_MODE}
          initData={{}}
        />
      )}
    </CoreGrid>
  );
}
