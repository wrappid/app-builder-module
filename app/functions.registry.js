/* eslint-disable no-unused-vars */
// asyncSelect and formSubmitSanitization

export const FunctionsRegistry = {
  SanStatusUpdate: (formData, apiMeta, state, others) => {
    const id = formData.id;
    const model = apiMeta?.reduxData?.reduxData?.query?.model;
    const data = { ...formData };
      
    delete data["id"];
    const obj = {
      endpoint: apiMeta?.endpoint?.replace(":model", model).replace(":id", id),
      values  : formData,
    };
      
    return obj;
  }
};