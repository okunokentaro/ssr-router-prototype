import * as React from 'react';

import { noop } from '../../lib/function/noop';
import { ReducerContextValue } from '../../lib/react/combineReducerContexts';
import { TodosState } from './todoReducer';

const initialState = { todos: [] } as TodosState;

export default React.createContext({
  state: initialState,
  dispatch: noop,
} as ReducerContextValue<TodosState>);
