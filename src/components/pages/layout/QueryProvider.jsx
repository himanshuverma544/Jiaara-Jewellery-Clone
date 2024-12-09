'use client';

import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export default function QueryProvider({ children }) {

  const params = {
    defaultOptions: {
      queries: {
        staleTime: Infinity
      }
    }
  };

  const [queryClient] = useState(() => new QueryClient(params));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}