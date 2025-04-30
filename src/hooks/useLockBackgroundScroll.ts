import { useEffect } from 'react';

export const useLockBackgroundScroll = (shouldLock: boolean) => {
  useEffect(() => {
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [shouldLock]);
};
