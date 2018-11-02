import * as React from 'react';

import HistoryContext from '../../lib/history/HistoryContext';
import useContext from '../../lib/react/useContext';

export default function HomeScreen() {
  const history_ = useContext(HistoryContext);

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
