import { Reducer } from '../../lib/react/combineReducerContexts';
import { add, AddAction, remove, RemoveAction, TodoAction } from './actions';
import { Todo } from './Todo';

export interface TodosState {
  todos: Todo[];
  nextSequentialNumber: number;
}

export const initialState = { todos: [], nextSequentialNumber: 1 } as TodosState;

const addReducer = (state: TodosState, action: AddAction): TodosState => {
  const todos = state.todos.concat([
    {
      id: state.nextSequentialNumber,
      status: 'active',
      title: action.payload.title,
      created: new Date().valueOf(),
      modified: new Date().valueOf(),
    } as Todo,
  ]);

  return Object.assign({}, state, {
    todos,
    nextSequentialNumber: state.nextSequentialNumber + 1,
  });
};

const removeReducer = (state: TodosState, action: RemoveAction): TodosState => {
  const targetId = action.payload.id;

  const target = state.todos.find(v => v.id === targetId);
  if (!target) {
    throw new Error('該当のtodoが見つかりませんでした');
  }
  target.status = 'removed';

  const todos = state.todos.filter(v => v.id !== targetId).concat([target]);
  return Object.assign({}, state, { todos });
};

const todoReducer = ((state, action) => {
  switch (action.type) {
    case add:
      return addReducer(state, action);
    case remove:
      return removeReducer(state, action);
    default:
      return state;
  }
}) as Reducer<TodosState, TodoAction>;

export default todoReducer;
