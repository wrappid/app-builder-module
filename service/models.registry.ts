import { BusinessEntitySchemas } from "./models/BusinessEntitySchemas.model";
import { FormSchemas } from "./models/FormSchemas.model";
import { Pages } from "./models/Pages.model";
import { Users } from "./models/Users.model";
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
  Users: {
    database: "application",
    model: Users,
  },
};

export default ModelsRegistry;
