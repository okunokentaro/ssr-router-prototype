import React from 'react';

export default function Html(props: any) {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">{props.children}</div>
        <script src="./app.bundle.js" />
      </body>
    </html>
  );
}
