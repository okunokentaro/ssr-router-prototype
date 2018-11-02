import React from 'react';

export default function Html({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>App</title>
        <base href="/" />
      </head>
      <body>
        <div id="app">{children}</div>
        <script src="./app.bundle.js" />
      </body>
    </html>
  );
}
