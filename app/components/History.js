import { CoreDataTable, coreUseParams } from "@wrappid/core";

export default function History() {
  const { id, model } = coreUseParams();
  const query = { ref: id };

  return (
    <CoreDataTable
      entity={model}
      filterQuery={{ filter: query }}
    />
  );
}
