const { databaseProvider } = require("@wrappid/service-core");

module.exports.getDatabaseTables = (req, res) => {
    try {
        let database = req.params.database;
        let requestedDBTables = databaseProvider[database].models;
        let searchValue = req.query._searchValue;

        let searchedTables = Object.keys(requestedDBTables);

        if (searchValue) {
            searchedTables = Object.keys(requestedDBTables)
                ?.filter((key) => {
                    return key
                        .toLocaleLowerCase()
                        .includes(searchValue?.toLocaleLowerCase());
                });
        }

        let _data = {
            rows: searchedTables.map((key) => {
                    return { id: key, name: key };
                }),
            totalRecords: Object.keys(searchedTables).length,
        };

        res.status(200).json({
            data: _data,
            message: "Tables fetched successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error to fetch tables" });
    }
};