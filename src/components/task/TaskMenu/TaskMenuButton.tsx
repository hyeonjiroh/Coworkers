import IconRenderer from '@/components/common/Icons/IconRenderer';
import clsx from 'clsx';

export default function TaskMenuButton({ size }: { size: 'sm' | 'md' }) {
  return (
    <div
      className={clsx(
        'flex size-4 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-700',
        size === 'sm' ? 'size-4' : 'size-6'
      )}
    >
      <IconRenderer name="ThreeDotsIcon" size={size === 'sm' ? 16 : 24} />
    </div>
  );
}
