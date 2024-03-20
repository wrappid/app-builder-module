import { AppContainerLayout, CoreDataTable, CoreLayoutItem, coreUseParams } from "@wrappid/core";

export default function History() {
  const { id, model } = coreUseParams();
  const query = { ref: id };

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>  
        <CoreDataTable
          entity={model}
          filterQuery={{ filter: query }}
        />
      </CoreLayoutItem>
    </>
  );
}
