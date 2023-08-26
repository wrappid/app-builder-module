const BusinessEntitySchemas = require("./models/BusinessEntitySchemas.model");
const FormSchemas = require("./models/FormSchemas.model");
const Pages = require("./models/Pages.model");

const modelsRegistry = {
    "BusinessEntitySchemas": {
        database: "application",
        model   : BusinessEntitySchemas
    },
    "FormSchemas": {
        database: "application",
        model   : FormSchemas
    },
    "Pages": {
        database: "application",
        model   : Pages
    },
};

exports.modelsRegistry = modelsRegistry;