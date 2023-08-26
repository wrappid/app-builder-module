const { databaseActions } = require("@wrappid/service-core");
const {
  getEntitySchema,
  getEntityOption,
  getTotalCount,
  prepareOrderOB,
  getFinalWhereClause,
  getColumnsFromSchema,
  auditAttributes,
  getRequiredDB,
} = require("./businessEntity.helper");

/**
 *
 * @param {*} db
 * @param {*} entityName
 * @param {*} query
 * @returns
 */
const getEntityDataCount = async (db, entityName, query) => {
  try {
    let schema = await getEntitySchema(db, entityName);
    if (!schema) {
      throw new Error("Entity is missing");
    }

    let entityDatabaseName = "application"; // getRequiredDB(schema?.database || DB_CONST.RXEFY_DB);

    let { where, ...schemaOptions } = getEntityOption(entityDatabaseName, schema, query);
    let finalWhereOB = {};
    finalWhereOB = getFinalWhereClause(
      entityDatabaseName,
      schema,
      query?._defaultFilter,
      query?._searchValue
    );

    // order filter
    let orderOB = prepareOrderOB(entityDatabaseName, schema, query?._order);

    let _options = {
      benchmark: true,
      logging: console.log,
      ...schemaOptions,
    };

    if (schema.hasOwnProperty("raw")) {
      _options["raw"] = schema.raw;
    }
    if (schema.hasOwnProperty("nest")) {
      _options["nest"] = schema.nest;
    }

    if (finalWhereOB) {
      _options["where"] = finalWhereOB;
    }
    if (orderOB) {
      _options["order"] = orderOB;
    }

    if (schema?.attributes && schema?.attributes?.length > 0) {
      let tempAuditAttributes = auditAttributes.filter((value) =>
        Object.keys(db[schema?.model]?.rawAttributes).includes(value)
      );
      // if (schema?.model === "Users") {
      //   tempAuditAttributes = tempAuditAttributes.filter((auditAttribute) => {
      //     return (
      //       auditAttribute !== "createdBy" && auditAttribute !== "updatedBy"
      //     );
      //   });
      // }
      _options["attributes"] = [...schema?.attributes, ...tempAuditAttributes];
    }

    let count = await entityDatabaseName[schema.model].count(_options);

    return count;
  } catch (error) {
    console.error("-------------------------------------");
    console.error("getBusinessEntity.helper>getEntityData");
    console.error(error);
    console.error("-------------------------------------");
    throw new Error(error);
  }
};

const getEntityColumns = async (db, entityName) => {
  try {
    let schema = await getEntitySchema(db, entityName);
    if (!schema) {
      throw new Error("Entity is missing");
    }

    return getColumnsFromSchema(db, schema);
  } catch (error) {
    console.error("-------------------------------------");
    console.error("getBusinessEntity.helper>getEntityData");
    console.error(error);
    console.error("-------------------------------------");
    throw new Error(error);
  }
};

/**
 *
 * @param {*} db
 * @param {*} entityName
 * @param {*} query
 * @returns
 */
const getEntityData = async (entityName, query) => {
  try {
    let schema = await getEntitySchema(entityName);
    if (!schema) {
      throw new Error("Entity is missing");
    }

    let entityDatabaseName = /* schema?.database ||  */"application";

    let { where, ...schemaOptions } = getEntityOption(entityDatabaseName, schema, query);
    let finalWhereOB = {};
    finalWhereOB = getFinalWhereClause(
      entityDatabaseName,
      schema,
      query?._defaultFilter,
      query?._searchValue
    );

    // order filter
    let orderOB = prepareOrderOB(entityDatabaseName, schema, query?._order);

    let _options = {
      benchmark: true,
      logging: console.log,
      ...schemaOptions,
    };

    if (schema.hasOwnProperty("raw")) {
      _options["raw"] = schema.raw;
    }
    if (schema.hasOwnProperty("nest")) {
      _options["nest"] = schema.nest;
    }

    if (finalWhereOB) {
      _options["where"] = finalWhereOB;
    }
    if (orderOB) {
      _options["order"] = orderOB;
    }

    if (schema?.attributes && schema?.attributes?.length > 0) {
      let tempAuditAttributes = auditAttributes.filter((value) =>
        Object.keys(db[schema?.model]?.rawAttributes).includes(value)
      );
      // if (schema?.model === "Users") {
      //   tempAuditAttributes = tempAuditAttributes.filter((auditAttribute) => {
      //     return (
      //       auditAttribute !== "createdBy" && auditAttribute !== "updatedBy"
      //     );
      //   });
      // }
      _options["attributes"] = [...schema?.attributes, ...tempAuditAttributes];
    }

    if (query?.offset) {
      _options["offset"] = query?.offset;
    }
    if (query?.limit) {
      _options["limit"] = query?.limit;
    }

    let columns = getColumnsFromSchema(entityDatabaseName, schema);
    let { count, rows } = await databaseActions.findAndCountAll(entityDatabaseName, schema?.model, _options);

    return { columns: columns, rows: rows, totalRecords: count };
  } catch (error) {
    console.error("-------------------------------------");
    console.error("getBusinessEntity.helper>getEntityData");
    console.error(error);
    console.error("-------------------------------------");
    throw new Error(error);
  }
};

/**
 *
 * @param {*} db
 * @param {*} entity
 * @param {*} query
 */
const getIndivEntityData = async (entityDatabaseName, entityName, query) => {
  let schema = await getEntitySchema(entityDatabaseName, entityName);
  if (!schema) {
    throw new Error("Entity is missing");
  }

  let { where, ...schemaOptions } = getEntityOption(entityDatabaseName, schema, query);
  let finalWhereOB = {};
  finalWhereOB = getFinalWhereClause(
    entityDatabaseName,
    schema,
    query?._defaultFilter,
    query?._searchValue
  );

  let _options = {
    benchmark: true,
    logging: console.log,
    raw: schema.hasOwnProperty("raw") ? schema.raw : true,
    nest: schema.hasOwnProperty("nested") ? schema.nested : false,
    where: finalWhereOB,
    ...schemaOptions,
  };

  return await databaseActions.findOne(entityDatabaseName, schema?.model, _options);
};

// ---------------------------------------------------------------

module.exports = {
  getEntitySchema,
  getEntityDataCount,
  getEntityColumns,
  getEntityData,
  getIndivEntityData,
};
