'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/utils/store';

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>{children}</ReduxProvider>
  </QueryClientProvider>
);

export default Provider;
