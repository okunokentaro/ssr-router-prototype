import React from 'react';

interface Props {
  children: JSX.Element;
  initialData: string;
}

export default function Html(props: Props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>App</title>
        <base href="/" />
      </head>
      <body>
        <div id="app">{props.children}</div>
        <script src="./app.bundle.js" />
        <script id="initial-data" type="text/plain" data-json={props.initialData} />
      </body>
    </html>
  );
}
