const { coreConstant, databaseProvider, databaseActions } = require("@wrappid/service-core");
const { httpMethod, entityStatus } = coreConstant;
const {
  getEntitySchema,
  getColumnsFromSchema,
} = require("./businessEntity.helper");

const auditAttributes = [
  "id",
  "createdAt",
  "createdBy",
  "updatedAt",
  "updatedBy",
  "deletedAt",
  "deletedBy",
];

function getFieldType(attributeType) {
  try {
    let type = "text";
    switch (attributeType) {
      case "INTEGER":
        type = "number";
        break;
      case "DATE":
      case "TIMESTAMP":
        type = "date";
        break;
      case "JSONB":
        type = "json";
        break;
      default:
        type = "text";
        break;
    }
    return type;
  } catch (error) {
    console.error("----------------------------------------");
    console.error("formSchema.helper>getFieldType");
    console.error(error);
    console.error("----------------------------------------");
    throw error;
  }
}

async function generateFormSchema(modelName) {
  try {
    /**
     * @todo check if present in business entity
     */

    let schema = await getEntitySchema(modelName);
    let fieldsData = [];
    if (schema && schema?.model) {
      let entityDB = "application" || schema?.database;
      fieldsData = getColumnsFromSchema(entityDB, schema)?.filter((col) => {
        return !auditAttributes.includes(col.id);
      });
      fieldsData?.forEach((fieldData) => {
        fieldData.type = getFieldType(fieldData.type);
      });
    }

    let endpoint = "/data/" + modelName;
    let formSchema = {
      create: {
        endpoint: endpoint,
        method: httpMethod.HTTP_POST,
        authRequired: true,
        successType: [
          "CREATE_" + modelName.toLocaleUpperCase() + "_SUCCESS",
          "CREATE_DATA_SUCCESS",
        ],
        errorType: [
          "CREATE_" + modelName.toLocaleUpperCase() + "_ERROR",
          "CREATE_DATA_ERROR",
        ],
        // reload: true,
      },
      // read: {
      //   endpoint: endpoint,
      //   method: httpMethod.HTTP_GET,
      //   authRequired: true,
      //   successType: "READ_" + modelName.toLocaleUpperCase() + "_SUCCESS",
      //   errorType: "READ_" + modelName.toLocaleUpperCase() + "_ERROR",
      //   onSubmitRefine: "San_URL_ADD_PATH_PARAM_ID",
      // },
      edit: {
        endpoint: endpoint,
        method: httpMethod.HTTP_PUT,
        authRequired: true,
        successType: [
          "UPDATE_" + modelName.toLocaleUpperCase() + "_SUCCESS",
          "UPDATE_DATA_SUCCESS",
        ],
        errorType: [
          "UPDATE_" + modelName.toLocaleUpperCase() + "_ERROR",
          "UPDATE_DATA_ERROR",
        ],
        onSubmitRefine: "San_URL_ADD_PATH_PARAM_ID",
      },
      delete: {
        endpoint: endpoint,
        method: httpMethod.HTTP_PATCH,
        authRequired: true,
        successType: [
          "DELETE_" + modelName.toLocaleUpperCase() + "_SUCCESS",
          "DELETE_DATA_SUCCESS",
        ],
        errorType: [
          "DELETE_" + modelName.toLocaleUpperCase() + "_ERROR",
          "DELETE_DATA_ERROR",
        ],
        onSubmitRefine: "San_URL_ADD_PATH_PARAM_ID",
      },
      fields: fieldsData,
      actions: [],
    };
    return { formID: modelName, schema: formSchema };
  } catch (error) {
    console.error("----------------------------------------");
    console.error("formSchema.helper>generateFormSchemaFromTableAttributes");
    console.error(error);
    console.error("----------------------------------------");
    throw error;
  }
}

/**
 *
 * @param {*} dbName
 * @param {*} formID
 */
async function getFormSchemaFromDB(formID, auth) {
  try {
    let dbName = "application";
    let dbSequelize = databaseProvider[dbName].Sequelize;
    let whereClause = {
      formID: formID,
      _status: entityStatus.PUBLISHED,
    };
    if (auth) {
      whereClause["authRequired"] = true;
    } else {
      whereClause["authRequired"] = {
        [dbSequelize.Op.or]: {
          [dbSequelize.Op.eq]: false,
          [dbSequelize.Op.is]: null,
        },
      };
    }

    let formSchema = await databaseActions.findOne(dbName, "FormSchemas", {
      where: whereClause,
    });
    return formSchema;
  } catch (error) {
    console.error("----------------------------------------");
    console.error("formSchema.helper>getFormSchema");
    console.error(error);
    console.error("----------------------------------------");
    throw error;
  }
}

/**
 *
 * @param {*} dbName
 * @param {*} formID
 */
const getFormSchema = async (formID, auth = true) => {
  try {
    let formSchema = await getFormSchemaFromDB(formID, auth);
    if (!formSchema && auth) {
      formSchema = generateFormSchema(formID);
    }
    return formSchema;
  } catch (error) {
    console.error("----------------------------------------");
    console.error("formSchema.helper>getFormSchema");
    console.error(error);
    console.error("----------------------------------------");
    throw error;
  }
};

module.exports = { getFormSchema };