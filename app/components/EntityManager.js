import {
  CoreDataTable,
  HTTP,
  __IconTypes,
  apiRequestAction,
  coreUseNavigate,
  coreUseLocation
} from "@wrappid/core";
import { useDispatch } from "react-redux";

import { __EntityStatus, __ROUTES_CONSTANT } from "../constants/constants";
// eslint-disable-next-line import/order
import StatusChangeCommentHistory from "./StatusChangeCommentHistory";

export default function EntityManager(props) {
  const { entityName } = props;
  const location = coreUseLocation();
  const { pathname: pageUrl } = location;
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();

  const tableRowActions = [
    {
      action: (data) => {
        navigate(
          "/" +
            __ROUTES_CONSTANT?.HISTORY?.replace(
              ":model",
              entityName
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
            `/data/clone/${entityName}/${data?.entityRef}`,
            true,
            data
          )
        );
      },
      hide: (rowData) => {
        if (rowData._status != __EntityStatus.PUBLISHED) {
          return true;
        } else {
          return false;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Clone",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            __ROUTES_CONSTANT?.STATUS_CHANGE_FORM.replace(
              ":model",
              entityName
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REVIEW_REQUESTED),
          { state: { ...data, pageUrl } }
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(
              ":model",
              entityName
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.APPROVED),
          { state: { ...data, pageUrl } }
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(
              ":model",
              entityName
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.CHANGE_REQUESTED),
          { state: { ...data, pageUrl } }
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(
              ":model",
              entityName
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.REJECTED),
          { state: { ...data, pageUrl } }
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(
              ":model",
              entityName
            )
              ?.replace(":id", data?.id)
              ?.replace(":status", __EntityStatus.PUBLISHED),
          { state: { ...data, pageUrl } }
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
      entity={entityName}
      rowActions={tableRowActions}
      postRenderDetailsPaneComponent={StatusChangeCommentHistory}
    />
  );
}
