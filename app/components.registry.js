import BusinessEntityManager from "./components/BusinessEntityManager";
import Components from "./components/Components";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormsManager from "./components/FormsManager";
import PagesManager from "./components/PagesManager";
import RoutesManager from "./components/RoutesManager";
import StyleUtilities from "./components/StyleUtilities";
import StatusChangeCommentHistory from "./components/StatusChangeCommentHistory";
import StatusChangeForm from "./components/StatusChangeForm";

export const ComponentRegistry = {
  BusinessEntityManager: {
    comp: BusinessEntityManager,
  },
  Components: {
    comp: Components,
  },
  FormBuilder: {
    comp: FormBuilder,
  },
  FormPreview: {
    comp: FormPreview,
  },
  FormsManager: {
    comp: FormsManager,
  },
  PagesManager: {
    comp: PagesManager,
  },
  RoutesManager: {
    comp: RoutesManager,
  },
  StatusChangeCommentHistory: {
    comp: StatusChangeCommentHistory,
  },
  StatusChangeForm: {
    comp: StatusChangeForm,
  },
  StyleUtilities: {
    comp: StyleUtilities,
  },
};
