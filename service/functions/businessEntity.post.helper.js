const { getEntitySchema } = require("./businessEntity.helper");

/**
 *
 * @param {*} db
 * @param {*} modelName
 * @param {*} attributes
 * @param {*} request
 */
const prepareCreateData = (db, modelName, attributes, request) => {
  if (!modelName) {
    throw new Error(`model is undefined`);
  }
  if (!db[modelName]) {
    throw new Error(`${modelName} is missing in DB`);
  }
  let _attributes = attributes || Object.keys(db[modelName]?.rawAttributes);
  let _createData = {};
  // prepare data
  _attributes.forEach((attr) => {
    if (!auditAttributes.includes(attr)) {
      _createData[attr] = request.body[attr];
    }
  });
  _createData["_status"] = entityStatus.DEFAULT;
  _createData["createdBy"] = request?.user?.userId;

  return _createData;
};

const createData = async (db, modelName, attributes, transaction, request) => {
  let createData = prepareCreateData(
    db,
    modelName,
    attributes || null,
    request
  );

  return await db[modelName].create(createData, {
    transaction: transaction,
  });
};

/**
 *
 * @param {*} db
 * @param {*} schemaName
 * @param {*} request
 */
const postBusinessEntityData = async (db, schemaName, request) => {
  try {
    let schema = await getEntitySchema(db, schemaName);
    if (!schema) {
      throw new Error("Business entity is missing");
    }
    let schemaResult = {};
    let result = await db.sequelize.transaction(async (t) => {
      schemaResult[schema?.model] = await createData(
        db,
        schema?.model,
        schema?.attributes,
        t,
        request
      );

      schema?.include?.forEach((_eachInclude) => {
        schemaResult[_eachInclude?.model] = createData(
          db,
          _eachInclude?.model,
          _eachInclude?.attributes,
          t
        );
      });
    });
  } catch (error) {
    console.error("-------------------------------------");
    console.error("getBusinessEntity.helper>postBusinessEntityData");
    console.error(error);
    console.error("-------------------------------------");
    throw new Error(error);
  }
};

module.exports = {
  postBusinessEntityData,
};
