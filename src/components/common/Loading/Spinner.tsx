import clsx from 'clsx';

interface SpinnerProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const Spinner = ({
  size = 24,
  color = 'text-white',
  className,
}: SpinnerProps) => {
  const numericSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      className={clsx('animate-spin', color, className)}
      style={{ width: numericSize, height: numericSize }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
};

export default Spinner;
