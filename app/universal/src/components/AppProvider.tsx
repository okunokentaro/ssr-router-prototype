import * as React from 'react'

const initialState = {todos: []}

export const TodosContext = React.createContext({ state: initialState, dispatch: undefined } as {
  state: any;
  dispatch: any;
});

const todosReducer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'add':
      console.log('add')
      const newState = Object.assign(state, {todos: state.todos.concat([action.payload.text])})
      console.log(newState)
      return newState
    default:
      return state
  }
}

export function AppProvider({ children }: any) {
  const [todosState, todosDispatch] = (React as any).useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state: todosState, dispatch: todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
