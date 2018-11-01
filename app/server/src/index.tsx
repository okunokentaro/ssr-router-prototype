import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Html from './Html';
import { Home, ScreenA, ScreenB } from '../../universal/src/components/Home';

const main = async () => {
  const app = express();
  app.use(express.static('./public'));

  app.get('/', (req: any, res: any) => {
    ReactDOMServer.renderToNodeStream(
      <Html>
        <Home />
      </Html>,
    ).pipe(res);
  });

  app.get('/a', (req: any, res: any) => {
    ReactDOMServer.renderToNodeStream(
      <Html>
        <ScreenA />
      </Html>,
    ).pipe(res);
  });

  app.get('/b', (req: any, res: any) => {
    ReactDOMServer.renderToNodeStream(
      <Html>
        <ScreenB />
      </Html>,
    ).pipe(res);
  });

  app.listen(3000);
};

main();
