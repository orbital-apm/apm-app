'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';

import { persistor, store } from '@/utils/store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  </QueryClientProvider>
);

export default Provider;
