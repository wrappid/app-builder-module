import { CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

import EntityManager from "./EntityManager";

export default function FormsManager() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <EntityManager entityName="FormSchemas" />;
      </CoreLayoutItem>
    </>
  );
}