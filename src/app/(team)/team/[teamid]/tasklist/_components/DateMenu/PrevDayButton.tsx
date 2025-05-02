import { useRouter, useSearchParams } from 'next/navigation';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function PrevDayButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get('id');
  const currentDate = searchParams.get('date');

  const prevDate = new Date(currentDate!);
  prevDate.setDate(prevDate.getDate() - 1);
  const newDateString = prevDate.toISOString().slice(0, 10);

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set('id', id!);
    params.set('date', newDateString);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex size-4 items-center justify-center rounded-full bg-slate-800 transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="ArrowIcon" size={12} />
    </button>
  );
}
