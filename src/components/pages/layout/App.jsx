'use client';

import useHideWarnings from "@/utils/hooks/general/useHideWarnings";
import QueryProvider from "@/components/pages/layout/QueryProvider";

import ContextProvider from "@/context-API/ContextProvider";


export default function App({ children }) {
  
  useHideWarnings({ keywords: ["fill", "sizes", "priority"] });

  return (
    <>
      <QueryProvider>
        <ContextProvider>
          {children}
        </ContextProvider>
      </QueryProvider>
    </>
  );
}
