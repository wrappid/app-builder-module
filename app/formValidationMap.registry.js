import * as yup from "yup";

export const ValidationsRegistry = {
  pageFormSchema : { appComponent: yup.string().required("App component is required") },
  routeFormSchema: { pageRef: yup.string().required("Page refference is required") }
};
