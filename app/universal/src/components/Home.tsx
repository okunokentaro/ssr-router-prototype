import * as React from 'react';
import { History, HistoryContext } from '../lib/history/history';

export function Home() {
  const history_ = (React as any).useContext(HistoryContext) as History;

  const onClickA = () => {
    history_.push('/a');
  };

  const onClickB = () => {
    history_.push('/b');
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <button onClick={onClickA}>a</button>
        <button onClick={onClickB}>b</button>
      </div>
    </>
  );
}
