import React from "react";

import { CoreBox, CoreClasses } from "@wrappid/core";
import { useSelector } from "react-redux";

export default function JsonCanvasViewer() {
  const selectedLayout = useSelector((state) => state.testBuilderReducer?.selectedLayout);
  const layoutName = selectedLayout || "BlankLayout";

  const [pageJson, setPageJson] = React.useState({ layout: layoutName });

  // Update pageJson when layout changes
  React.useEffect(() => {
    if (layoutName) {
      setPageJson((prevPageJson) => ({
        ...prevPageJson,
        layout: layoutName, // Replace the layout with the new selected layout
      }));
    }
  }, [layoutName]);
  return (
    <>
      <CoreBox component="pre" styleClasses={[CoreClasses.HEIGHT.VH_75, CoreClasses.OVERFLOW.OVERFLOW_AUTO, CoreClasses.PADDING.P2]}>
        {JSON.stringify(pageJson, null, 2)}
      </CoreBox>
    </>
  );
}