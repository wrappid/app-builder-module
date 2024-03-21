export const RoutesRegistry = {
  themecontent: {
    Page        : { appComponent: "ThemeContent", layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "themecontent",
    url         : "theme/create"
  },
  themes: {
    Page        : { appComponent: "ThemesViewer" },
    authRequired: false,
    entityRef   : "themes",
    url         : "themes"
  },
};
