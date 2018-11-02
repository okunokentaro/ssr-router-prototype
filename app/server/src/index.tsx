import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import UniversalRouter from 'universal-router';

import { routes } from '../../universal/src/lib/route/routes';
import Html from './components/Html';

const router = new UniversalRouter(routes);

const main = async () => {
  const app = express();
  app.use(express.static('./public'));

  app.get('*', async (req, res) => {
    let result = { element: <></> };

    try {
      result = await router.resolve(req.path);
    } catch (e) {
      console.error(e);
      res.sendStatus(404);
    }

    ReactDOMServer.renderToNodeStream(<Html>{result.element}</Html>).pipe(res);
  });

  app.listen(3000);
};

main();
