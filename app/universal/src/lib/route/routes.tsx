import * as React from 'react';

import { HomeScreen } from '../../components/HomeScreen';
import { SettingsScreen } from '../../components/SettingsScreen';
import { TodosScreen } from '../../components/TodosScreen'

export const routes = [
  {
    path: '',
    action: () => <HomeScreen />,
  },
  {
    path: '/todos',
    action: () => <TodosScreen />,
  },
  {
    path: '/settings',
    action: () => <SettingsScreen />,
  },
];
