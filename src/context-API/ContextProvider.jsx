'use client';

import { context as Context } from "./context";

import { useReducer } from "react";
import dataReducer from "./reducers/dataReducer";


const initialState = {
  states: null,
  nodes: null,
  objects: null,
  arrays: null,
  refVars: null,
  vars: null,
  triggered: false
};     


const ContextProvider = ({ children }) => {

  const [data, dispatch] = useReducer(dataReducer, initialState);

  return (
    <Context.Provider value={{ data, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;