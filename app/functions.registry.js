// asyncSelect and formSubmitSanitization

import { pages } from "./functions/asyncSelect.functions";
import { SanStatusUpdate } from "./functions/sanity.functions";

export const FunctionsRegistry = {
  SanStatusUpdate                  : SanStatusUpdate,
  __PAGES_GET_OPTION_LABEL         : pages.getOptionLabel,
  __PAGES_GET_OPTION_VALUE         : pages.getOptionValue,
  __PAGES_IS_OPTIONS_EQUAL_TO_VALUE: pages.isOptionsEqualToValue,
};
