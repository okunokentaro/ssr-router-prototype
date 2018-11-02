import * as React from 'react';

import { noop } from '../../lib/function/noop';
import { ReducerContextValue } from '../../lib/react/combineReducerContexts';
import { SettingsState } from './settingsReducer';

const initialState = { settings: [] } as SettingsState;

export default React.createContext({
  state: initialState,
  dispatch: noop,
} as ReducerContextValue<SettingsState>);
