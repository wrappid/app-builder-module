const express = require("express");

const appBuilderController = require("../controllers/appBuilder.controller");

const appBuilderRouter = express.Router();

//database
appBuilderRouter.get("/business/tables/:database", appBuilderController.getTables);
appBuilderRouter.get("/business/tables/attributes/:database/:table", appBuilderController.getAttributes);
appBuilderRouter.get("/noauth/business/columns/:entity", appBuilderController.getBusinessEntityColumns);

//business controller
appBuilderRouter.get("/business/entities", appBuilderController.getBusinessEntities);
appBuilderRouter.get("/business/count/:entity", appBuilderController.getEntityData);
appBuilderRouter.get("/business/individual/:entity", appBuilderController.getIndividualEntityData);
appBuilderRouter.get("/business/all/:entity", appBuilderController.getAllEntityData);
appBuilderRouter.get("/noauth/business/all/:entity", appBuilderController.noAuthGetAllEntityData);

// forms controller
appBuilderRouter.get("/noauth/formSchema/:formID", appBuilderController.getNoAuthFormSchema);
appBuilderRouter.get("/formSchema/:formID", appBuilderController.getFormSchemaWithFormId);

module.exports = appBuilderRouter;
