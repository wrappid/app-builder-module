export const RoutesRegistry = {
  BUSINESS_ENTITY   : "business_entity",
  FORMS             : "forms",
  HISTORY           : "history/:model/:entityRef",
  PAGE              : "pages",
  ROUTES            : "routes",
  STATUS_CHANGE_FORM: "status/:model/:id/:status",
  TABLES            : "tables",
  createTheme       : {
    Page        : { appComponent: "CreateTheme", layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "components",
    url         : "createTheme"
  },
  themes: {
    Page        : { appComponent: "ThemesViewer" },
    authRequired: false,
    entityRef   : "components",
    url         : "themes"
  },
};
