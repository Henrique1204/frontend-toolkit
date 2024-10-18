import { FC, PropsWithChildren } from 'react';

declare global {
  export type DefaultProps = {
    testId?: string;
    className?: string;
  };

  export type Component<T = {}> = FC<PropsWithChildren<DefaultProps & T>>;

  export type ClassNamesElements<T extends string[]> = {
    classNames?: {
      [K in T[number]]?: string;
    };
  };

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
