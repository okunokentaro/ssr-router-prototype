import { Action } from '../../lib/react/Action';
import { Reducer } from '../../lib/react/combineReducerContexts';

export interface SettingsState {
  settings: string[];
}

export const initialState = { settings: [] } as SettingsState;

const settingsReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, {
        settings: state.settings.concat([(action.payload as any).text]),
      });
    default:
      return state;
  }
}) as Reducer<SettingsState, Action>;

export default settingsReducer;
