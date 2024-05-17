import { CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

import EntityManager from "./EntityManager";

export default function BusinessEntityManager() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <EntityManager entityName="BusinessEntitySchemas" />  
      </CoreLayoutItem>
    </>
  );
}
