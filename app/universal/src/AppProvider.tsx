import * as React from 'react';

import SettingsContext from './domains/setting/SettingsContext';
import settingsReducer from './domains/setting/settingsReducer';
import TodosContext from './domains/todo/TodoContext';
import todosReducer from './domains/todo/todoReducer';
import { combineReducerContexts } from './lib/react/combineReducerContexts';

export default combineReducerContexts({
  settings: [SettingsContext, settingsReducer],
  todos: [TodosContext, todosReducer],
});
