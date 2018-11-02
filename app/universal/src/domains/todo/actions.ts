import { Action } from '../../lib/react/Action';

export const add = 'todo/add';
export const remove = 'todo/remove';

export interface AddAction extends Action {
  type: typeof add;
  payload: { title: string };
}

export interface RemoveAction extends Action {
  type: typeof remove;
  payload: { id: number };
}

export type TodoAction = AddAction | RemoveAction;
