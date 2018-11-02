import * as React from 'react';

import { Reducer } from './combineReducerContexts';
import { Dispatch } from './Dispatch';

export type UseReducerReturnType<T> = [T, Dispatch];
type UseReducerSignature = <T>(reducer: Reducer<T>, initialState: T) => UseReducerReturnType<T>;
export default (React as any).useReducer as UseReducerSignature;
