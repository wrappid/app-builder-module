export const urls = { BUSINESS_ENTITY: "business_entity", HISTORY: "history/:model/:entityRef", PAGE: "pages", STATUS_CHANGE_FORM: "status/:model/:entityRef/:status" };

export const __EntityStatus = {
  ACTIVE: "active",

  APPROVED: "approved",

  COMPLETED: "completed",

  CURRENT         : "current",
  DEFAULT         : "active",
  DELETED         : "deleted",
  DRAFT           : "draft",
  INACTIVE        : "inactive",
  NEW             : "new",
  ONHOLD          : "on_hold",
  REJECTED        : "rejected",
  REVIEW_REQUESTED: "review_requested",
  UNKNOWN         : "unknown",
  UPDATED         : "updated",
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
