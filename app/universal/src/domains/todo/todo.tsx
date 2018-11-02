import * as React from 'react';
import { ContextValue, noop, Reducer } from '../../lib/react/combineReducerContexts';

type Status = 'active' | 'done' | 'archived' | 'removed';

export interface Todo {
  id: number;
  status: Status;
  title: string;
  created: number;
  modified: number;
}

interface TodosState {
  todos: string[];
}

const initialTodosState = { todos: [] } as TodosState;

export const TodosContext = React.createContext({
  state: initialTodosState,
  dispatch: noop,
} as ContextValue<TodosState>);

export const todosReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, { todos: state.todos.concat([action.payload.text]) });
    default:
      return state;
  }
}) as Reducer<TodosState>;
