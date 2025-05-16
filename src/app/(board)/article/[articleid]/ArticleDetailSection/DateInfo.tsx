import { formatDateToDots } from '@/utils/formatDate';

export default function DateInfo({ date }: { date: string }) {
  const formattedDate = formatDateToDots(date);

  return (
    <div className="flex items-center">
      <div className="text-xs-medium tablet:text-md-medium text-slate-400">
        {formattedDate}
      </div>
    </div>
  );
}
