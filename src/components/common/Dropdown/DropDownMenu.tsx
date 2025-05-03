'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DropDownMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  position?: string;
  align?: 'center' | 'right';
  className?: string;
}

const DropDownMenu = ({
  children,
  isOpen = false,
  position = 'top-full',
  align = 'center',
  className,
}: DropDownMenuProps) => {
  if (!isOpen) return null;

  const menuStyles = twMerge(
    clsx(
      position,
      {
        'left-1/2 -translate-x-1/2': align === 'center',
        '-left-20': align === 'right',
      },
      'absolute z-10 box-border w-34 rounded-xl border border-slate-50/10 bg-slate-800 text-slate-50 inline-block',
      className
    )
  );

  return (
    <div className={menuStyles}>
      <div className="flex flex-col items-center">{children}</div>
    </div>
  );
};

export default DropDownMenu;
