import { DependencyList, EffectCallback, MutableRefObject } from "react";

interface ScrollProps {
  prevPos: {
    x: number;
    y: number;
  },
  currPos: {
    x: number;
    y: number;
  }
}

export declare function useScrollPosition(
  element: MutableRefObject<HTMLElement>,
  effect: (props: ScrollProps) => void,
  deps?: DependencyList,
  wait?: number
): void;
