'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import IconRenderer from '@/components/common/Icons/IconRenderer';

interface DropDownTriggerProps {
  children?: ReactNode;
  placeholder?: string;
  onClick?: () => void;
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
        'text-xs-regular px-4 py-2 tablet:text-md-regular tablet:px-5 tablet:py-3':
          showIcon,
        'text-md-regular px-6 py-3': !showIcon,
      },
      className
    )
  );

  return (
    <button className={triggerStyles} onClick={onClick}>
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
