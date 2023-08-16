// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
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
