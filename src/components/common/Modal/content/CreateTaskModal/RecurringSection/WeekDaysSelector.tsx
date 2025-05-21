import clsx from 'clsx';

interface WeekdaysSelectorProps {
  weekDays: number[];
  setWeekDays: (weekDays: number[]) => void;
}

export default function WeekDaysSelector({
  weekDays,
  setWeekDays,
}: WeekdaysSelectorProps) {
  const WeekDayText = ['일', '월', '화', '수', '목', '금', '토'];

  const toggleWeekday = (day: number) => {
    if (weekDays.includes(day)) {
      setWeekDays(weekDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setWeekDays([...weekDays, day]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">반복 요일</div>
      <div className="grid grid-cols-7 gap-1">
        {WeekDayText.map((dayName, dayIndex) => (
          <button
            key={dayIndex}
            className={clsx(
              'text-md-medium h-12 rounded-xl transition-colors duration-100',
              weekDays.includes(dayIndex)
                ? 'bg-green-700 hover:bg-green-600'
                : 'bg-[#18212F] text-slate-500 hover:bg-slate-900'
            )}
            onClick={() => toggleWeekday(dayIndex)}
          >
            {dayName}
          </button>
        ))}
      </div>
    </div>
  );
}
