/* eslint-disable id-length */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const testFunctions = require("../functions/test.functions");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getTables = async (req, res) => {
  try {
    let database = req.params.database;
    let requestedDB = getRequiredDB(database);

    let _data = {
      rows: Object.keys(requestedDB)
        ?.filter((key) => {
          return key
            .toLocaleLowerCase()
            .includes(req.query._searchValue?.toLocaleLowerCase());
        })
        .map((key) => {
          return { id: key, name: getNormalCaseFromCamelCase(key) };
        }),
      totalRecords: Object.keys(requestedDB).length,
    };

    res.status(200).json({
      data   : _data,
      message: "Tables fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error to fetch tables" });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getAttributes = async (req, res) => {
  try {
    let database = req.params.database;
    let requestedDB = getRequiredDB(database);

    let table = req.params.table;
    let rawAttributes = requestedDB[table]?.rawAttributes || {};

    let _data = {
      entity: table,
      rows  : Object.keys(rawAttributes)
        ?.filter((key) => {
          return key
            .toLocaleLowerCase()
            .includes(req.query._searchValue?.toLocaleLowerCase());
        })
        .map((key) => {
          return { id: key, name: getNormalCaseFromCamelCase(key) };
        }),
      totalRecords: Object.keys(rawAttributes).length,
    };

    res.status(200).json({
      data   : _data,
      message: "Attributes fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error to fetch attributes" });
  }
}; 

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getBusinessEntities = async (req, res) => {
  try {
    let data = db.BusinessEntitySchema.findAll({ where: { _status: "active" } });

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
module.exports.getBusinessEntityColumns = async (req, res) => {
  let entity = req.params.entity;

  console.log(`entity=${entity}`);
  try {
    if (!entity) {
      res.status(204).json({ data: 0, message: "No entity found" });
      return;
    }

    let columns = await getEntityColumns(db, entity);

    res.status(200).json({
      data   : columns,
      message: "Business entity columns found successfully",
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
      res.status(204).json({ message: "No data found for entity" });
      return;
    }

    let data = await getEntityData(db, entity, req.query);

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

    let data = await getEntityData(db, entity, req.query);

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

module.exports.getNoAuthFormSchema = async (req, res) => {
  try {
    let formID = req.params.formID;

    if (!formID) {
      return res.status(500).json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await getFormSchema(db, formID, false);

    if (formSchema) {
      res.status(200).json({
        data  : formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

module.exports.getFormSchemaWithFormId = async (req, res) => {
  try {
    let formID = req.params.formID;

    if (!formID) {
      return res.status(500).json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await getFormSchema(db, formID);

    if (formSchema) {
      res.status(200).json({
        data  : formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};

module.exports.getFormSchema = async (req, res) => {
  try {
    let modelName = req.query.model;

    let formSchema = createFormSchema(modelName);

    res.status(200).json({
      data   : formSchema,
      message: "Form schema by model fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error,
      message: "Error to fetch form schema by models",
    });
  }
}; 
module.exports.getFormSchemas = async (req, res) => {
  try {
    /**
       * !. Get all models
       * 2. Create form schema for each
       * 3. Put them in a array
       */
    let modelNames = Object.keys(db);
    let formSchemas = {};

    modelNames
      .filter((o) => !["sequelize", "Sequelize"].includes(o))
      .forEach((model) => (formSchemas[model] = createFormSchema(model)));
    res.status(200).json({
      data   : formSchemas,
      message: "Form schema by model fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error,
      message: "Error to fetch form schema by models",
    });
  }
};
module.exports.getGeneratedFormSchema = async (req, res) => {
  try {
    let force = req.query?.force || false;

    let modelNames = Object.keys(db);
    let formSchemas = {};
    let results = {};

    modelNames
      .filter((o) => !["sequelize", "Sequelize"].includes(o))
      .forEach(async (model) => {
        let _tempFormSchema = createFormSchema(model);
        let _tempForm = await db.FormSchemas.findOne({ where: { formID: model } });

        if (_tempForm) {
          console.log("Form exist for ", model);
          // exist
          results[model] = await db.FormSchemas.update(
            {
              schema   : _tempFormSchema,
              updatedBy: req.user.userId,
            },
            { where: { formID: model } }
          );
          console.log(
            `Updating schema for form ${model} is ${
              results[model] ? "successfull" : "failed"
            }.`
          );
          console.log(results[model]);
        } else {
          console.log("Form not exist for ", model);
          // not exist
          results[model] = await db.FormSchemas.create({
            createdBy: req.user.userId,
            formID   : model,
            name     : getNormalCaseFromCamelCase(model),
            schema   : _tempFormSchema,
            updatedBy: req.user.userId,
          });
        }
      });

    if (results) {
      console.log(`results=${JSON.stringify(results, null, 2)}`);
    }
    res.status(200).json({
      message: "Form schema by model fetched successfully",
      // -- data: formSchemas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error,
      message: "Error to fetch form schema by models",
    });
  }
};
module.exports.getRxFormSchema = async (req, res) => {
  try {
    /**
       * !. Get all form schemas from tables
       */
    let baseQuery = {};

    if (req.query.search) {
      baseQuery["search"] = req.query.search;
    }
    let columns = db.FormSchemas.rawAttributes;
    let fieldsData = Object.keys(columns).filter((col) => {
      return ![
        "id",
        "createdAt",
        "createdBy",
        "updatedAt",
        "updatedBy",
      ].includes(col);
    });

    fieldsData.forEach((field) => {
      if (req.query[field]) {
        baseQuery[field] = { [sequelize.Op.like]: `%${req.query[field]}%` };
      }
    });

    let pageQuery = {};

    pageQuery["start"] = req.query.start;
    pageQuery["length"] = req.query.length;

    paginate(db.FormSchemas, [], baseQuery, pageQuery)
      .then((formSchemas) => {
        res.status(200).json({
          data   : formSchemas,
          message: "Form schemas fetched successfully",
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .json({ error: err, message: "Error to fetch form schemas" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error,
      message: "Error to fetch form schemas",
    });
  }
};
module.exports.getSpecificFormSchema = async (req, res) => {
  try {
    let formID = req.params.formID;

    let formSchema = await db.FormSchemas.findOne({ where: { formID: formID } });

    res.status(200).json({
      data   : formSchema,
      message: "Form schemas fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error,
      message: "Error to fetch form schemas",
    });
  }
};
module.exports.createRxFormSchema = async (req, res) => {
  try {
    let body = req.body;

    console.log(body);

    // update model
    let result = await db.FormSchemas.create({
      ...req.body,
      createdBy: req.user.userId,
      updatedBy: req.user.userId,
    });

    console.log(result);

    if (result)
      res.status(200).json({ message: "Form schema created successfully" });
    else throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: "Error to create form schema" });
  }
};
module.exports.updateRxFormSchema = async (req, res) => {
  try {
    let formSchemaID = req.params.id;

    console.log(`Form Schema ID=${formSchemaID}`);
    let body = req.body;

    console.log(body);

    // update model
    let result = await db.FormSchemas.update(
      {
        ...req.body,
        updatedBy: req.user.userId,
      },
      { where: { id: formSchemaID } }
    );

    console.log(result);

    if (result)
      res.status(200).json({ message: "Form schema updated successfully" });
    else throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: "Error to update form schema" });
  }
};
module.exports.deleteRxFormSchema = async (req, res) => {
  try {
    let formSchemaID = req.params.id;

    console.log(`Form Schema ID=${formSchemaID}`);

    // update model
    let result = await db.FormSchemas.update(
      {
        ...req.body,
        _status  : entityStatus.DELETED,
        updatedBy: req.user.userId,
      },
      { where: { id: formSchemaID } }
    );

    console.log(result);

    if (result)
      res.status(200).json({ message: "Form schema deleted successfully" });
    else throw new Error("Something went wrong");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error, message: "Error to delete form schema" });
  }
};