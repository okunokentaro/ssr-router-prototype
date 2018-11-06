import { Action } from '../../lib/react/Action';

export const init = 'todo/init';
export const add = 'todo/add';
export const remove = 'todo/remove';

export interface InitAction extends Action {
  type: typeof init;
  payload: { todos: any };
}

export interface AddAction extends Action {
  type: typeof add;
  payload: { title: string };
}

export interface RemoveAction extends Action {
  type: typeof remove;
  payload: { id: number };
}

export type TodoAction = InitAction | AddAction | RemoveAction;
