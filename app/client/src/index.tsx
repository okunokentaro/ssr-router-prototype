import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';

import HistoryContext from '../../universal/src/lib/history/HistoryContext';
import { Result, routes } from '../../universal/src/lib/route/routes';
import handleTodosScreen from './screens/handleTodosScreen';

const router = new UniversalRouter(routes([handleTodosScreen(false)]));
const history = createBrowserHistory();

const main = () => {
  const whenRouterResolved = ({ element }: Result) => {
    ReactDOM.hydrate(
      <HistoryContext.Provider value={history}>{element}</HistoryContext.Provider>,
      document.getElementById('app'),
    );
  };

  history.listen(path => router.resolve(path).then(whenRouterResolved));
  new UniversalRouter(routes([handleTodosScreen(true)])).resolve(location.pathname).then(whenRouterResolved);
};

main();
