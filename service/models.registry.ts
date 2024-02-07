import { BusinessEntitySchemas } from "./models/BusinessEntitySchemas.model";
import { FormSchemas } from "./models/FormSchemas.model";
import { Pages } from "./models/Pages.model";

const ModelsRegistry = {
  BusinessEntitySchemas: {
    database: "application",
    model: BusinessEntitySchemas,
  },
  FormSchemas: {
    database: "application",
    model: FormSchemas,
  },
  Pages: {
    database: "application",
    model: Pages,
  },
};

export default ModelsRegistry;
