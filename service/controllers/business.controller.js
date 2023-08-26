const { databaseActions } = require("@wrappid/service-core");
const {
  getEntityData,
  getEntityDataCount,
  getIndivEntityData,
} = require("../functions/businessEntity.get.helper");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getBusinessEntities = async (req, res) => {
  try {
    let data = databaseActions.findAll("application", "BusinessEntitySchemas", { where: { _status: "published" } });

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Business entities missing" });
      return;
    }

    res.status(200).json({
      data: {
        rows        : data,
        totalRecords: data,
      },
      message: "Business entities found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getEntityData = async (req, res) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ message: "No data found for entity" });
      return;
    }

    let data = await getEntityDataCount(db, entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    res.status(200).json({
      data: {
        count : data,
        entity: entity,
      },
      message: "Entity data found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getIndividualEntityData = async (req, res) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ message: "Entity not found on the request" });
      return;
    }

    let data = await getIndivEntityData(db, entity, req.query);

    if (!data) {
      res.status(204).json({ message: "Entity[" + entity + "] data not found" });
      return;
    }

    res.status(200).json({
      data: {
        data  : data,
        entity: entity,
      },
      message: "Entity data found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getAllEntityData = async (req, res) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ message: "You are requested for undefined business entity." });
      return;
    }

    let data = await getEntityData(entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    res.status(200).json({
      data: {
        entity: entity,
        ...data,
      },
      message: "Entity data found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.noAuthGetAllEntityData = async (req, res) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  let entities = ["RoutePages"];

  try {
    if (!entity && !entities.includes(entity)) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    let data = await getEntityData(entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "No data found for entity" });
      return;
    }

    res.status(200).json({
      data: {
        entity: entity,
        ...data,
      },
      message: "Entity data found successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};