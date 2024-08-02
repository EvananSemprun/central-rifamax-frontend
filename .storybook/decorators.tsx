import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../src/config/store/index';
import { BrowserRouter } from 'react-router-dom';
import { ModalsProvider } from '@mantine/modals';
import { ThemeProvider } from '../src/config/ThemeProvider';
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient();

export const withProviders = (Story) => (
  <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <ModalsProvider>
            <Notifications />
            <MantineProvider forceColorScheme='dark'>
              <Story />
            </MantineProvider>
          </ModalsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ReduxProvider>
);
