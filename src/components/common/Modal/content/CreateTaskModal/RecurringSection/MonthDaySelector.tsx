import clsx from 'clsx';

interface MonthDaySelectorProps {
  monthDay: number | null;
  setMonthDay: (monthDay: number | null) => void;
}

export default function MonthDaySelector({
  monthDay,
  setMonthDay,
}: MonthDaySelectorProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">반복 날짜</div>
      <div className="grid grid-cols-7 gap-2">
        {[...Array(31)].map((_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              className={clsx(
                'text-md-medium rounded-full p-3 transition-colors duration-100',
                monthDay === day
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-[#18212F] text-slate-500 hover:bg-slate-900'
              )}
              onClick={() => setMonthDay(day)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
