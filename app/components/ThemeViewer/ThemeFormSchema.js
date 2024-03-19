export const formSchema = {
  fields: [
    {
      gridSize: 6,
      id      : "PrimaryColor",
      label   : "Primary Color",
      type    : "text"
    },
    {
      gridSize: 6,
      id      : "SecondaryColor",
      label   : "Secondary Color",
      type    : "text"
    },
    {
      gridSize: { xs: 6 },
      id      : "description",
      label   : "Description",
      type    : "text"
    },
    // eslint-disable-next-line etc/no-commented-out-code
    // {
    //   "endpoint"            : "/business/all/IssueReportLabels",
    //   "getOptionLabel"      : "__PRESCRIPTIONASYNCSELECTS_GET_OPTION_LABEL",
    //   "getOptionValue"      : "__PRESCRIPTIONASYNCSELECTS_GET_OPTION_VALUE",
    //   "gridSize"            : 12,
    //   "id"                  : "labels",
    //   "isOptionEqualToValue": "__PRESCRIPTIONASYNCSELECTS_IS_OPTIONS_EQUAL_TO_VALUE",
    //   "itemKey"             : "label",
    //   "label"               : "Select Labels",
    //   "multiple"            : true,
    //   "type"                : "asyncSelect"
    // },
    
  ],
  submitButtonLabel: "Submit",
  
};