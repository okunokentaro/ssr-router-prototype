import * as React from 'react';

type UseStateSignature = <T>(v: T) => [T, (set: ((prev: T) => T) | T) => void];

export default (React as any).useState as UseStateSignature;
