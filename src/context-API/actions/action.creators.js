import { STORE_DATA, INVALID_TYPE_OF_DATA } from "./action.types";


const storeData = (data, typeOfData) => {

  let actionType = INVALID_TYPE_OF_DATA;

  const dataAllowed = ["states", "nodes", "objects", "arrays", "functions", "refs", "refVars", "vars"];

  if (typeof data === "object" && typeof typeOfData === "string") {
    for (let allowedData of dataAllowed) {
      if (allowedData === typeOfData) {
        actionType = STORE_DATA;
        break;
      }
    }
  }

  if ( actionType === INVALID_TYPE_OF_DATA ) {
    console.error("Invalid Type of Data");
  }

  return {
    type: actionType,
    payload: {
      typeOfData,
      data
    }
  };
};


export { 
  storeData
};