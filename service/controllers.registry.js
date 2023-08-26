const databaseController = require("./controllers/database.controller");

const controllersRegistry = {
    getDatabaseTables: databaseController.getDatabaseTables
};

exports.controllersRegistry = controllersRegistry;