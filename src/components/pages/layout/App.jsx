'use client';

import { Provider } from "react-redux";
import store from "@/redux/store";

import QueryProvider from "@/components/pages/layout/QueryProvider";

import ContextProvider from "@/context-API/ContextProvider";

import useHideWarnings from "@/utils/hooks/general/useHideWarnings";


export default function App({ children }) {
  
  useHideWarnings({ keywords: ["fill", "sizes", "priority"] });

  return (
    <>
      <Provider store={store}>
        <QueryProvider>
          <ContextProvider>
            {children}
          </ContextProvider>
        </QueryProvider>
      </Provider>
    </>
  );
}
