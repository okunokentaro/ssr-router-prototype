import * as React from 'react';
import { Context, Routes } from 'universal-router';

import AppProvider from '../../AppProvider';
import HomeScreen from '../../screens/home/HomeScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import TodosScreen from '../../screens/todos/TodosScreen';

export interface Result {
  element: JSX.Element;
}

export const routes = [
  {
    path: '',
    action: () => ({
      element: (
        <AppProvider>
          <HomeScreen />
        </AppProvider>
      ),
    }),
  },
  {
    path: '/todos',
    action: () => ({
      element: (
        <AppProvider>
          <TodosScreen />
        </AppProvider>
      ),
    }),
  },
  {
    path: '/settings',
    action: () => ({
      element: (
        <AppProvider>
          <SettingsScreen />
        </AppProvider>
      ),
    }),
  },
] as Routes<Context, Result>;
