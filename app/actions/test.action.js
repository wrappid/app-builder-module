import {
  ADD_COMPONENT,
  ADD_COMPONENT_PROP, 
  REMOVE_COMPONENT, 
  RESET_TEST, 
  SELECT_LAYOUT, 
  SET_ACTIVE_BOX, 
  SET_PROPS_COMPONENT_PATH, 
  SET_SELECTED_COMPONENT_PATH, 
  TEST_FAILURE, 
  TEST_SUCCESS, 
  TOGGLE_LAYOUT_SELECTOR,
  TOGGLE_COMPONENT_SELECTOR,
  TOGGLE_PROP_SELECTOR,
  UPDATE_COMPONENT_PROPS,
  UPDATE_COMPONENT_STYLE_CLASSES
} from "../types/test.types";

/**
 * Dispatches a successful test action.
 */
export const testSuccess = () => {
  return (dispatch) => {
    dispatch({ type: TEST_SUCCESS });
  };
};

/**
 * Dispatches a failed test action.
 */
export const testFailure = () => {
  return (dispatch) => {
    dispatch({ type: TEST_FAILURE });
  };
};

/**
 * Resets the test state.
 */
export const resetTest = () => {
  return (dispatch) => {
    dispatch({ type: RESET_TEST });
  };
};

/**
 * Removes a component by ID.
 * @param {string} componentId - The ID of the component to remove.
 * @returns {Object} The action object.
 */
export const removeComponent = (componentId) => ({
  payload: componentId,
  type   : REMOVE_COMPONENT
});

/**
 * Selects a layout.
 * @param {string} layout - The selected layout.
 * @returns {Object} The action object.
 */
export const selectLayout = (layout) => ({
  payload: layout,
  type   : SELECT_LAYOUT
});

/**
 * Sets the active box index.
 * @param {number} boxIndex - The index of the active box.
 * @returns {Object} The action object.
 */
export const setActiveBox = (boxIndex) => ({
  payload: boxIndex,
  type   : SET_ACTIVE_BOX
});

/**
 * Sets the selected component path.
 * @param {Array} path - The path to the selected component.
 * @returns {Object} The action object.
 */
export const setSelectedComponentPath = (path) => ({
  payload: path,
  type   : SET_SELECTED_COMPONENT_PATH
});

/**
 * Adds a component to a specific box at a given path.
 * @param {Object} componentData - The component data including component, boxIndex, and path.
 * @returns {Object} The action object.
 */
export const addComponent = ({ component, boxIndex, path }) => ({
  payload: { boxIndex, component, path },
  type   : ADD_COMPONENT
});

/**
 * Sets the properties component path.
 * @param {Object} payload - The payload containing the properties component path.
 * @returns {Object} The action object.
 */
export const setPropsComponentPath = (payload) => ({
  payload,
  type: SET_PROPS_COMPONENT_PATH
});

/**
 * Toggles the property selector visibility.
 * @param {boolean} isOpen - The open/closed state of the property selector.
 * @returns {Object} The action object.
 */
export const toggleLayoutSelector = (isOpen) => ({
  payload: isOpen,
  type   : TOGGLE_LAYOUT_SELECTOR
});

/**
 * Toggles the property selector visibility.
 * @param {boolean} isOpen - The open/closed state of the property selector.
 * @returns {Object} The action object.
 */
export const toggleComponentSelector = (isOpen) => ({
  payload: isOpen,
  type   : TOGGLE_COMPONENT_SELECTOR
});

/**
 * Toggles the property selector visibility.
 * @param {boolean} isOpen - The open/closed state of the property selector.
 * @returns {Object} The action object.
 */
export const togglePropSelector = (isOpen) => ({
  payload: isOpen,
  type   : TOGGLE_PROP_SELECTOR
});

/**
 * Adds a property to a component.
 * @param {Array} componentPath - The path to the component.
 * @param {Object} prop - The property to add.
 * @returns {Object} The action object.
 */
export const addComponentProp = (componentPath, prop) => ({
  payload: { componentPath, prop },
  type   : ADD_COMPONENT_PROP
});

/**
 * Updates the properties of a component.
 * @param {Array} componentPath - The path to the component.
 * @param {Object} props - The new properties for the component.
 * @returns {Object} The action object.
 */
export const updateComponentProps = (componentPath, props) => ({
  payload: { componentPath, props },
  type   : UPDATE_COMPONENT_PROPS
});

/**
 * Updates the style classes of a component.
 * @param {Array} componentPath - The path to the component.
 * @param {Array} styleClasses - The new style classes for the component.
 * @returns {Object} The action object.
 */
export const updateComponentStyleClasses = (componentPath, styleClasses) => ({
  payload: { componentPath, styleClasses },
  type   : UPDATE_COMPONENT_STYLE_CLASSES
});
