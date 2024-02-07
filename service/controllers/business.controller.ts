import { databaseActions } from "@wrappid/service-core";
import {
  getEntityDataName,
  getEntityDataCount,
  getIndivEntityData,
} from "../functions/businessEntity.get.helper";

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getBusinessEntities = async (req: any, res: any) => {
  try {
    let data: any = databaseActions.findAll(
      "application",
      "BusinessEntitySchemas",
      {
        where: { _status: "published" },
      }
    );

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Business entities missing" });
      return;
    }

    res.status(200).json({
      data: {
        rows: data,
        totalRecords: data,
      },
      message: "Business entities found successfully",
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
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
const getEntityData = async (req: any, res: any) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ message: "No data found for entity" });
      return;
    }

    let data = await getEntityDataCount(databaseActions, entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    res.status(200).json({
      data: {
        count: data,
        entity: entity,
      },
      message: "Entity data found successfully",
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
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
const getIndividualEntityData = async (req: any, res: any) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ message: "Entity not found on the request" });
      return;
    }

    let data = await getIndivEntityData("application", entity, req.query);

    if (!data) {
      res
        .status(204)
        .json({ message: "Entity[" + entity + "] data not found" });
      return;
    }

    res.status(200).json({
      message: "Entity data found successfully",
      data: {
        data: data,
        entity: entity,
      },
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
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
const getAllEntityData = async (req: any, res: any) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res
        .status(204)
        .json({ message: "You are requested for undefined business entity." });
      return;
    }

    let data: any = await getEntityDataName(entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    res.status(200).json({
      message: "Entity data found successfully",
      data: {
        entity: entity,
        ...data,
      },
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
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
const noAuthGetAllEntityData = async (req: any, res: any) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  let entities = ["RoutePages"];

  try {
    if (!entity && !entities.includes(entity)) {
      res.status(204).json({ message: "Entity is missing" });
      return;
    }

    let data: any = await getEntityDataName(entity, req.query);

    if (!data || data.length === 0) {
      res.status(204).json({ message: "No data found for entity" });
      return;
    }

    res.status(200).json({
      message: "Entity data found successfully",
      data: {
        entity: entity,
        ...data,
      },
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
      message: "Something went wrong",
    });
  }
};

export {
  getBusinessEntities,
  getEntityData,
  getIndividualEntityData,
  getAllEntityData,
  noAuthGetAllEntityData,
};
