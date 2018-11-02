import * as React from 'react';
import { Context, Route, Routes } from 'universal-router';

import AppProvider from '../../AppProvider';
import HomeScreen from '../../screens/home/HomeScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import TodosScreen from '../../screens/todos/TodosScreen';

export interface Result {
  element: JSX.Element;
}

const buildRoute = (path: string, el: JSX.Element): Route<Context, Result> => {
  return {
    path,
    action: () => ({
      element: <AppProvider>{el}</AppProvider>,
    }),
  };
};

export const routes = [
  buildRoute('', <HomeScreen />),
  buildRoute('/todos', <TodosScreen />),
  buildRoute('/settings', <SettingsScreen />),
] as Routes<Context, Result>;
