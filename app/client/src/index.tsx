import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';

import HistoryContext from '../../universal/src/lib/history/HistoryContext';
import { routes } from '../../universal/src/lib/route/routes';

const router = new UniversalRouter(routes);
const history = createBrowserHistory();

const main = () => {
  const whenRouterResolved = (el: JSX.Element) => {
    ReactDOM.render(
      <HistoryContext.Provider value={history}>{el}</HistoryContext.Provider>,
      document.getElementById('app'),
    );
  };

  history.listen(path => router.resolve(path).then(whenRouterResolved));
  router.resolve(location.pathname).then(whenRouterResolved);
};

main();
