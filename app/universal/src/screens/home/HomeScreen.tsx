import * as React from 'react';
import { History, HistoryContext } from '../../lib/history/history';

export function HomeScreen() {
  const history_ = (React as any).useContext(HistoryContext) as History;

  const onClickTodos = () => {
    history_.push('/todos');
  };

  const onClickSettings = () => {
    history_.push('/settings');
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <button onClick={onClickTodos}>Todos</button>
        <button onClick={onClickSettings}>Settings</button>
      </div>
    </>
  );
}
