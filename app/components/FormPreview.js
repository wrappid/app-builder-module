import React from "react";

import {
  CoreInput,
  CoreTypographyBody1,
  CoreForm,
  CoreJSONInput,
  CoreGrid,
  CoreDivider,
  CoreCustomTabs,
} from "@wrappid/core";

const FORM_EDIT_MODE = "edit";
const FORM_VIEW_MODE = "view";

const FormTab = ({ schema, initData }) => {
  return (
    <>
      <CoreTypographyBody1>
        <pre>{JSON.stringify(schema, null, 4)}</pre>
      </CoreTypographyBody1>

      {/* -- <CoreForm
        mode={FORM_VIEW_MODE}
        formId="FormSchemas"
        initData={initData}
      /> */}
    </>
  );
};

const FormPreviewViewTab = ({ formID }) => {
  return (
    <>
      <CoreForm mode={FORM_VIEW_MODE} formId={`${formID}`} preview={true} />
    </>
  );
};

const FormPreviewEditTab = ({ formID }) => {
  return (
    <>
      <CoreForm mode={FORM_EDIT_MODE} formId={`${formID}`} preview={true} />
    </>
  );
};

export default function FormPreview(props) {
  const { initData } = props;
  const { name, formID, authRequired, _status, schema, extraInfo } = initData;
  /* -- const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; */

  const formTabContents = [
    {
      comp : FormTab,
      id   : "formTab",
      label: "Form",
      props: { initData, schema },
    },
    {
      comp : FormPreviewViewTab,
      id   : "formPreviewViewTab",
      label: "Preview View Mode",
      props: { formID },
    },
    {
      comp : FormPreviewEditTab,
      id   : "formPreviewEditTab",
      label: "Preview Edit Mode",
      props: { formID },
    },
  ];

  return (
    <>
      {/* <CoreGrid>
        <CoreInput
          gridProps={{ gridSize: { sm: 3 } }}
          label="Name"
          value={name}
        />

        <CoreInput
          gridProps={{ gridSize: { sm: 3 } }}
          label="Form ID"
          value={formID}
        />

        <CoreInput
          gridProps={{ gridSize: { sm: 3 } }}
          label="Auth Required"
          value={authRequired}
        />

        <CoreInput
          gridProps={{ gridSize: { sm: 3 } }}
          label="Status"
          value={_status}
        />

        <CoreJSONInput
          gridProps={{ gridSize: 12 }}
          label="Extra Info"
          value={extraInfo}
          readOnly={true}
        />
      </CoreGrid>

      <CoreDivider />

      <CoreCustomTabs tabContent={formTabContents} /> */}

      {/* -- <CoreBox sx={{ width: "100%" }}>
        <CoreBox sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CoreTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <CoreTab label="Form" />

            <CoreTab label="Preview View Mode" />

            <CoreTab label="Preview Edit Mode" />
          </CoreTabs>
        </CoreBox>

        <CoreTabPanel value={value} index={0}>
          <CoreTypographyBody1>
            <pre>{JSON.stringify(schema, null, 4)}</pre>
          </CoreTypographyBody1>

        </CoreTabPanel>

        <CoreTabPanel value={value} index={1}>
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1]}
            gridProps={{ gridSize: { sm: 6 } }}
          >
            <CoreForm
              mode={FORM_VIEW_MODE}
              formId={`${formID}`}
              preview={true}
            />
          </CorePaper>
        </CoreTabPanel>

        <CoreTabPanel value={value} index={2}>
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1]}
            gridProps={{ gridSize: { sm: 6 } }}
          >
            <CoreForm
              mode={FORM_EDIT_MODE}
              formId={`${formID}`}
              preview={true}
            />
          </CorePaper>
        </CoreTabPanel>
      </CoreBox> */}
    </>
  );
}
