import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
export default function ViewerOption() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MB2]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <CoreTab
          value="one"
          label="Default"
        />

        <CoreTab value="two" label="JSON" />

        <CoreTab value="three" label="Code" />
      </CoreTabs>
    </CoreBox>
  );
}