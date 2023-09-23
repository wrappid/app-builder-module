/* eslint-disable no-console */
const {
  communicate,
  configProvider,
  coreConstant,
  databaseActions,
  databaseProvider,
} = require("@wrappid/service-core");
const { v4: uuidv4 } = require("uuid");
const {getFormSchema} = require("./formSchema.helper");


const putFormSchemaFunc = async (req, res) => {
  try {
    let model = req.params.model;
    console.log("model=" + model);
    let modelID = req.params.id;
    console.log("modelID=" + modelID);

    let body = req.body;
    console.log(body);

    if (!model) {
      throw new Error("model missing in path parameter");
    }
    if (!databaseProvider.application.models[model]) {
      throw new Error("model[" + model + "] not defined in database");
    }

    // data preparation
    Object.keys(databaseProvider.application.models[model].rawAttributes).forEach((rawAttribute) => {
      // if json save object in db
      if (
        databaseProvider.application.models[model].rawAttributes[rawAttribute].type
          .toString()
          .startsWith("JSON") &&
        body.hasOwnProperty(rawAttribute) &&
        typeof body[rawAttribute] === "string" &&
        body[rawAttribute] !== ""
      ) {
        body[rawAttribute] = JSON.parse(body[rawAttribute]);
      }
    });

    // null if attribute value is empty
    Object.keys(body).forEach((_bodyKey) => {
      if (!body.hasOwnProperty(_bodyKey) || body[_bodyKey] === "") {
        body[_bodyKey] = null;
      }
    });

    var result = null;

    const models = [
      { model: "FormSchemas" },
      { model: "BusinessEntitySchemas" },
      // { model: "Routes" },
      { model: "Pages" },
    ];

    const currentEntry = await databaseActions.findByPk("application",model,body.id);

    if (
      models.findIndex((f) => f.model === model) !== -1 &&
      currentEntry._status !== coreConstant.entityStatus.DRAFT &&
      currentEntry._status !== coreConstant.entityStatus.CHANGE_REQUESTED
    ) {
      // create new entry as draft
      let createData = { ...body };
      delete createData["id"];

      let newEntry = await databaseActions.create("application",model,{
        ...createData,
        _status: coreConstant.entityStatus.DRAFT,
        updatedBy: req.user.userId,
        commitId: uuidv4(),
      });

      console.log("New entry created as draft");
      return{status:200,  message: "New entry created as draft"};
      // res.status(200).json({ message: "New entry created as draft" });
    } else {
      // update model
      result = await databaseActions.update("application",model,
        { ...body, updatedBy: req.user.userId },
        { where: { id: modelID } }
      );

      console.log(result);

      if (result)
      return {status:200,  entity: model, message: model + " updated successfully", }
        // res.status(200).json({
        //   entity: model,
        //   message: model + " updated successfully",
        // });
      else throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
    return {status:200,   entity: model,  error: error, message: "Error to update " + model,}
    // res.status(500).json({
    //   entity: model,
    //   error: error,
    //   message: "Error to update " + model,
    // });
  }
};

const postDataFunc = async (req, res) => {
  try {
    let model = req.params.model;
    console.log("model=" + model);
    if (!model) {
      throw new Error("Model is missing in path parameter");
    }
    if (!databaseProvider.application.models[model]) {
      throw new Error("Model[" + model + "] is not defined in database");
    }

    let body = req.body;
    console.log(body);

    // data preparation
    Object.keys(databaseProvider.application.models[model].rawAttributes).forEach((rawAttribute) => {
      // if json save object in db
      if (
        databaseProvider.application.models[model].rawAttributes[rawAttribute].type
          .toString()
          .startsWith("JSON") &&
        body.hasOwnProperty(rawAttribute) &&
        body[rawAttribute] !== ""
      ) {
        body[rawAttribute] = JSON.parse(body[rawAttribute]);
      }
    });

    // null if attribute value is empty
    Object.keys(body).forEach((_bodyKey) => {
      if (!body.hasOwnProperty(_bodyKey) || body[_bodyKey] === "") {
        body[_bodyKey] = null;
      }
    });

    // update model
    var result = await databaseActions.create("application",model,{
      ...body,
      createdBy: req.user.userId,
      updatedBy: req.user.userId,
    });

    console.log(result);

    if (result)
    return {status:200, entity: model, message: model + " created successfully",};
      // res.status(200).json({
      //   entity: model,
      //   message: model + " created successfully",
      // });
    else throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
    return {status:500, message: "Error to create " + model, error: error};
    // res.status(500).json({
    //   entity: model,
    //   message: "Error to create " + model,
    //   error: error,
    // });
  }
};

const postCloneFormschemaFunc = async (req, res) => {
  try {
    let formID = req.params.formID;
    if (!formID) {
      return {status:500,  message: "formID is missing api path parameter"};
      // return res.status(500).json({
      //   message: "formID is missing api path parameter",
      // });
    }

    let formSchema = await getFormSchema(formID);
    // object cloneSchema
    let cloneSchema = {
      formID: formSchema?.formID + "-" + new Date().getTime(),
      name: `Custom ${formSchema.name}`,
      authRequired: true,
      _status: coreConstant.entityStatus.DRAFT,
      schema: formSchema.schema,
      extraInfo: formSchema.extraInfo,
      entityRef: `${formSchema?.entityRef}-${new Date().getTime()}`,
    };

    if (formSchema) {
      const clonedFormSchema = await databaseActions.create("application","FormSchemas",{
        ...cloneSchema,
        createdBy: req.user.userId,
      });
      return {status: 200, 
        formID: clonedFormSchema.formID,
        data: clonedFormSchema};
      // res.status(200).json({
      //   formID: clonedFormSchema.formID,
      //   data: clonedFormSchema,
      // });
    } else {
      return {status: 204};
      // res.status(204);
    }
  } catch (error) {
    console.error(error);
    return {status: 500, 
      error: error?.message || error,
      message: "Something went wrong", };
    // res.status(500).json({
    //   error: error?.message || error,
    //   message: "Something went wrong",
    // });
  }
};

module.exports = { putFormSchemaFunc, postDataFunc, postCloneFormschemaFunc };
