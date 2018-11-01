import * as React from 'react'
import * as ReactDOM from 'react-dom'
import UniversalRouter from 'universal-router'
import { createBrowserHistory } from 'history'
import { routes } from '../../universal/src/routes'
import { RouterContext } from '../../universal/src/components/Home'

const router = new UniversalRouter(routes);
const history = createBrowserHistory();

const cb = (renderer: JSX.Element) => {
  ReactDOM.render(
    <RouterContext.Provider value={history}>{renderer}</RouterContext.Provider>,
    document.getElementById('app'),
  );
};

history.listen(path => router.resolve(path).then(cb));
router.resolve(location.pathname).then(cb);
