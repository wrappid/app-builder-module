import React from "react";

import { CoreButton, CoreDialogContext } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import DialogDesign from "./DialogDesign";
import { updateComponentStyleClasses } from "../../../actions/test.action";

export default function StyleSelector() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { setDialog } = React.useContext(CoreDialogContext);
  const dispatch = useDispatch();
  const propsComponentPath = useSelector((state) => state.testBuilderReducer?.propsComponentPath || null);
  const componentsInBoxes = useSelector((state) => state.testBuilderReducer?.componentsInBoxes);

  // Get the current style classes for the selected component
  const currentStyleClasses = React.useMemo(() => {
    if (propsComponentPath) {
      let currentComponent = componentsInBoxes[propsComponentPath.placeholderIndex];

      for (const index of propsComponentPath.componentPath) {
        currentComponent = currentComponent.children[index];
      }
      return Array.isArray(currentComponent.styleClasses) ? currentComponent.styleClasses : [];
    }
    return [];
  }, [propsComponentPath, componentsInBoxes]);

  const [tempTransferredItems, setTempTransferredItems] = React.useState(currentStyleClasses);

  React.useEffect(() => {
    setTempTransferredItems(currentStyleClasses);
  }, [currentStyleClasses]);

  const handleDialogDone = React.useCallback(() => {
    if (propsComponentPath) {
      dispatch(updateComponentStyleClasses(propsComponentPath, tempTransferredItems));
      // eslint-disable-next-line etc/no-commented-out-code
      // console.log("Dispatching styles:", tempTransferredItems, propsComponentPath);
    } else {
      // console.warn("No component path is selected.");
      //do nothing
    }
    setDialogOpen(false);
  }, [dispatch, propsComponentPath, tempTransferredItems]);

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

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <CoreButton variant="text" onClick={handleDialogOpen}>
      Add styles
    </CoreButton>
  );
}