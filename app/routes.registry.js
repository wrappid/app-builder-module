export const RoutesRegistry = {
  BUSINESS_ENTITY   : "business_entity",
  FORMS             : "forms",
  HISTORY           : "history/:model/:entityRef",
  PAGE              : "pages",
  ROUTES            : "routes",
  STATUS_CHANGE_FORM: "status/:model/:id/:status",
  TABLES            : "tables",
  themecontent      : {
    Page        : { appComponent: "ThemeContent", layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "components",
    url         : "theme/createTheme"
  },
  themes: {
    Page        : { appComponent: "ThemesViewer" },
    authRequired: false,
    entityRef   : "components",
    url         : "themes"
  },
};
