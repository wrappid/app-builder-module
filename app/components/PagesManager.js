import { CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

import EntityManager from "./EntityManager";

export default function PagesManager() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <EntityManager entityName="Pages" />;
      </CoreLayoutItem>
    </>
  );
  
}
