import BusinessEntityComp from "./components/BusinessEntityComp";
import BusinessEntityManager from "./components/BusinessEntityManager";
import DataCreator from "./components/DataCreator";
import DataViewer from "./components/DataViewer";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormsManager from "./components/FormsManager";
import History from "./components/History";
import ModelSchemaManager from "./components/ModelSchemaManager";
import PageBuilder from "./components/page-builder/PageBuilder";
import PagesManager from "./components/PagesManager";
import RoutesManager from "./components/RoutesManager";
import StatusChangeCommentHistory from "./components/StatusChangeCommentHistory";
import StatusChangeForm from "./components/StatusChangeForm";
import ThemeSchemaComponent from "./components/ThemeSchemaComponent";
import ThemesManager from "./components/ThemesManager";

export const ComponentsRegistry = {
  BusinessEntityComp        : { comp: BusinessEntityComp },
  BusinessEntityManager     : { comp: BusinessEntityManager },
  DataCreator               : { comp: DataCreator },
  DataViewer                : { comp: DataViewer },
  FormBuilder               : { comp: FormBuilder },
  FormPreview               : { comp: FormPreview },
  FormsManager              : { comp: FormsManager },
  History                   : { comp: History },
  ModelSchemaManager        : { comp: ModelSchemaManager },
  PageBuilder               : { comp: PageBuilder },
  PagesManager              : { comp: PagesManager },
  RoutesManager             : { comp: RoutesManager },
  StatusChangeCommentHistory: { comp: StatusChangeCommentHistory },
  StatusChangeForm          : { comp: StatusChangeForm },
  ThemeSchemaComponent      : { comp: ThemeSchemaComponent },
  ThemesManager             : { comp: ThemesManager }
};
