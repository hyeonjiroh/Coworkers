import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface GradientScrollableProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const overflowTextGradientStyle = clsx(
  'tablet:hidden block',
  'pointer-events-none',
  'absolute right-0 top-0',
  'h-full w-6'
);

const GradientScrollable = ({
  children,
  className,
  color = '#272e3f',
}: GradientScrollableProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isScrollMove, setIsScrollMove] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [children]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.currentTarget;
    setIsScrollMove(scrollLeft >= 10);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={clsx(
          'scrollbar-hide overflow-x-auto whitespace-nowrap',
          className
        )}
      >
        {children}
      </div>
      {isOverflowing && (
        <div
          className={clsx(
            overflowTextGradientStyle,
            isScrollMove && 'opacity-0'
          )}
          style={{
            background: `linear-gradient(to left, ${color}, transparent)`,
          }}
        />
      )}
    </div>
  );
};

export default GradientScrollable;
