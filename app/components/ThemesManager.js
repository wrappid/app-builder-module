import { useContext, useEffect } from "react";

import {
  AppContainerLayout,
  ComponentRegistryContext,
  CoreDataTable,
  CoreDialogContext,
  CoreLayoutItem,
  __IconTypes,
  coreUseNavigate
} from "@wrappid/core";
import { useDispatch } from "react-redux";

import { __EntityStatus, __ROUTES_CONSTANT } from "../constants/constants";
// eslint-disable-next-line import/order
import StatusChangeCommentHistory from "./StatusChangeCommentHistory";

export default function ThemesManager() {
  const navigate = coreUseNavigate();
  const dispatch = useDispatch();
  const componentRegistry = useContext(ComponentRegistryContext);
  const { setDialog } = useContext(CoreDialogContext);
  const options = componentRegistry
    ? Object.keys(componentRegistry)?.map((com) => {
      return { id: com, label: com };
    })
    : [];

  useEffect(() => {
    dispatch({
      payload: { data: options, key: "ComponentRegistry" },
      type   : "SELECT_OPTION_SUCCESS",
    });
  }, [options]);

  const tableRowActions = [
    {
      action: (data) => {
        setDialog({
          doneButton: () => {
            
          },
          doneButtonLabel: "Apply",
          showDialog     : true,
          subtitle       : `Applying theme: ${data?.name || "Unknown"}\nThe whole UI will chnage based on your changes.`,
          title          : "Apply Theme",
          type           : "warning"
        });
      },
      hide: (rowData) => {
        if (rowData._status === __EntityStatus.PUBLISHED) {
          return true;
        } else {
          return false;
        }
      },
      icon : { icon: "", type: __IconTypes.FONTAWESOME_V5_REGULAR_ICON },
      label: "Apply",
      type : "action",
    },
    {
      action: (data) => {
        navigate(
          "/" +
            __ROUTES_CONSTANT.HISTORY.replace(":model", "ThemeSchemas").replace(
              ":entityRef",
              data.entityRef
            ),
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(":model", "ThemeSchemas")
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(":model", "ThemeSchemas")
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(":model", "ThemeSchemas")
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(":model", "ThemeSchemas")
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
            __ROUTES_CONSTANT.STATUS_CHANGE_FORM.replace(":model", "ThemeSchemas")
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
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreDataTable
          entity="ThemeSchemas"
          rowActions={tableRowActions}
          postRenderDetailsPaneComponent={StatusChangeCommentHistory}
        />
      </CoreLayoutItem>
    </>
  );
}
