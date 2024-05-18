import { CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

import EntityManager from "./EntityManager";

export default function ModelSchemaManager() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <EntityManager entityName="ModelSchemas" />  
      </CoreLayoutItem>
    </>
  );
}
