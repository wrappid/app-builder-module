import { layoutData } from "../components/page-builder/content-components/DefaultCanvasViewer";
import {
  SELECT_LAYOUT,
  SET_ACTIVE_BOX,
  SET_SELECTED_COMPONENT_PATH,
  ADD_COMPONENT,
  SET_PROPS_COMPONENT_PATH,
  TOGGLE_PROP_SELECTOR
} from "../types/test.types";

/**
 * Initial state for the test builder reducer
 * @type {Object}
 */
const initialState = {
  activeBox            : null,
  componentsInBoxes    : [], 
  isPropSelectorOpen   : false, // New: Boolean to track whether PropSelector is open
  propsComponentPath   : null, // New: Path to the component whose props are being edited
  selectedComponentPath: null, 
  selectedLayout       : "BlankLayout"
};

/**
 * Initializes componentsInBoxes based on the selected layout
 * @param {string} layout - Layout to initialize
 * @returns {Object[]} Array of initialized boxes
 */
const initializeComponentsInBoxes = (layout) => {
  const boxIds = layoutData[layout];

  return boxIds.map((id) => ({
    id, 
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    children: []
  }));
};

/**
 * Handles the SELECT_LAYOUT action
 * @param {Object} state - Current state
 * @param {string} newLayout - New layout to be selected
 * @returns {Object} Updated state
 */
const handleSelectLayout = (state, newLayout) => {
  const componentsInBoxes = initializeComponentsInBoxes(newLayout); 

  return {
    ...state,
    componentsInBoxes, 
    selectedLayout: newLayout, 
  };
};

/**
 * Handles the ADD_COMPONENT action
 * @param {Object} state - Current state
 * @param {Object} payload - Action payload
 * @returns {Object} Updated state
 */
const handleAddComponent = (state, payload) => {
  const { component, boxIndex, path } = payload;
  const newComponentsInBoxes = [...state.componentsInBoxes]; // Create a shallow copy

  // Ensure boxIndex exists, otherwise initialize it
  if (!newComponentsInBoxes[boxIndex]) {
    newComponentsInBoxes[boxIndex] = { children: [] }; 
  }

  // Helper function to traverse and add component
  const addComponentRecursively = (currentLevel, path, component) => {
    path.forEach((currentIndex) => {
      // Ensure current level has children array
      if (!currentLevel.children) {
        currentLevel.children = [];
      }

      // Initialize child if it does not exist
      if (!currentLevel.children[currentIndex]) {
        currentLevel.children[currentIndex] = { children: [] };
      }

      // Move down the tree
      currentLevel = currentLevel.children[currentIndex];
    });

    // Finally, add the new component at the last level
    currentLevel.children.push({
      component: component,
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      children : [],
    });
  };

  // Check if the path is null to add at the root level
  if (path === null) {
    newComponentsInBoxes[boxIndex].children.push({
      component: component,
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      children : [],
    });
  } else {
    // Add the component recursively
    addComponentRecursively(newComponentsInBoxes[boxIndex], path, component);
  }

  return {
    ...state,
    activeBox            : null,
    componentsInBoxes    : newComponentsInBoxes,
    selectedComponentPath: null,
  };
};

/**
 * Reducer function for the test builder
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} New state
 */
const testBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LAYOUT:
      return handleSelectLayout(state, action.payload);

    case SET_ACTIVE_BOX:
      return {
        ...state,
        activeBox: action.payload,
      };

    case SET_SELECTED_COMPONENT_PATH:
      return {
        ...state,
        selectedComponentPath: action.payload,
      };

    case ADD_COMPONENT:
      return handleAddComponent(state, action.payload);

    case SET_PROPS_COMPONENT_PATH:
      return {
        ...state,
        propsComponentPath: action.payload
      };

    case TOGGLE_PROP_SELECTOR:
      return {
        ...state,
        isPropSelectorOpen: action.payload
      };

    default:
      return state;
  }
};

export default testBuilderReducer;
