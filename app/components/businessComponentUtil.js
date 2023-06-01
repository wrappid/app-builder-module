import { getUUID } from "../utils/appUtils";

export const __BusinessEntityIncFunc = {
  ADD_MODEL                   : "ADD_MODEL",
  ADD_MODEL_ID                : "ADD_MODEL_ID",
  REMOVE_MODEL                : "REMOVE_MODEL",
  UPDATE_MODEL                : "UPDATE_MODEL",
  UPDATE_MODEL_AS             : "UPDATE_MODEL_AS",
  UPDATE_MODEL_ATTRIBUTES     : "UPDATE_MODEL_ATTRIBUTES",
  UPDATE_MODEL_REQUIRED_FLAG  : "UPDATE_MODEL_REQUIRED_FLAG",
  UPDATE_MODEL_RIGHT_JOIN_FLAG: "UPDATE_MODEL_RIGHT_JOIN_FLAG",
  UPDATE_MODEL_WHERE_CLAUSE   : "UPDATE_MODEL_WHERE_CLAUSE",
};

const userAction_HandleCase = (
  userAction,
  schema,
  currentModelID,
  newModelName,
  modelAs,
  required,
  right,
  attributes,
  whereVal
) => {
  switch (userAction) {
    case __BusinessEntityIncFunc.ADD_MODEL:
      if (schema?.include) {
        if (
          schema.include.filter((inc) => {
            return inc?.modelID === currentModelID;
          })?.length > 0
        ) {
          schema.include.forEach((inc) => {
            if (inc?.modelID === currentModelID) {
              inc.model = newModelName;
            }
          });
        } else {
          schema.include.push({ model: newModelName, required: true });
        }
      } else {
        schema.include = [{ model: newModelName, required: true }];
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL:
      if (schema?.include) {
        if (
          schema.include.filter((inc) => {
            return inc?.modelID === currentModelID;
          })?.length > 0
        ) {
          schema.include.forEach((inc) => {
            if (inc?.modelID === currentModelID) {
              inc.model = newModelName;
            }
          });
        } else {
          schema.include.push({ model: newModelName, required: true });
        }
      } else {
        schema.include = [{ model: newModelName, required: true }];
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL_AS:
      if (
        schema?.include &&
        schema.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include.forEach((inc) => {
          if (inc?.modelID === currentModelID) {
            if (modelAs) {
              inc.as = modelAs;
            } else {
              delete inc.as;
            }
          }
        });
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL_REQUIRED_FLAG:
      if (
        schema?.include &&
        schema.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include.forEach((inc) => {
          if (inc?.modelID === currentModelID) {
            inc.required = required;
          }
        });
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL_RIGHT_JOIN_FLAG:
      if (
        schema?.include &&
        schema.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include.forEach((inc) => {
          if (inc?.modelID === currentModelID) {
            if (right) {
              inc.right = right;
            } else {
              delete inc.right;
            }
          }
        });
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL_ATTRIBUTES:
      if (
        schema?.include &&
        schema.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include.forEach((inc) => {
          if (inc?.modelID === currentModelID) {
            inc.attributes = attributes;
          }
        });
      }
      break;

    case __BusinessEntityIncFunc.UPDATE_MODEL_WHERE_CLAUSE:
      if (
        schema?.include &&
        schema.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include.forEach((inc) => {
          if (inc?.modelID === currentModelID) {
            inc.where = whereVal;
          }
        });
      }
      break;

    case __BusinessEntityIncFunc.REMOVE_MODEL:
      if (
        schema?.include &&
        schema?.include.filter((inc) => {
          return inc?.modelID === currentModelID;
        })?.length > 0
      ) {
        schema.include = schema?.include.filter((inc) => {
          return inc?.modelID !== currentModelID;
        });
      }
      break;

    default:
      break;
  }
  return schema;
};

export const recurrsive_ModelFunc = (
  userAction,
  schema,
  parentModelID,
  currentModelID,
  newModelName = "",
  modelAs = "",
  required = false,
  right = false,
  attributes = [],
  whereVal = {}
) => {
  if (userAction === __BusinessEntityIncFunc.ADD_MODEL_ID) {
    if (!schema?.modelID) {
      schema.modelID = getUUID();
    }
    schema?.include?.forEach((incSchema) => {
      /**
       * @todo
       *
       * need a re-verification
       */
      // eslint-disable-next-line no-unused-vars
      incSchema = recurrsive_ModelFunc(userAction, incSchema);
    });
  } else {
    if (parentModelID && parentModelID === schema?.modelID) {
      // FOR ROOT LEVEL INCLUDE
      schema = userAction_HandleCase(
        userAction,
        schema,
        currentModelID,
        newModelName,
        modelAs,
        required,
        right,
        attributes,
        whereVal
      );
    } else {
      // FOR NESTED LEVEL INCLUDE
      schema?.include?.forEach((incSchema) => {
        if (incSchema?.modelID === parentModelID) {
          incSchema = userAction_HandleCase(
            userAction,
            incSchema,
            currentModelID,
            newModelName,
            modelAs,
            required,
            right,
            attributes,
            whereVal
          );
        } else {
          incSchema = recurrsive_ModelFunc(
            userAction,
            incSchema,
            parentModelID,
            currentModelID,
            newModelName,
            modelAs,
            required,
            right,
            attributes,
            whereVal
          );
        }
      });
    }
  }
  return schema;
};
