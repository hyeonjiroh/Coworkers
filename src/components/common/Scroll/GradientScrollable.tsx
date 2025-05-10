'use client';
import clsx from 'clsx';
import { useState } from 'react';

interface GradientScrollableProps {
  children: React.ReactNode;
  className?: string;
}

const overflowTextGradientStyle = clsx(
  'tablet:hidden block',
  'pointer-events-none',
  'absolute right-0 top-0',
  'h-full w-6 bg-gradient-to-l from-[#272e3f] to-transparent'
);

const GradientScrollable = ({
  children,
  className,
}: GradientScrollableProps) => {
  const [isScrollMove, setIsScrollMove] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.currentTarget;
    setIsScrollMove(scrollLeft >= 10);
  };

  return (
    <div className="relative">
      <div
        onScroll={handleScroll}
        className={clsx(
          'scrollbar-hide overflow-x-auto whitespace-nowrap',
          className
        )}
      >
        {children}
      </div>
      <div
        className={clsx(overflowTextGradientStyle, isScrollMove && 'opacity-0')}
      />
    </div>
  );
};

export default GradientScrollable;
