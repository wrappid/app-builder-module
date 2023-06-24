import { CoreDataTable, __IconTypes, coreUseNavigate } from "@wrappid/core";

import { urls, __EntityStatus } from "../constants/constants";

function FormsManager() {
  const navigate = coreUseNavigate();
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
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "History",
      type : "action",
    },
  ];

  return (
    <CoreDataTable
      entity="FormSchemas"
      // createFormID={"FormSchemas"}
      // updateFormID={"FormSchemas"}
      rowActions={tableRowActions}
    />
  );
}

export default FormsManager;
