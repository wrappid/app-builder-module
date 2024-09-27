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
  activeBox        : null,
  componentsInBoxes: [],
  coreComponents   : [
    {
      id  : "CoreBox",
      name: "CoreBox",
    },
    {
      id  : "CoreButton",
      name: "CoreButton" 
    },
    { 
      id  : "CoreTypographyBody1",
      name: "CoreTypographyBody1"
    },
  ],
  error                : false,
  message              : "This is a test module.",
  selectedComponentPath: null,
  selectedLayout       : "RightDrawerLayout",
  success              : false,
};

/**
 * Handles the SELECT_LAYOUT action
 * @param {Object} state - Current state
 * @param {string} newLayout - New layout to be selected
 * @returns {Object} Updated state
 */
const handleSelectLayout = (state, newLayout) => {
  const boxCount = layoutData[newLayout].length;

  return {
    ...state,
    componentsInBoxes: Array(boxCount).fill([]),
    selectedLayout   : newLayout,
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
  const newComponentsInBoxes = [...state.componentsInBoxes];

  if (!newComponentsInBoxes[boxIndex]) {
    newComponentsInBoxes[boxIndex] = [];
  }

  if (path === null) {
    newComponentsInBoxes[boxIndex].push({
      ComponentName: component,
      children     : [],
    });
  } else {
    let currentLevel = newComponentsInBoxes[boxIndex];

    for (let i = 0; i < path.length - 1; i++) {
      currentLevel = currentLevel[path[i]].children;
    }
    currentLevel[path[path.length - 1]].children.push({
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
