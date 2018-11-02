import { Todo } from '../../../universal/src/domains/todo/Todo';

export const todosMock = [
  {
    id: 1,
    status: 'active',
    title: '米を買う',
    created: 1540018160653,
    modified: 1540018160653,
  },
  {
    id: 2,
    status: 'active',
    title: '卵を買う',
    created: 1540018213034,
    modified: 1540018213034,
  },
  {
    id: 3,
    status: 'active',
    title: '長ねぎを買う',
    created: 1540018284521,
    modified: 1540018284521,
  },
] as Todo[];

export const nextSequentialNumberMock =
  todosMock.map(v => v).sort((a, b) => a.id - b.id)[todosMock.length - 1].id + 1;
