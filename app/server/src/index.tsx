import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../../universal/src/components/App';
import Html from './Html';

const main = async() => {
  const app = express();
  app.use(express.static('./public'));

  app.get('/', (req: any, res: any) => {
    ReactDOMServer.renderToNodeStream(
      <Html>
        <App />
      </Html>,
    ).pipe(res);
  });

  app.listen(3000);
};

main();
