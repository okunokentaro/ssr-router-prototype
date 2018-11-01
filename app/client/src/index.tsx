import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import { createBrowserHistory } from 'history';

import { routes } from '../../universal/src/lib/route/routes';
import { HistoryContext } from '../../universal/src/lib/history/history';

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
