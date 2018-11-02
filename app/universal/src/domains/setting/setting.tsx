import * as React from 'react';
import { noop, Reducer } from '../../lib/react/combineReducerContexts';

interface SettingsState {
  settings: string[];
}

const initialSettingsState = { settings: [] } as SettingsState;

export const SettingsContext = React.createContext({ state: initialSettingsState, dispatch: noop });

export const settingsReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, {
        settings: state.settings.concat([action.payload.text]),
      });
    default:
      return state;
  }
}) as Reducer<SettingsState>;
