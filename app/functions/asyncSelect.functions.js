export const __PAGES_GET_OPTION_VALUE = "__PAGES_GET_OPTION_VALUE";

export const pages = {
  getOptionLabel: (data) => {
    return data?.entityRef;
  },
  getOptionValue: (data) => {
    return data?.entityRef;
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.entityRef === value;
  },
};

export const controllers = {
  getOptionLabel: (data) => {
    return data?.id;
  },
  getOptionValue: (data) => {
    return data?.id;
  },
  isOptionsEqualToValue: (option, value) => {
    return option?.id === value;
  },
};
