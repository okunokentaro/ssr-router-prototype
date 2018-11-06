import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import UniversalRouter from 'universal-router';

import { routes } from '../../universal/src/lib/route/routes';
import Html from './components/Html';
import handleTodosScreen from './screens/handleTodosScreen';

const router = new UniversalRouter(routes([handleTodosScreen()]));

const main = async () => {
  const app = express();
  app.use(express.static('./public'));

  app.get('*', async (req, res) => {
    let result = { element: <></>, initialData: '' };

    try {
      result = await router.resolve(req.path);
    } catch (e) {
      console.error(e);
      res.sendStatus(404);
      return;
    }

    // renderToNodeStream() is to enable React hydration.
    ReactDOMServer.renderToNodeStream(
      <Html initialData={result.initialData}>{result.element}</Html>,
    ).pipe(res);
  });

  app.listen(3000);
};

main();
