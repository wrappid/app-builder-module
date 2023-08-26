const databaseController = require("./controllers/database.controller");
const appbuilderController = require("./controllers/appbuilder.controller");

const controllersRegistry = {
    //database
    getDatabaseTables: databaseController.getDatabaseTables,
    getAttributes: appbuilderController.getAttributes,
    getBusinessEntityColumns: appbuilderController.getBusinessEntityColumns,
    
    //business controller
    getBusinessEntities: appbuilderController.getBusinessEntities,
    getEntityData: appbuilderController.getEntityData,
    getIndividualEntityData: appbuilderController.getIndividualEntityData,
    getAllEntityData: appbuilderController.getAllEntityData,
    getFormSchemaWithFormId: appbuilderController.getFormSchemaWithFormId,

    // forms controller
    getNoAuthFormSchema: appbuilderController.getNoAuthFormSchema,
    getFormSchemaWithFormId: appbuilderController.getFormSchemaWithFormId,

};

exports.controllersRegistry = controllersRegistry;