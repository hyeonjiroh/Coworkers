'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function TaskListMenuItem({
  id,
  name,
  selectedId,
}: {
  id: number;
  name: string;
  selectedId: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const date = searchParams.get('date');

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set('id', id.toString());
    params.set('date', date!);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        'pb-1 text-slate-500',
        id === selectedId && 'border-b text-white'
      )}
    >
      <div className="text-lg-medium">{name}</div>
    </button>
  );
}
