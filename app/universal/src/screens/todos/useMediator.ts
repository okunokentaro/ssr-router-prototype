import * as React from 'react';
import { add, AddAction, init } from '../../domains/todo/actions';
import { Todo } from '../../domains/todo/Todo';
import TodosContext from '../../domains/todo/TodoContext';
import HistoryContext from '../../lib/history/HistoryContext';
import InitialDataContext from '../../lib/react/InitialDataContext';
import useContext from '../../lib/react/useContext';

export type TodosMediator = ReturnType<typeof useMediator>

const adapt = (initialData: any): Todo[] => {
  if (!Array.isArray(initialData)) {
    throw new Error('');
  }

  return initialData as Todo[];
};

/**
 * @returns inference
 */
export default function useMediator() {
  const { initialData } = useContext(InitialDataContext);
  const { state, dispatch } = useContext(TodosContext);
  const history_ = useContext(HistoryContext);

  console.log('mediator initialData', initialData);
  (React as any).useEffect(() => {
    console.log('useEffect');
    dispatch({ type: init, payload: initialData });
  }, []); // First time only

  const todos = state.isInitialized ? state.todos : adapt(initialData);

  return {
    todos,
    todoCount: todos.length,

    addTodo(title: string) {
      dispatch({ type: add, payload: { title } } as AddAction);
    },

    toHome() {
      history_.push('/');
    },

    toTodos1() {
      history_.push('/todos/1');
    },
  };
}
