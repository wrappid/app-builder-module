export const __EntityStatus = {
  ACTIVE          : "active",
  APPROVED        : "approved",
  CHANGE_REQUESTED: "change_requested",
  COMPLETED       : "completed",
  CURRENT         : "current",
  DEFAULT         : "active",
  DELETED         : "deleted",
  DRAFT           : "draft",
  INACTIVE        : "inactive",
  NEW             : "new",
  ONHOLD          : "on_hold",
  PUBLISHED       : "published",
  REJECTED        : "rejected",
  REVIEW_REQUESTED: "review_requested",
  UNKNOWN         : "unknown",
  UPDATED         : "updated"
};

export const DB_CONST = {
  RXEFY_DB         : "RXEFY_DB",
  RXEFY_MEDICINE_DB: "RXEFY_MEDICINE_DB",
};

export const APP_ROLES = {
  ASSISTANT: "assistant",
  DOCTOR   : "doctor",
  PATIENT  : "patient",
};

export const __ROUTES_CONSTANT = {
  BUSINESS_ENTITY   : "business_entity",
  FORMS             : "forms",
  HISTORY           : "history/:model/:entityRef",
  PAGE              : "pages",
  PAGE_BUILDER      : "pageBuilder/?id=:id",
  ROUTES            : "routes",
  STATUS_CHANGE_FORM: "status/:model/:id/:status",
  TABLES            : "tables"
};