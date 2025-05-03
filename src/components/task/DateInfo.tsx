'use client';

import { formatDate, formatTime } from '@/utils/formatDate';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { useIsLaptop } from '@/hooks/useCheckViewport';

export default function DateInfo({
  date,
  withTime = false,
}: {
  date: string;
  withTime?: boolean;
}) {
  const isLaptop = useIsLaptop();

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return (
    <div className="flex items-center gap-1.5">
      <IconRenderer name="CalendarIcon" size={16} />
      <div className="text-xs-regular text-slate-500">{formattedDate}</div>
      {withTime && isLaptop && (
        <>
          <div className="h-2 w-px bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <IconRenderer name="TimeIcon" size={16} />
            <div className="text-xs-regular text-slate-500">
              {formattedTime}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
