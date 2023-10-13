'use client';

import React from 'react';
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

function ReactQueryProviders({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
      queryCache: new QueryCache({
        onError: (error, query) => {
          if (query.meta) {
            console.log(query.meta.errorMessage);
          }
        },
      }),
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
export { ReactQueryProviders };
