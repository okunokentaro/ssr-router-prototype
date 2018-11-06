import { todosMock } from '../../../mock/domains/todo/todo';
import todosPath from '../../../universal/src/screens/todos/path';

export default function handleTodosScreen() {
  return {
    path: todosPath,
    action: () => {
      return Promise.resolve(() => JSON.stringify(todosMock));
    },
  };
}
