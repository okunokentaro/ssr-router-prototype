import * as React from 'react';

const initialState = { todos: [] };
const initialSettingsState = { settings: [] };

export const TodosContext = React.createContext({ state: initialState, dispatch: undefined } as {
  state: any;
  dispatch: any;
});
export const SettingsContext = React.createContext({
  state: initialSettingsState,
  dispatch: undefined,
} as {
  state: any;
  dispatch: any;
});

const todosReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'add':
      console.log('todosReducer add');
      const newState = Object.assign(state, { todos: state.todos.concat([action.payload.text]) });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

const settingsReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'add':
      console.log('settingsReducer add');
      const newState = Object.assign(state, {
        settings: state.settings.concat([action.payload.text]),
      });
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export function AppProvider({ children }: any) {
  const [todosState, todosDispatch] = (React as any).useReducer(todosReducer, initialState);
  const [settingsState, settingsDispatch] = (React as any).useReducer(
    settingsReducer,
    initialSettingsState,
  );

  const dispatch = (v: any) => {
    todosDispatch(v);
    settingsDispatch(v);
  }

  return (
    <TodosContext.Provider value={{ state: todosState, dispatch }}>
      <SettingsContext.Provider value={{ state: settingsState, dispatch }}>
        {children}
      </SettingsContext.Provider>
    </TodosContext.Provider>
  );
}
