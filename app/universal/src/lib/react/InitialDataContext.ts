import * as React from 'react';

interface InisitalDataContextValue {
  initialData: Object;
}

export default React.createContext({
  initialData: {},
} as InisitalDataContextValue);
