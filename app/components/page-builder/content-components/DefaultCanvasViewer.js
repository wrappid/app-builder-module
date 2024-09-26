import {
  CoreBox, CoreClasses,
  LayoutManager
} from "@wrappid/core";
import { useSelector } from "react-redux";

export default function DefaultCanvasViewer() {
  const selectedLayout = useSelector((state) => state.testBuilderReducer?.selectedLayout);
  const layoutName = selectedLayout || "BlankLayout";
  
  return (
    <>
      <CoreBox
        styleClasses={[CoreClasses.BG.BG_DOT_GRID_1, CoreClasses.HEIGHT.VH_75, CoreClasses.OVERFLOW.OVERFLOW_AUTO, CoreClasses.PADDING.P2]}>

        <CoreBox 
          styleClasses={[CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1, CoreClasses.SHADOW.NORMAL, CoreClasses.OVERFLOW.OVERFLOW_AUTO]}
        >
          <LayoutManager key={layoutName + "-VIEW-MODE"} layoutName={layoutName} viewMode={true} />
        </CoreBox>
      </CoreBox>

      {/* ↑↓ */}
    </>
  );
}