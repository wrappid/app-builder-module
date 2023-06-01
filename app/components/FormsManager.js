import { CoreDataTable, FORM_IDS, __IconTypes } from "@wrappid/core";
import { nativeUseNavigate } from "@wrappid/styled-components";
import { urls, __EntityStatus } from "../constants/constants";

function FormsManager() {
  const navigate = nativeUseNavigate();
  const tableRowActions = [
    {
      action: (data) => {
        navigate(
          "/" +
            urls.HISTORY.replace(":model", "FormSchemas").replace(
              ":id",
              data.ref
            ),
          {}
        );
      },
      hide: (rowData) => {
        if (rowData._status !== __EntityStatus.ACTIVE) {
          return true;
        } else {
          return false;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "History",
      type: "action",
    },
  ];

  return (
    <CoreDataTable
      entity="Pages"
      createFormID={FORM_IDS.__PAGES_FORM}
      updateFormID={FORM_IDS.__PAGES_FORM}
      rowActions={tableRowActions}
    />
  );
}

export default FormsManager;
