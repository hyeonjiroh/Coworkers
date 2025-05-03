'use client';

import useGetViewport from '@//hooks/useGetViewport';

const BREAKPOINTS = {
  LAPTOP: 1024,
  TABLET: 744,
} as const;

export function useIsMobile() {
  const { width } = useGetViewport();
  return width > 0 && width < BREAKPOINTS.TABLET;
}

export function useIsTablet() {
  const { width } = useGetViewport();
  return width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.LAPTOP;
}

export function useIsLaptop() {
  const { width } = useGetViewport();
  return width >= BREAKPOINTS.LAPTOP;
}
