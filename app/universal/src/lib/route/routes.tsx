import * as React from 'react';

import { HomeScreen } from '../../screens/home/HomeScreen';
import { SettingsScreen } from '../../screens/settings/SettingsScreen';
import { TodosScreen } from '../../screens/todos/TodosScreen';
import { AppProvider } from '../components/AppProvider';

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
