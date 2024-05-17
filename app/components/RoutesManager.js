import { CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

import EntityManager from "./EntityManager";

export default function RoutesManager() {
  return (
    (
      <>
        <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
          <EntityManager entityName="Routes" />; 
        </CoreLayoutItem>
      </>
    )
  );
}
