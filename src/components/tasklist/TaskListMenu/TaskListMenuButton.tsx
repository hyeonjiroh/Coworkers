'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import clsx from 'clsx';

export default function TaskListMenuButton({ size }: { size: 'sm' | 'md' }) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-800',
        size === 'sm' ? 'size-4' : 'size-6'
      )}
    >
      {size === 'sm' && <IconRenderer name="ThreeDotsIcon" size={16} />}
      {size === 'md' && <IconRenderer name="GearIcon" size={18} />}
    </div>
  );
}
