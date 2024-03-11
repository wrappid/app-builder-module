import React from "react";

import {
  CoreButton,
  CoreH3,
  CoreH2,
  BlankLayout,
  CoreLayoutItem,
  CoreBox
} from "@wrappid/core";

import ThemesViewer from "./ThemesViewer";
function CreateTheme() {
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

            <>
              {currentState === "Presets" && <ThemesViewer/>}

              {currentState === "Create Theme" && (
                <CoreH2>Preview State</CoreH2>
              )}

              {currentState === "Preview" && <CoreH2>Preview State</CoreH2>}
            </>
          </CoreBox>
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}

export default CreateTheme;
