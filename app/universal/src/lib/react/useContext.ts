import * as React from 'react';

type UseContextSignature = <T>(context: React.Context<T>) => T;

export default (React as any).useContext as UseContextSignature;
