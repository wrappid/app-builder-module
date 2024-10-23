import { useEffect } from "react";

import { CoreBox, CoreClasses } from "@wrappid/core";
import { useSelector, useDispatch } from "react-redux";

import { updatePageJson } from "../../../actions/app.action";

export default function JsonCanvasViewer() {
  const dispatch = useDispatch();
  
  // Fetch the selected layout and placeholders from the Redux store
  const selectedLayout = useSelector((state) => state.appBuilderReducer?.selectedLayout);
  const componentsInBoxes = useSelector((state) => state.appBuilderReducer?.componentsInBoxes) || [];
  const savedPageJson = useSelector((state) => state.appBuilderReducer?.savedPageJson);

  // Create the pageJson structure based on the Redux data
  const pageJson = {
    layout      : selectedLayout || "BlankLayout",
    placeholders: componentsInBoxes
  };

  // Automatically save pageJson to Redux whenever it changes
  useEffect(() => {
    // Only update if the data has actually changed
    if (JSON.stringify(pageJson) !== JSON.stringify(savedPageJson)) {
      dispatch(updatePageJson(pageJson));
    }
  }, [pageJson, savedPageJson]);

  return (
    <CoreBox
      component="pre"
      styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_AUTO, CoreClasses.PADDING.P1]}
    >
      {JSON.stringify(pageJson, null, 2)}
    </CoreBox>
  );
}