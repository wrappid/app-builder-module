import {
  ADD_COMPONENT, REMOVE_COMPONENT, RESET_TEST, SELECT_LAYOUT, SET_ACTIVE_BOX, SET_SELECTED_COMPONENT_PATH, TEST_FAILURE, TEST_SUCCESS 
} from "../types/test.types";

export const testSuccess = () => {
  return (dispatch) => {
    dispatch({ type: TEST_SUCCESS });
  };
};

export const testFailure = () => {
  return (dispatch) => {
    dispatch({ type: TEST_FAILURE });
  };
};

export const resetTest = () => {
  return (dispatch) => {
    dispatch({ type: RESET_TEST });
  };
};

export const removeComponent = (componentId) => ({
  payload: componentId,
  type   : REMOVE_COMPONENT
});

export const selectLayout = (layout) => ({
  payload: layout,
  type   : SELECT_LAYOUT
});

export const setActiveBox = (boxIndex) => ({
  payload: boxIndex,
  type   : SET_ACTIVE_BOX
});

export const setSelectedComponentPath = (path) => ({
  payload: path,
  type   : SET_SELECTED_COMPONENT_PATH
});

export const addComponent = ({ component, boxIndex, path }) => ({
  payload: { boxIndex, component, path },
  type   : ADD_COMPONENT
});

