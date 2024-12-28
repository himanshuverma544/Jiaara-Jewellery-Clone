import { useEffect, useMemo } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { compress, decompress } from "lz-string";


export default function QueryProvider({ children }) {

  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24
      }
    }
  }), []);


  useEffect(() => {
    
    if (typeof window !== "undefined") {

      const localStoragePersister = createSyncStoragePersister({
        storage: window.localStorage,
        serialize: data => compress(JSON.stringify(data)),
        deserialize: data => JSON.parse(decompress(data))
      });

      persistQueryClient({
        queryClient,
        persister: localStoragePersister,
        maxAge: 1000 * 60 * 60 * 24
      });
    }
  }, [queryClient]);


  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}