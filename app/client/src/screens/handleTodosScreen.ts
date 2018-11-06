import todosPath from '../../../universal/src/screens/todos/path';

export default function handleTodosScreen(useSsr: boolean) {
  return {
    path: todosPath,
    action: () => {
      if (!useSsr) {
        console.log('client SPA handleTodosScreen');
        return Promise.resolve((): string => '{}');
      }

      return new Promise<() => string>(resolve => {
        requestAnimationFrame(() => {
          const initialDataEl = document.getElementById('initial-data');
          if (!initialDataEl) {
            throw new Error('Element not found.');
          }
          console.log('client SSR handleTodosScreen');

          const initialData = initialDataEl.dataset['json'] || '{}';
          resolve(() => initialData);
        });
      });
    },
  };
}
