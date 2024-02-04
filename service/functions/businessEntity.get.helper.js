const { databaseActions, databaseProvider } = require("@wrappid/service-core");
const {
  getEntitySchema,
  getEntityOption,
  // eslint-disable-next-line no-unused-vars
  getTotalCount,
  prepareOrderOB,
  getFinalWhereClause,
  getColumnsFromSchema,
  auditAttributes,
  // eslint-disable-next-line no-unused-vars
  getRequiredDB,
} = require("./businessEntity.helper");

/**
 *
 * @param {*} db
 * @param {*} entityName
 * @param {*} query
 * @returns
 */
const getEntityDataCount = async (databaseActions, entityName, query) => {
  try {
    let schema = await getEntitySchema( entityName);
    if (!schema) {
      throw new Error("Entity is missing");
    }

    let entityDatabaseName = "application"; // getRequiredDB(schema?.database || DB_CONST.RXEFY_DB);

    // eslint-disable-next-line no-unused-vars
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

    if (Object.prototype.hasOwnProperty.call(schema, "raw")) {
      _options["raw"] = schema.raw;
    }
    if (Object.prototype.hasOwnProperty.call(schema, "nest")) {
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
        /** @todo hard-coded database name */
        Object.keys(databaseProvider["application"].models[schema?.model]?.rawAttributes).includes(value)
      );
      // if (schema?.model === "Users") {
      //   tempAuditAttributes = tempAuditAttributes.filter((auditAttribute) => {
      //     return (
      //       auditAttribute !== "createdBy" && auditAttribute !== "updatedBy"
      //     );
      //   });
      // }
      _options["attributes"] = [...(schema?.attributes || []), ...tempAuditAttributes];
    }

    let count = await databaseProvider[entityDatabaseName].models[schema.model].count(_options);
    
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
    let db = "application";
    let schema = await getEntitySchema(entityName);
    if (!schema) {
      throw new Error("Entity is missing");
    }

    let entityDatabaseName = /* schema?.database ||  */"application";

    // eslint-disable-next-line no-unused-vars
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

    if (Object.prototype.hasOwnProperty.call(schema, "raw")) {
      _options["raw"] = schema.raw;
    }
    if (Object.prototype.hasOwnProperty.call(schema, "nest")) {
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
        Object.keys(databaseProvider[db].models[schema?.model]?.rawAttributes).includes(value)
      );
      // if (schema?.model === "Users") {
      //   tempAuditAttributes = tempAuditAttributes.filter((auditAttribute) => {
      //     return (
      //       auditAttribute !== "createdBy" && auditAttribute !== "updatedBy"
      //     );
      //   });
      // }
      _options["attributes"] = [...(schema?.attributes || []), ...tempAuditAttributes];
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
  let schema = await getEntitySchema( entityName);
  if (!schema) {
    throw new Error("Entity is missing");
  }

  // eslint-disable-next-line no-unused-vars
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
    raw: Object.prototype.hasOwnProperty.call(schema, "raw") ? schema.raw : true,
    nest: Object.prototype.hasOwnProperty.call(schema, "nested") ? schema.nested : false,
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
