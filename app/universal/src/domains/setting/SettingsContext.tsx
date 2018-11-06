import * as React from 'react';

import noop  from '../../lib/function/noop';
import { ReducerContextValue } from '../../lib/react/combineReducerContexts';
import { initialState, SettingsState } from './settingsReducer';

export default React.createContext({
  state: initialState,
  dispatch: noop,
} as ReducerContextValue<SettingsState>);
