import * as React from 'react';

type Dispatch = (...args: any[]) => void;

interface ContextValue<T> {
  state: T;
  dispatch: Dispatch;
}

interface Action<T> {
  type: string;
  payload: T;
}

type UseContextSignature = <T>(context: React.Context<ContextValue<T>>) => ContextValue<T>;

type Reducer<T, A = any> = (state: T, action: Action<A>) => T;
type ReducerContext<T> = [React.Context<ContextValue<T>>, Reducer<T, any>];
type UseReducerReturnType<T> = [T, Dispatch];
type UseReducerSignature = <T>(reducer: Reducer<T>, initialState: T) => UseReducerReturnType<T>;

type ReducerContextMap<T> = { [K in keyof T]: ReducerContext<T[K]> };

interface TodosState {
  todos: string[];
}

interface SettingsState {
  settings: string[];
}

const useContext = (React as any).useContext as UseContextSignature;
const useReducer = (React as any).useReducer as UseReducerSignature;

const initialTodosState = { todos: [] } as TodosState;
const initialSettingsState = { settings: [] } as SettingsState;

const noop = (() => {
  /* noop */
}) as Dispatch;

export const TodosContext = React.createContext({
  state: initialTodosState,
  dispatch: noop,
} as ContextValue<TodosState>);

export const SettingsContext = React.createContext({ state: initialSettingsState, dispatch: noop });

const todosReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, { todos: state.todos.concat([action.payload.text]) });
    default:
      return state;
  }
}) as Reducer<TodosState>;

const settingsReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, {
        settings: state.settings.concat([action.payload.text]),
      });
    default:
      return state;
  }
}) as Reducer<SettingsState>;

function combineReducerContexts<T>(contextsMap: ReducerContextMap<T>) {
  return function AppProvider({ children }: { children: React.ReactNode }) {
    const contexts = Object.values(contextsMap) as ReducerContext<T>[];
    const hooks = contexts.reduce(
      (acc, v, i) => {
        acc.contextValues[i] = useContext(v[0]);
        acc.stores[i] = useReducer(v[1], acc.contextValues[i].state);
        return acc;
      },
      {
        contextValues: [] as Array<ContextValue<T>>,
        stores: [] as Array<UseReducerReturnType<T>>,
      },
    );

    const dispatch = (v => {
      hooks.stores.forEach(([, dispatch]) => {
        dispatch(v);
      });
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

export const AppProvider = combineReducerContexts({
  todos: [TodosContext, todosReducer],
  settings: [SettingsContext, settingsReducer],
});
