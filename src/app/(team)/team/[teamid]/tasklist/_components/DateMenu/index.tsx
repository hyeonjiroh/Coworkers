'use client';

import { formatDateWithDay } from '@/utils/formatDate';
import PrevDayButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/PrevDayButton';
import NextDayButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/NextDayButton';
import CalendarButton from '@/app/(team)/team/[teamid]/tasklist/_components/DateMenu/CalendarButton';

export default function DateMenu({ date }: { date: string }) {
  const formattedDate = formatDateWithDay(date);

  return (
    <div className="flex items-center gap-3">
      <div className="text-lg-medium">{formattedDate}</div>
      <div className="flex gap-1">
        <PrevDayButton />
        <NextDayButton />
      </div>
      <CalendarButton />
    </div>
  );
}
