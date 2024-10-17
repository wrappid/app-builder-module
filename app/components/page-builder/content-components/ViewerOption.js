import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";

import DefaultCanvasViewer from "./DefaultCanvasViewer";
import JsonCanvasViewer from "./JsonCanvasViewer";

function CoreTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CoreBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <CoreBox>{children}</CoreBox>}
    </CoreBox>
  );
}

function a11yProps(index) {
  return {
    "aria-controls": `simple-tabpanel-${index}`,
    id             : `simple-tab-${index}`,
  };
}
                
export default function ViewerOption() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreBox styleClasses={[
        CoreClasses.BORDER.BORDER_BOTTOM,
        CoreClasses.BORDER.BORDER_GREY_300,
        CoreClasses.POSITION.POSITION_STICKY,
        CoreClasses.POSITION.TOP_0,
        CoreClasses.Z_INDEX.Z_3,
        CoreClasses.BG.BG_WHITE
      ]}>
        <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CoreTab label="Default" {...a11yProps(0)} />

          <CoreTab label="JSON" {...a11yProps(1)} />

          <CoreTab label="Code" {...a11yProps(2)} />
        </CoreTabs>
      </CoreBox>

      <CoreTabPanel value={value} index={0}>
        <DefaultCanvasViewer/>
      </CoreTabPanel>

      <CoreTabPanel value={value} index={1}>
        <JsonCanvasViewer />
      </CoreTabPanel>

      <CoreTabPanel value={value} index={2}>
        Not developted yet
      </CoreTabPanel>
    </CoreBox>
  );
}