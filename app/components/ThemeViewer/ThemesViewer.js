import React from "react";
import { useDispatch } from "react-redux";

import {
  CoreH1,
  CoreBox,
  setUserTheme,
  CoreButton,
  CoreGrid,
  CoreClasses,
  CoreTypographyBody1,
  CoreThemeProvider,
} from "@wrappid/core";

// eslint-disable-next-line import/no-unresolved
import {
  UPDATE_DEFAULT_THEME,
  WrappidDataContext,
  WrappidDispatchContext,
  StylesProvider,
} from "@wrappid/styles";

function ThemesViewer() {
  const storeDispatch = useDispatch();
  const { themes } = React.useContext(WrappidDataContext);

  const handleChangeTheme = (themeId) => {
    storeDispatch(setUserTheme(themeId));
  };

  const renderCards = () => {
    return (
      <CoreGrid>
        {Object.keys(themes).map((themeName, index) => {
          return (
            <CoreBox gridProps={{ gridSize: 3 }}>
              <CoreThemeProvider themeID={themeName}>
                <StylesProvider themeID={themeName}>

                  <CoreGrid
                    styleClasses={[
                      CoreClasses.HEIGHT.VH_25,
                      CoreClasses.BORDER.BORDER,
                      CoreClasses.BORDER.BORDER_SUCCESS,
                      CoreClasses.DISPLAY.FLEX,
                    ]}
                  >
                    {/* First Segment for PrimaryColor */}
                    <CoreBox
                      gridProps={{
                        gridSize: { xs: 6 },
                        styleClasses: [CoreClasses.BG.BG_PRIMARY],
                      }}
                    >
                      Primary Color
                    </CoreBox>

                    {/* Second Segment for SecondaryColor */}
                    <CoreBox
                      gridProps={{
                        gridSize: { xs: 6 },
                        styleClasses: [CoreClasses.BG.BG_SECONDARY],
                      }}
                    >
                      Secondary Color
                    </CoreBox>

                    {/* Third Segment for Text */}
                    <CoreBox
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <CoreTypographyBody1>test</CoreTypographyBody1>
                      <CoreButton
                        key={index}
                        OnClick={() => handleChangeTheme(themeName)}
                      >
                        {themeName}
                      </CoreButton>
                    </CoreBox>
                  </CoreGrid>
                </StylesProvider>
              </CoreThemeProvider>
            </CoreBox>
          );
        })}
      </CoreGrid>
    );
  };

  return <>{renderCards()}</>;
}

export default ThemesViewer;
