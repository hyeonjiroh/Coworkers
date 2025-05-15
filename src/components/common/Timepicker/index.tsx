import clsx from 'clsx';
import { useState } from 'react';

interface TimePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function TimePicker({
  selectedDate,
  setSelectedDate,
}: TimePickerProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>(
    selectedDate.getHours() < 12 ? 'AM' : 'PM'
  );
  const [selectedHour, setSelectedHour] = useState(
    selectedDate.getHours() % 12 || 12
  );
  const [selectedMinute, setMinute] = useState(selectedDate.getMinutes());

  const convertTo24Hour = (period: 'AM' | 'PM', hour: number) => {
    return period === 'PM' ? (hour % 12) + 12 : hour % 12;
  };

  const handleUpdateTime = (
    newPeriod = selectedPeriod,
    newHour = selectedHour,
    newMinute = selectedMinute
  ) => {
    const newDate = new Date(selectedDate);
    newDate.setHours(convertTo24Hour(newPeriod, newHour));
    newDate.setMinutes(newMinute);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    setSelectedDate(newDate);
  };

  return (
    <div className="w-full rounded-xl border border-green-800 p-4">
      <div className="text-md-medium flex w-full gap-4">
        {/* period */}
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
          {['AM', 'PM'].map((period) => (
            <button
              key={period}
              className={clsx(
                `h-10 w-full rounded-xl transition-colors duration-100`,
                selectedPeriod === period
                  ? 'bg-green-700 hover:bg-green-600'
                  : 'bg-[#18212F] text-slate-500 hover:bg-slate-900/50'
              )}
              onClick={() => {
                setSelectedPeriod(period as 'AM' | 'PM');
                handleUpdateTime(
                  period as 'AM' | 'PM',
                  selectedHour,
                  selectedMinute
                );
              }}
            >
              {period === 'AM' ? '오전' : '오후'}
            </button>
          ))}
        </div>

        {/* hour */}
        <div className="flex h-36 flex-1 flex-col overflow-y-auto rounded-xl bg-[#18212F] p-2 transition-colors duration-100">
          {[...Array(12)].map((_, i) => {
            const hour = i + 1;
            return (
              <button
                key={hour}
                className={clsx(
                  `rounded-xl py-2 text-center hover:bg-slate-800`,
                  selectedHour === hour && 'text-green-700'
                )}
                onClick={() => {
                  setSelectedHour(hour);
                  handleUpdateTime(selectedPeriod, hour, selectedMinute);
                }}
              >
                {hour}
              </button>
            );
          })}
        </div>

        {/* minute */}
        <div className="flex h-36 flex-1 flex-col overflow-y-auto rounded-xl bg-[#18212F] p-2 transition-colors duration-100">
          {[...Array(60)].map((_, minute) => (
            <button
              key={minute}
              className={clsx(
                `rounded-xl py-2 text-center hover:bg-slate-800`,
                selectedMinute === minute && 'text-green-700'
              )}
              onClick={() => {
                setMinute(minute);
                handleUpdateTime(selectedPeriod, selectedHour, minute);
              }}
            >
              {minute.toString().padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
