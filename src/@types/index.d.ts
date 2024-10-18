import { FC, PropsWithChildren } from 'react';

declare global {
  type DefaultProps = {
    testId?: string;
    className?: string;
  };

  type Component<T = {}> = FC<PropsWithChildren<DefaultProps & T>>;

  type ClassNamesElements<T extends string[] = []> = {
    classNames?: {
      [K in T[number]]?: string;
    };
  };

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
