type Status = 'active' | 'done' | 'archived' | 'removed';

export interface Todo {
  id: number;
  status: Status;
  title: string;
  created: number;
  modified: number;
}
