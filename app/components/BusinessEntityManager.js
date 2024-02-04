import {
  CoreDataTable,
  HTTP,
  __IconTypes,
  apiRequestAction,
  coreUseNavigate
} from "@wrappid/core";
import { useDispatch } from "react-redux";

import StatusChangeCommentHistory from "./StatusChangeCommentHistory";
import { __EntityStatus } from "../constants/constants";
import { RoutesRegistry } from "../routes.registry";

export default function BusinessEntityManager() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();

  const tableRowActions = [
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry?.HISTORY?.replace(
              ":model",
              "BusinessEntitySchemas"
            )?.replace(":entityRef", data.entityRef),
          {}
        );
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "History",
      type : "action",
    },
    {
      action: (data) => {
        // eslint-disable-next-line no-console
        console.log("Clone button clicked");
        // eslint-disable-next-line no-console
        console.log(data);
        dispatch(
          apiRequestAction(
            HTTP.POST,
            `/businessEntity/clone/${data?.name}`,
            true,
            data
          )
        );
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Clone",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            RoutesRegistry?.STATUS_CHANGE_FORM.replace(
              ":model",
              "BusinessEntitySchemas"
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REVIEW_REQUESTED),
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
            RoutesRegistry.STATUS_CHANGE_FORM.replace(
              ":model",
              "BusinessEntitySchemas"
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.APPROVED),
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
            RoutesRegistry.STATUS_CHANGE_FORM.replace(
              ":model",
              "BusinessEntitySchemas"
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.CHANGE_REQUESTED),
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
            RoutesRegistry.STATUS_CHANGE_FORM.replace(
              ":model",
              "BusinessEntitySchemas"
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REJECTED),
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
            RoutesRegistry.STATUS_CHANGE_FORM.replace(
              ":model",
              "BusinessEntitySchemas"
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.PUBLISHED),
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
      entity={"BusinessEntitySchemas"}
      rowActions={tableRowActions}
      postRenderDetailsPaneComponent={StatusChangeCommentHistory}
    />
  );
}
