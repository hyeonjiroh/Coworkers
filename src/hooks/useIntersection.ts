'use client';

import { useEffect } from 'react';

interface UseIntersectionProps {
  target: React.RefObject<Element>;
  onIntersect: () => void;
}

export function useIntersection({ target, onIntersect }: UseIntersectionProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.5 }
    );

    const current = target.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, [target, onIntersect]);
}
