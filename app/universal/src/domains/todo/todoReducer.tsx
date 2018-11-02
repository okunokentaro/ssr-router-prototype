import { Reducer } from '../../lib/react/combineReducerContexts';

export interface TodosState {
  todos: string[];
}

const todoReducer = ((state, action) => {
  switch (action.type) {
    case 'add':
      return Object.assign(state, { todos: state.todos.concat([action.payload.text]) });
    default:
      return state;
  }
}) as Reducer<TodosState>;

export default todoReducer;
