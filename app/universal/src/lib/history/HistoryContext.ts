import * as React from 'react';

import { noop } from '../function/noop';

interface History {
  push(path: string): void;
}

const defaultHistory = {
  push: noop,
} as History;

export default React.createContext(defaultHistory);
