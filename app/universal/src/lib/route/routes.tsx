import * as React from 'react';

import { Home } from '../../components/Home';
import { ScreenB } from '../../components/ScreenB';
import { ScreenA } from '../../components/ScreenA'

export const routes = [
  {
    path: '',
    action: () => <Home />,
  },
  {
    path: '/a',
    action: () => <ScreenA />,
  },
  {
    path: '/b',
    action: () => <ScreenB />,
  },
];
