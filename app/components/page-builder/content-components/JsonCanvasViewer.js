import { CoreBox, CoreClasses } from "@wrappid/core";
import { useSelector } from "react-redux";

export default function JsonCanvasViewer() {
  // Fetch the selected layout and placeholders from the Redux store
  const selectedLayout = useSelector((state) => state.appBuilderReducer?.selectedLayout);
  const componentsInBoxes = useSelector((state) => state.appBuilderReducer?.componentsInBoxes) || [];

  // Create the pageJson structure based on the Redux data
  const pageJson = {
    layout      : selectedLayout || "BlankLayout",
    placeholders: componentsInBoxes
  };

  return (
    <>
      <CoreBox
        component="pre"
        styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_AUTO, CoreClasses.PADDING.P1]}
      >
        {JSON.stringify(pageJson, null, 2)} 
      </CoreBox>
    </>
  );
}
