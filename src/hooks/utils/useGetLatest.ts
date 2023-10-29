import { useCallback, useLayoutEffect, useRef } from 'react';

export function useGetLatest<T extends unknown[]>(fn: (...args: T) => void) {
  const ref = useRef<(...args: T) => void>(() => {});

  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args: T) => ref.current(...args), []);
}
