import React from "react";

import {
  CoreButton,
  CoreH3,
  CoreH2,
  BlankLayout,
  CoreLayoutItem,
  CoreBox,
  ThemeSelector,
  CoreClasses
} from "@wrappid/core";

import CreateTheme from "./CreateTheme";
import ThemesViewer from "./ThemesViewer";
function ThemeContent() {
  const [currentState, setCurrentState] = React.useState("Presets");

  const handleStateChange = (state) => {
    setCurrentState(state);
  };

  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
      >
        <CoreH3>THEME VIEWER</CoreH3>

        <CoreBox>
          <CoreBox>
            <CoreBox>
              <CoreButton OnClick={() => handleStateChange("Presets")}>
                Presets
              </CoreButton>

              <CoreButton OnClick={() => handleStateChange("Create Theme")}>
                Create Theme
              </CoreButton>

              <CoreButton OnClick={() => handleStateChange("Preview")}>
                Preview
              </CoreButton>

            </CoreBox>

            <CoreButton>
              <ThemeSelector styleClasses={[CoreClasses.WIDTH.VW_25]}/>
            </CoreButton>

            <>
              {currentState === "Presets" && <ThemesViewer/>}

              {currentState === "Create Theme" && (
                <CreateTheme/>
              )}

              {currentState === "Preview" && <CoreH2>Preview State</CoreH2>}
            </>
          </CoreBox>
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}

export default ThemeContent;
