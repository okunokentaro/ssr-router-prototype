import * as React from 'react';

import { Action } from './Action';
import { Reducer } from './combineReducerContexts';
import { Dispatch } from './Dispatch';

export type UseReducerReturnType<T> = [T, Dispatch];
type UseReducerSignature = <T, A extends Action>(
  reducer: Reducer<T, A>,
  initialState: T,
) => UseReducerReturnType<T>;
export default (React as any).useReducer as UseReducerSignature;
