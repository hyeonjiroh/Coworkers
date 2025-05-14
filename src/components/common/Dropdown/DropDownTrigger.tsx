'use client';
import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface DropDownTriggerProps {
  children?: ReactNode;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isOpen?: boolean;
  showIcon?: boolean;
  className?: string;
}

const DropDownTrigger = ({
  children,
  placeholder,
  onClick,
  isOpen = false,
  showIcon = false,
  className,
}: DropDownTriggerProps) => {
  const triggerStyles = twMerge(
    clsx(
      'flex items-center justify-between rounded-xl text-slate-50 whitespace-nowrap mb-1.5',
      {
        'text-xs-regular tablet:text-md-regular ': showIcon,
        'text-md-regular ': !showIcon,
      },
      className
    )
  );

  return (
    <button
      className={triggerStyles}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    >
      <span>{children ?? (showIcon ? placeholder : null)}</span>
      {showIcon && (
        <IconRenderer
          name="ToggleIcon"
          className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      )}
    </button>
  );
};

export default DropDownTrigger;
