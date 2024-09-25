import { CoreBox, CoreButton, CoreClasses, CoreIcon, CoreTextField } from "@wrappid/core";

export default function PageMetaInput() {
  return (
    <CoreBox
      component="form"
      noValidate
      autoComplete="off"
    >
      <CoreTextField
        id="filled-basic"
        label="Page Name"
        variant="filled"
      />

      <CoreTextField
        id="outlined-basic"
        label="Routes"
        variant="outlined"
      />

      <CoreButton
        variant="text"
        label="Add Routes"
        endIcon={<CoreIcon icon="add"/>}
        styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.PADDING.P2]}/>

      <CoreButton
        label="Save"/>
    </CoreBox>
  );
}