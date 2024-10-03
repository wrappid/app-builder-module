import {
  ADD_COMPONENT, ADD_COMPONENT_PROP, REMOVE_COMPONENT, RESET_TEST, SELECT_LAYOUT, SET_ACTIVE_BOX, SET_PROPS_COMPONENT_PATH, SET_SELECTED_COMPONENT_PATH, TEST_FAILURE, TEST_SUCCESS, 
  TOGGLE_PROP_SELECTOR,
  UPDATE_COMPONENT_PROPS
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

export const setPropsComponentPath = (payload) => ({
  payload,
  type: SET_PROPS_COMPONENT_PATH
});

export const togglePropSelector = (isOpen) => ({
  payload: isOpen,
  type   : TOGGLE_PROP_SELECTOR
});

export const addComponentProp = (componentPath, prop) => ({
  payload: { componentPath, prop },
  type   : ADD_COMPONENT_PROP
});

export const updateComponentProps = (componentPath, props) => ({
  payload: { componentPath, props },
  type   : UPDATE_COMPONENT_PROPS
});