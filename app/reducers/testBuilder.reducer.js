import { layoutData } from "../components/page-builder/content-components/DefaultCanvasViewer";
import {
  SELECT_LAYOUT,
  SET_ACTIVE_BOX,
  SET_SELECTED_COMPONENT_PATH,
  ADD_COMPONENT,
  SET_PROPS_COMPONENT_PATH,
  TOGGLE_PROP_SELECTOR,
  UPDATE_COMPONENT_PROPS,
  UPDATE_COMPONENT_STYLE_CLASSES
} from "../types/test.types";

/**
 * Initial state for the test builder reducer
 * @type {Object}
 */
const initialState = {
  activeBox            : null,
  componentsInBoxes    : [], 
  isPropSelectorOpen   : false, // Boolean to track whether PropSelector is open
  propsComponentPath   : null, // Path to the component whose props are being edited
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
      if (!currentLevel.children) { // Ensure current level has children array
        currentLevel.children = [];
      } else if (!currentLevel.children[currentIndex]) { // Initialize child if it does not exist
        currentLevel.children[currentIndex] = { children: [] };
      } else{ // Move down the tree
        currentLevel = currentLevel.children[currentIndex];
      }
    });

    // Finally, add the new component at the last level
    currentLevel.children.push({
      component   : component,
      props       : {},
      styleClasses: {},
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      children    : []
    });
  };

  // Check if the path is null to add at the root level
  if (path === null) {
    newComponentsInBoxes[boxIndex].children.push({
      component   : component,
      props       : {},
      styleClasses: {},
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      children    : []
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

const updateComponentProps = (state, payload) => {
  const { componentPath, props } = payload;
  const newComponentsInBoxes = [...state.componentsInBoxes];

  let currentLevel = newComponentsInBoxes[componentPath.placeholderIndex];

  for (let i = 0; i < componentPath.componentPath.length; i++) {
    if (i === componentPath.componentPath.length - 1) {
      // We've reached the target component, update its props
      currentLevel.children[componentPath.componentPath[i]].props = {
        ...currentLevel.children[componentPath.componentPath[i]].props,
        ...props
      };
    } else {
      currentLevel = currentLevel.children[componentPath.componentPath[i]];
    }
  }

  return {
    ...state,
    componentsInBoxes: newComponentsInBoxes
  };
};

const updateComponentStyleClasses = (state, payload) => {
  const { componentPath, styleClasses } = payload;
  const newComponentsInBoxes = JSON.parse(JSON.stringify(state.componentsInBoxes));

  let currentLevel = newComponentsInBoxes[componentPath.placeholderIndex];

  for (let i = 0; i < componentPath.componentPath.length; i++) {
    if (i === componentPath.componentPath.length - 1) {
      // Update the styleClasses of the target component
      currentLevel.children[componentPath.componentPath[i]].styleClasses = Array.isArray(styleClasses) ? styleClasses : [];
    } else {
      currentLevel = currentLevel.children[componentPath.componentPath[i]];
    }
  }

  return {
    ...state,
    componentsInBoxes: newComponentsInBoxes,
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

    case UPDATE_COMPONENT_PROPS:
      return updateComponentProps(state, action.payload);

    case UPDATE_COMPONENT_STYLE_CLASSES:
      return updateComponentStyleClasses(state, action.payload);
      
    default:
      return state;
  }
};

export default testBuilderReducer;