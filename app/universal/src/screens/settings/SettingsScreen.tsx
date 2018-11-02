import * as React from 'react';

import HistoryContext from '../../lib/history/HistoryContext';
import useContext from '../../lib/react/useContext';

export default function SettingsScreen() {
  const history_ = useContext(HistoryContext);

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
