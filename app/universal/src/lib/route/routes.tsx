import * as React from 'react';
import UniversalRouter, { Context, Params, Route, Routes } from 'universal-router';

import AppProvider from '../../AppProvider';
import HomeScreen from '../../screens/home/HomeScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import todosPath from '../../screens/todos/path';
import TodosScreen from '../../screens/todos/TodosScreen';
import useMediator from '../../screens/todos/useMediator';

type Injection = Route<Context, Promise<() => string>>[];

export interface Result {
  element: JSX.Element;
  initialData: string;
}

const buildRoute = (
  injection: Injection,
  path: string,
  cb: (params: Params) => JSX.Element,
): Route<Context, Result> => {
  return {
    path,
    action: async ctx => {
      const router = new UniversalRouter(injection);

      let initialData = () => '{}';
      try {
        initialData = await router.resolve(path);
      } catch (e) {
        if (!e.message.includes('Route not found')) {
          throw e;
        }
      }

      const parsed = JSON.parse(initialData());
      return {
        element: <AppProvider initialData={parsed}>{cb(ctx.params)}</AppProvider>,
        initialData: initialData(),
      };
    },
  };
};

export const routes = (injection: Injection) => {
  return [
    buildRoute(injection, '', () => <HomeScreen />),
    buildRoute(injection, todosPath, () => <TodosScreen useMediator={useMediator} />),
    buildRoute(injection, '/todos/:id', params => <div>todo {params.id}</div>),
    buildRoute(injection, '/settings', () => <SettingsScreen />),
  ] as Routes<Context, Result>;
};
