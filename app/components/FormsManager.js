import {
  CoreDataTable,
  __IconTypes,
  apiRequestAction,
  coreUseNavigate,
  HTTP,
} from "@wrappid/core";
import { useDispatch } from "react-redux";

import StatusChangeCommentHistory from "./StatusChangeCommentHistory";
import { __EntityStatus } from "../constants/constants";
import { RoutesRegistry } from "../routes.registry";

function FormsManager() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
  const tableRowActions = [
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry.HISTORY.replace(":model", "FormSchemas").replace(
              ":entityRef",
              data.entityRef
            ),
          {}
        );
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "History",
      type: "action",
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
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Clone",
      type: "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry?.STATUS_CHANGE_FORM.replace(":model", "FormSchemas")
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REVIEW_REQUESTED),
          { pageUrl: "/forms", state: data }
        );
      },
      hide: (rowData) => {
        if (
          rowData._status === __EntityStatus.DRAFT ||
          rowData._status === __EntityStatus.CHANGE_REQUESTED
        ) {
          return false;
        } else {
          return true;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Request for review",
      type: "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry.STATUS_CHANGE_FORM.replace(":model", "FormSchemas")
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.APPROVED),
          { pageUrl: "/forms", state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Approve",
      type: "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry.STATUS_CHANGE_FORM.replace(":model", "FormSchemas")
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.CHANGE_REQUESTED),
          { pageUrl: "/forms", state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Change request",
      type: "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry.STATUS_CHANGE_FORM.replace(":model", "FormSchemas")
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REJECTED),
          { pageUrl: "/forms", state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Reject",
      type: "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry.STATUS_CHANGE_FORM.replace(":model", "FormSchemas")
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.PUBLISHED),
          { pageUrl: "/forms", state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.APPROVED) {
          return false;
        } else {
          return true;
        }
      },
      icon: { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Publish",
      type: "action",
    },
  ];

  return (
    <CoreDataTable
      entity="FormSchemas"
      // createFormID={"FormSchemas"}
      // updateFormID={"FormSchemas"}
      rowActions={tableRowActions}
      postRenderDetailsPaneComponent={StatusChangeCommentHistory}
    />
  );
}

export default FormsManager;
