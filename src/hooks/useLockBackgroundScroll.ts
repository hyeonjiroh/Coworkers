import { useEffect } from 'react';

export const useLockBackgroundScroll = (shouldLock: boolean) => {
  useEffect(() => {
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [shouldLock]);
};
