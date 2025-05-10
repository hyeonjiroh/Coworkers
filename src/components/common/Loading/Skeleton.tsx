import clsx from 'clsx';

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
}

const Skeleton = ({
  width = '100%',
  height = '1rem',
  rounded = 'rounded-md',
  className,
}: SkeletonProps) => {
  return (
    <div
      className={clsx(
        'animate-pulse bg-slate-600',
        width,
        height,
        rounded,
        className
      )}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
