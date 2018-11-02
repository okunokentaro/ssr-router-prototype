import * as React from 'react';
import { combineReducerContexts } from '../react/combineReducerContexts';
import { TodosContext, todosReducer } from '../../domains/todo/todo';
import { SettingsContext, settingsReducer } from '../../domains/setting/setting';

export const AppProvider = combineReducerContexts({
  todos: [TodosContext, todosReducer],
  settings: [SettingsContext, settingsReducer],
});
