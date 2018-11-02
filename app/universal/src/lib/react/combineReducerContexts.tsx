import * as React from 'react';

import { Action } from './Action';
import { Dispatch } from './Dispatch';
import useContext from './useContext';
import useReducer, { UseReducerReturnType } from './useReducer';

export interface ReducerContextValue<T> {
  state: T;
  dispatch: Dispatch;
}

export type Reducer<T, A extends Action = Action> = (state: T, action: A) => T;
type ReducerContext<T> = [React.Context<ReducerContextValue<T>>, Reducer<T, any>];
type ReducerContextMap<T> = { [K in keyof T]: ReducerContext<T[K]> };

export function combineReducerContexts<T>(contextsMap: ReducerContextMap<T>) {
  return function AppProvider({ children }: { children: React.ReactNode }) {
    const contexts = Object.values(contextsMap) as ReducerContext<T>[];
    const hooks = contexts.reduce(
      (acc, v, i) => {
        acc.contextValues[i] = useContext(v[0]);
        acc.stores[i] = useReducer(v[1], acc.contextValues[i].state);
        return acc;
      },
      {
        contextValues: [] as Array<ReducerContextValue<T>>,
        stores: [] as Array<UseReducerReturnType<T>>,
      },
    );

    const dispatch = (v => {
      hooks.stores.forEach(([, dispatch_]) => dispatch_(v));
    }) as Dispatch;

    return contexts.reduce((wrappedEl, v, i) => {
      const Context = v[0];
      return (
        <Context.Provider value={{ state: hooks.stores[i][0], dispatch }}>
          {wrappedEl}
        </Context.Provider>
      );
    }, <>{children}</>);
  };
}
