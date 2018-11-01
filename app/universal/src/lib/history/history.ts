import * as React from 'react'

export interface History {
  push(path: string): void;
}

const defaultHistory = {
  push: () => {
    /*noop*/
  },
} as History

export const HistoryContext = React.createContext(defaultHistory)
