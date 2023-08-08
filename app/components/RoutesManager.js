import { CoreDataTable, __IconTypes, coreUseNavigate } from "@wrappid/core";

import StatusChangeCommentHistory from "./StatusChangeCommentHistory";
import { __EntityStatus } from "../constants/constants";
import { RouteRegistry } from "../routes.registry";

export default function RoutesManager() {
  const navigate = coreUseNavigate();

  const tableRowActions = [
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.HISTORY.replace(":model", "Routes").replace(":entityRef", data?.entityRef),
          {}
        );
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "History",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.STATUS_CHANGE_FORM.replace(":model", "Routes")
              .replace(":id", data?.id)
              .replace(":status", __EntityStatus.REVIEW_REQUESTED),
          { state: data }
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
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Request for review",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.STATUS_CHANGE_FORM.replace(":model", "Routes")
              .replace(":id", data?.id)
              .replace(":status", __EntityStatus.APPROVED),
          { state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Approve",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.STATUS_CHANGE_FORM.replace(":model", "Routes")
              .replace(":id", data?.id)
              .replace(":status", __EntityStatus.CHANGE_REQUESTED),
          { state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Change request",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.STATUS_CHANGE_FORM.replace(":model", "Routes")
              .replace(":id", data?.id)
              .replace(":status", __EntityStatus.REJECTED),
          { state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.REVIEW_REQUESTED) {
          return false;
        } else {
          return true;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Reject",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RouteRegistry.STATUS_CHANGE_FORM.replace(":model", "Routes")
              .replace(":id", data?.id)
              .replace(":status", __EntityStatus.PUBLISHED),
          { state: data }
        );
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.APPROVED) {
          return false;
        } else {
          return true;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Publish",
      type : "action",
    },
  ];

  return (
    <CoreDataTable
      entity={"Routes"}
      createFormID={"RouteForm"}
      updateFormID={"RouteForm"}
      rowActions={tableRowActions}
      postRenderDetailsPaneComponent={StatusChangeCommentHistory}
    />
  );
}
