import { SELECT_LAYOUT } from "../types/test.types";

const initialState = {
  error         : false,
  message       : "This is a test module.",
  selectedLayout: null, 
  success       : false 
};

const testBuilderReducer = (state = initialState, action) => {
  switch (action.type) {

    case SELECT_LAYOUT:
      return {
        ...state,
        selectedLayout: action.payload // Store the selected layout
      };

    default:
      return state;
  }
};

export default testBuilderReducer;