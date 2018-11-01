import * as React from 'react';
import { History, HistoryContext } from '../lib/history/history';

export function ScreenA() {
  const history_ = (React as any).useContext(HistoryContext) as History;

  const onClickHome = () => {
    history_.push('/');
  };

  return (
    <>
      <h1>A</h1>
      <div>
        <button onClick={onClickHome}>home</button>
      </div>
    </>
  );
}
