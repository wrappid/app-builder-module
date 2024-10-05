import React from "react";

import { CoreButton, CoreDialogContext } from "@wrappid/core";

import DialogDesign from "./DialogDesign";

export default function StyleSelector() {
    
  const [allPropsOpen, setAllPropsOpen] = React.useState(false);

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (allPropsOpen) {
      setDialog({ 
        cancelButtonLabel: "Cancel",
        doneButtonLabel  : "Apply",
        noCancelButton   : false,
        noDoneButton     : false,
        showDialog       : true,
        subtitle         : <DialogDesign/>,
        title            : "Add style for your component",
        type             : "none"
      });

      const timer = setTimeout(() => {
        setAllPropsOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [allPropsOpen, setDialog]);

  const handleClickAllPropsOpen = () => {
    setAllPropsOpen(true);
  };
    
  return (
    <>
      <CoreButton variant="text" onClick={handleClickAllPropsOpen}>
        Add styles
      </CoreButton>
    </>
  );
}