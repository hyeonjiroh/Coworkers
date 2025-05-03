'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DropDownItemProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const DropDownItem = ({ children, onClick, className }: DropDownItemProps) => {
  const itemStyles = twMerge(
    clsx(
      'text-md-regular box-border w-full rounded-xl bg-slate-800 px-2 py-3 text-center text-slate-50 hover:bg-slate-700 active:scale-95 active:bg-slate-900',
      className
    )
  );

  return (
    <button className={itemStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default DropDownItem;
