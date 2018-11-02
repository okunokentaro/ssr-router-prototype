import * as React from 'react';
import { History, HistoryContext } from '../../lib/history/history';

export function SettingsScreen() {
  const history_ = (React as any).useContext(HistoryContext) as History;

  const onClickHome = () => {
    history_.push('/');
  };

  return (
    <>
      <h1>Settings</h1>
      <div>
        <button onClick={onClickHome}>home</button>
      </div>
    </>
  );
}
