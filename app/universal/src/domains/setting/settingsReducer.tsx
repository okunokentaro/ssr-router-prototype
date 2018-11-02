import { Reducer } from '../../lib/react/combineReducerContexts';

export interface SettingsState {
  settings: string[];
}

const settingsReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, {
        settings: state.settings.concat([action.payload.text]),
      });
    default:
      return state;
  }
}) as Reducer<SettingsState>;

export default settingsReducer;
