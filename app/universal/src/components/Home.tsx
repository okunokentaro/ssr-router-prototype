import * as React from 'react';

interface History {
  push(path: string): void;
}

const defaultHistory = {
  push: () => {
    /*noop*/
  },
} as History;

export const RouterContext = React.createContext(defaultHistory);

export function Home() {
  const history_ =
    typeof window !== 'undefined'
      ? ((React as any).useContext(RouterContext) as History)
      : defaultHistory;

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

export function ScreenA() {
  const history_ =
    typeof window !== 'undefined'
      ? ((React as any).useContext(RouterContext) as History)
      : defaultHistory;

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

export function ScreenB() {
  const history_ =
    typeof window !== 'undefined'
      ? ((React as any).useContext(RouterContext) as History)
      : defaultHistory;

  const onClickHome = () => {
    history_.push('/');
  };

  return (
    <>
      <h1>B</h1>
      <div>
        <button onClick={onClickHome}>home</button>
      </div>
    </>
  );
}
