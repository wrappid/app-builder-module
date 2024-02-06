import businessController from "./controllers/business.controller";
import databaseController from "./controllers/database.controller";
import formsController from "./controllers/forms.controller";

const ControllersRegistry = {
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

  putFormSchema: formsController.putFormSchema,
};
export default ControllersRegistry;
