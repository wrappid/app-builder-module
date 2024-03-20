import BusinessEntityComp from "./components/BusinessEntityComp";
import BusinessEntityManager from "./components/BusinessEntityManager";
import DataCreator from "./components/DataCreator";
import DataViewer from "./components/DataViewer";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormsManager from "./components/FormsManager";
import History from "./components/History";
import PagesManager from "./components/PagesManager";
import RoutesManager from "./components/RoutesManager";
import StatusChangeCommentHistory from "./components/StatusChangeCommentHistory";
import StatusChangeForm from "./components/StatusChangeForm";
import ThemeContent from "./components/ThemeViewer/ThemeContent";

export const ComponentsRegistry = {
  BusinessEntityComp        : { comp: BusinessEntityComp },
  BusinessEntityManager     : { comp: BusinessEntityManager },
  DataCreator               : { comp: DataCreator },
  DataViewer                : { comp: DataViewer },
  FormBuilder               : { comp: FormBuilder },
  FormPreview               : { comp: FormPreview },
  FormsManager              : { comp: FormsManager },
  History                   : { comp: History },
  PagesManager              : { comp: PagesManager },
  RoutesManager             : { comp: RoutesManager },
  StatusChangeCommentHistory: { comp: StatusChangeCommentHistory },
  StatusChangeForm          : { comp: StatusChangeForm },
  ThemeContent              : { comp: ThemeContent },
};
