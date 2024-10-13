import React from "react";

import { CoreButton, CoreDialogContext } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import DialogDesign from "./DialogDesign";
import { updateComponentStyleClasses } from "../../../actions/test.action";

export default function StyleSelector() {
  // Dialog state
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { setDialog } = React.useContext(CoreDialogContext);
  
  const dispatch = useDispatch();

  // Redux selectors to retrieve component paths and structure
  const { propsComponentPath, componentsInBoxes } = useSelector((state) => ({
    componentsInBoxes : state.testBuilderReducer?.componentsInBoxes,
    propsComponentPath: state.testBuilderReducer?.propsComponentPath || null,
  }));
  
  /**
   * Get the current style classes for the selected component.
   * If no valid path is selected, return an empty array.
   */
  const currentStyleClasses = React.useMemo(() => {
    if (propsComponentPath) {
      let currentComponent = componentsInBoxes[propsComponentPath.placeholderIndex];

      // Traverse the component tree to get the target component's styleClasses
      propsComponentPath.componentPath.forEach((index) => {
        currentComponent = currentComponent.children[index];
      });
      return Array.isArray(currentComponent.styleClasses) ? currentComponent.styleClasses : [];
    } else {
      return [];
    }
  }, [propsComponentPath, componentsInBoxes]);

  // Local state for temporarily storing transferred styles before applying
  const [tempTransferredItems, setTempTransferredItems] = React.useState(currentStyleClasses);

  // Update temporary styles when current styleClasses change
  React.useEffect(() => {
    setTempTransferredItems(currentStyleClasses);
  }, [currentStyleClasses]);

  /**
   * Handles the dialog done action. Dispatches the updated style classes to the Redux store.
   */
  const handleDialogDone = React.useCallback(() => {
    if (propsComponentPath) {
      dispatch(updateComponentStyleClasses(propsComponentPath, tempTransferredItems));
    }
    setDialogOpen(false);
  }, [dispatch, propsComponentPath, tempTransferredItems]);

  // Triggered when the dialog is opened, and sets the dialog properties
  React.useEffect(() => {
    if (dialogOpen) {
      setDialog({
        dialogProps    : { maxWidth: "xl" },
        doneButton     : handleDialogDone,
        doneButtonLabel: "Apply",
        noCancelButton : false,
        noDoneButton   : false,
        showDialog     : true,
        subtitle       : (
          <DialogDesign
            initialItems={currentStyleClasses}
            onTransferDone={setTempTransferredItems}
          />
        ),
        type: "info",
      });
    }
  }, [dialogOpen, setDialog, handleDialogDone, currentStyleClasses]);

  // Opens the dialog
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <CoreButton variant="text" onClick={handleDialogOpen}>
      Add styles
    </CoreButton>
  );
}