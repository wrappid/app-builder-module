module.exports.getDatabaseTables = (req, res) => {
    try {
        let database = req.params.database;
        let requestedDBTables = databaseProvider[database].models;

        let _data = {
            rows: Object.keys(requestedDBTables)
                ?.filter((key) => {
                    return key
                        .toLocaleLowerCase()
                        .includes(req.query._searchValue?.toLocaleLowerCase());
                })
                .map((key) => {
                    return { id: key, name: getNormalCaseFromCamelCase(key) };
                }),
            totalRecords: Object.keys(requestedDBTables).length,
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