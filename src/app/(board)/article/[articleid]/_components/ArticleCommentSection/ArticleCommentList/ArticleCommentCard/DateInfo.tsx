import { formatElapsedTime } from '@/utils/formatElapsedTime';

export default function DateInfo({ date }: { date: string }) {
  const elapsedTime = formatElapsedTime(date);

  return <div className="text-md-regular text-slate-300">{elapsedTime}</div>;
}
