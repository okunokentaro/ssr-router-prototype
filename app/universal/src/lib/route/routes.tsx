import * as React from 'react';

import { HomeScreen } from '../../components/HomeScreen';
import { SettingsScreen } from '../../components/SettingsScreen';
import { TodosScreen } from '../../components/TodosScreen';
import { AppProvider } from '../../components/AppProvider';

export const routes = [
  {
    path: '',
    action: () => (
      <AppProvider>
        <HomeScreen />
      </AppProvider>
    ),
  },
  {
    path: '/todos',
    action: () => (
      <AppProvider>
        <TodosScreen />
      </AppProvider>
    ),
  },
  {
    path: '/settings',
    action: () => (
      <AppProvider>
        <SettingsScreen />
      </AppProvider>
    ),
  },
];
