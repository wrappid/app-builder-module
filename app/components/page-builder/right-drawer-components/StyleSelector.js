import React from "react";

import { CoreButton, CoreDialogContext } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import DialogDesign from "./DialogDesign";
import { updateComponentStyleClasses } from "../../../actions/test.action";

export default function StyleSelector() {
  const [allPropsOpen, setAllPropsOpen] = React.useState(false);
  const [tempTransferredItems, setTempTransferredItems] = React.useState([]);

  const { setDialog } = React.useContext(CoreDialogContext);
  const dispatch = useDispatch();

  // Get the selectedComponentPath from Redux state
  const selectedComponentPath = useSelector((state) => state.testBuilder?.selectedComponentPath || null);

  // Function to handle the dialog close and dispatch the updated styles
  const handleDialogDone = () => {
    if (selectedComponentPath) {
      // eslint-disable-next-line no-console
      console.log("Dispatching styles:", tempTransferredItems, selectedComponentPath);
      dispatch(updateComponentStyleClasses(selectedComponentPath, tempTransferredItems));

    } else {
      // eslint-disable-next-line no-console
      console.warn("No component path is selected.");
    }
  };

  React.useEffect(() => {
    if (allPropsOpen) {
      setDialog({
        cancelButtonLabel: "Cancel",
        dialogProps      : { maxWidth: "xl" },
        doneButton       : handleDialogDone, // On done, apply styles
        doneButtonLabel  : "Apply",
        noCancelButton   : false,
        noDoneButton     : false,
        showDialog       : true,
        subtitle         : (
          <DialogDesign
            initialItems={tempTransferredItems}
            onTransferDone={setTempTransferredItems}
          />
        ),
        type: "info",
      });

      const timer = setTimeout(() => {
        setAllPropsOpen(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allPropsOpen, setDialog, tempTransferredItems]);

  const handleClickAllPropsOpen = () => {
    setAllPropsOpen(true);
  };

  return (
    <CoreButton variant="text" onClick={handleClickAllPropsOpen}>
      Add styles
    </CoreButton>
  );
}
