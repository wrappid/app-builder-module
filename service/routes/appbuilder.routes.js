const express = require("express");

const appBuilderController = require("../controllers/appBuilder.controller");

const appBuilderRouter = express.Router();

appBuilderRouter.get("/business/tables/:database", appBuilderController.getTables);
appBuilderRouter.get("/business/tables/attributes/:database/:table", appBuilderController.getAttributes);
appBuilderRouter.get("/business/entities", appBuilderController.getBusinessEntities);
appBuilderRouter.get("/business/count/:entity", appBuilderController.getEntityData);

appBuilderRouter.get("/noauth/business/columns/:entity", appBuilderController.getBusinessEntityColumns);
appBuilderRouter.get("/business/individual/:entity", appBuilderController.getIndividualEntityData);
appBuilderRouter.get("/business/all/:entity", appBuilderController.getAllEntityData);
appBuilderRouter.get("/noauth/business/all/:entity", appBuilderController.noAuthGetAllEntityData);

appBuilderRouter.get("/noauth/formSchema/:formID", appBuilderController.getNoAuthFormSchema);

appBuilderRouter.get("/formSchema/:formID", appBuilderController.getFormSchemaWithFormId);

appBuilderRouter.get("/getFormSchema", appBuilderController.getFormSchema);
appBuilderRouter.get("/getFormSchemas", appBuilderController.getFormSchemas);
appBuilderRouter.get("/generateFormSchemas", appBuilderController.getGeneratedFormSchema);
appBuilderRouter.get("/rx/formSchema", appBuilderController.getRxFormSchema);
appBuilderRouter.get("/rx/formSchema/:formID", appBuilderController.getSpecificFormSchema);
appBuilderRouter.post("/rx/formSchema", appBuilderController.createRxFormSchema);
appBuilderRouter.put("/rx/formSchema/:id", appBuilderController.updateRxFormSchema);
appBuilderRouter.patch("/rx/formSchema/:id", appBuilderController.deleteRxFormSchema);

module.exports = appBuilderRouter;

// -------------------------------------------------------

// these apis were not found

// // export const urls = {
//   STATUS_CHANGE_FORM: "status/:model/:id/:status",
// // }; 
