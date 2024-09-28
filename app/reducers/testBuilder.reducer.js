import { layoutData } from "../components/page-builder/content-components/DefaultCanvasViewer";
import {
  SELECT_LAYOUT,
  SET_ACTIVE_BOX,
  SET_SELECTED_COMPONENT_PATH,
  ADD_COMPONENT
} from "../types/test.types";

/**
 * Initial state for the test builder reducer
 * @type {Object}
 */
const initialState = {
  activeBox            : null,
  componentsInBoxes    : [],
  selectedComponentPath: null,
  selectedLayout       : "RightDrawerLayout",
};

/**
 * Handles the SELECT_LAYOUT action
 * @param {Object} state - Current state
 * @param {string} newLayout - New layout to be selected
 * @returns {Object} Updated state
 */
const handleSelectLayout = (state, newLayout) => {
  const boxIds = layoutData[newLayout];

  // Create componentsInBoxes with each box having an id and an empty components array
  const componentsInBoxes = boxIds.map((id) => ({
    // Set the id based on layoutData values
    children: [],             
    id // Initialize an empty components array for each box
  }));

  return {
    ...state,
    componentsInBoxes, // This now contains an array of box objects
    selectedLayout: newLayout, // Update the selected layout
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

  // Validate boxIndex and ensure it exists
  if (!newComponentsInBoxes[boxIndex]) {
    newComponentsInBoxes[boxIndex] = { children: [] }; // Initialize if undefined
  }

  if (path === null) {
    // Add the component at the root level of the box
    newComponentsInBoxes[boxIndex].children.push({
      ComponentName: component,
      children     : [],
    });
  } else {
    // Traverse the path to find the correct place to insert the component
    let currentLevel = newComponentsInBoxes[boxIndex];

    for (let i = 0; i < path.length; i++) {
      const currentIndex = path[i];

      // Check if the current level exists at this path, if not initialize it
      if (!currentLevel.children) {
        currentLevel.children = []; // Initialize children array if not present
      }

      // Move to the next level in the component hierarchy
      if (!currentLevel.children[currentIndex]) {
        currentLevel.children[currentIndex] = { children: [] }; // Ensure child exists
      }

      currentLevel = currentLevel.children[currentIndex]; // Move down the tree
    }

    // Now add the new component at the final level
    if (!currentLevel.children) {
      currentLevel.children = [];
    }

    currentLevel.children.push({
      ComponentName: component,
      children     : [],
    });
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

    default:
      return state;
  }
};

export default testBuilderReducer;
