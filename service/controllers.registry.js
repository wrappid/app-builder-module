const databaseController = require("./controllers/database.controller");
const businessController = require("./controllers/business.controller");
const formsController = require("./controllers/forms.controller");

const controllersRegistry = {
    //database
    getDatabaseTables: databaseController.getDatabaseTables,
    getAttributes: databaseController.getAttributes,
    getBusinessEntityColumns: databaseController.getBusinessEntityColumns,
    
    //business controller
    getBusinessEntities: businessController.getBusinessEntities,
    getEntityData: businessController.getEntityData,
    getIndividualEntityData: businessController.getIndividualEntityData,
    getAllEntityData: businessController.getAllEntityData,
    noAuthGetAllEntityData: businessController.noAuthGetAllEntityData,

    // forms controller
    getNoAuthFormSchema: formsController.getNoAuthFormSchema,
    getFormSchema: formsController.getFormSchema,

};

exports.controllersRegistry = controllersRegistry;