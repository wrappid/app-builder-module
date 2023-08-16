import React from "react";

import { CoreH4 } from "@wrappid/core";

import DocsRegistry from "./docs/DocsRegistry";

export default function Components() {
  return (
    <>
      <CoreH4>Component Samples</CoreH4>

      {Object.keys(DocsRegistry).map(doc => {
        return React.createElement(DocsRegistry[doc]);
      })}
    </>
  );
}
