import React from "react";

import { ComponentRegistryContext, CoreMenu } from "@wrappid/core";
import { useDispatch } from "react-redux";

import { selectLayout } from "../../../actions/app.action";

export default function LayoutSelector() {
  const componentRegistry = React.useContext(ComponentRegistryContext);
  const dispatch = useDispatch();

  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value) => {
    return value[1].layout === true;
  }));

  const prepareLayoutMenu = (layoutComponentRegistry) => {
    return Object.entries(layoutComponentRegistry)?.map(([layoutName]) => ({
      Children: layoutName,
      id      : layoutName,
      label   : layoutName,
      name    : layoutName?.trim(),
      type    : "layoutName",
    }));
  };

  // Handle menu selection and dispatch the action
  const handleMenuSelect = (selectedItem) => {
    const selectedLayoutName = selectedItem?.name; // Get the layout name

    if (selectedLayoutName) {
      dispatch(selectLayout(selectedLayoutName)); 
    }
  };

  return (
    <>
      <CoreMenu
        multiLevel={true}
        menu={prepareLayoutMenu(layoutComponentRegistry)}
        open={true}
        displayIcon={true}
        OnMenuClick={handleMenuSelect}
      />
    </>
  );
}