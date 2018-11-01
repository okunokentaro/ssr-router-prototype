import * as React from 'react'
import { ScreenB } from './components/Home'
import { Home, ScreenA } from './components/Home'

export const routes = [
  {
    path: '',
    action: () => <Home/>,
  },
  {
    path: '/a',
    action: () => <ScreenA/>,
  },
  {
    path: '/b',
    action: () => <ScreenB/>,
  },
]
