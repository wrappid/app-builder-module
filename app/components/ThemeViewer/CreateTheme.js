import { CoreForm, FORM_EDIT_MODE } from "@wrappid/core";

import { formSchema } from "./ThemeFormSchema";

export default function CreateTheme() {

  return (
    <>
      <CoreForm
        formId="themeForm"
        formJson={{ themeForm: formSchema }}
        mode={FORM_EDIT_MODE}/>
    </>
  );
}
