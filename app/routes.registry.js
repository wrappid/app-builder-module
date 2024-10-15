import { RightDrawerLayout } from "@wrappid/core";

import PageBuilder from "./components/page-builder/PageBuilder";

export const RoutesRegistry = {
  PageBuilder: {
    Page        : { appComponent: PageBuilder.name, layout: RightDrawerLayout.name },
    authRequired: false,
    entityRef   : "pageBuilder",
    url         : "pageBuilder"
  },
};
