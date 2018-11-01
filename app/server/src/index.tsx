import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import UniversalRouter from 'universal-router';

import Html from './components/Html';
import { routes } from '../../universal/src/lib/route/routes';

const router = new UniversalRouter(routes);

const main = async () => {
  const app = express();
  app.use(express.static('./public'));

  app.get('*', (req, res) => {
    router.resolve(req.path).then(element => {
      ReactDOMServer.renderToNodeStream(<Html>{element}</Html>).pipe(res);
    });
  });

  app.listen(3000);
};

main();
