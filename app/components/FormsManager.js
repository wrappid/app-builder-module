/* eslint-disable etc/no-commented-out-code */
import {
  CoreDataTable,
  __IconTypes,
  apiRequestAction,
  coreUseNavigate,
  HTTP
} from "@wrappid/core";
import { useDispatch } from "react-redux";

import { urls, __EntityStatus } from "../constants/constants";

function FormsManager() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
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
    {
      action: (data) => {
        // eslint-disable-next-line no-console
        console.log("Clone button clicked");
        dispatch(
          apiRequestAction(
            HTTP.POST,
            `/formSchema/clone/${data?.formID}`,
            true,
            {}
          )
        );
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Clone",
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
