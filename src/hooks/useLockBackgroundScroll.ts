import { useEffect } from 'react';

export const useLockBackgroundScroll = (shouldLock: boolean) => {
  useEffect(() => {
    if (shouldLock) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '';
    };
  }, [shouldLock]);
};
