import { useState } from 'react';
import { formatDate, formatTime } from '@/utils/formatDate';
import CustomDatePicker from '@/components/common/Datepicker';
import TimePicker from '@/components/common/Timepicker';
import clsx from 'clsx';

interface StartDateTimeSectionProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default function StartDateTimeSection({
  date,
  setDate,
}: StartDateTimeSectionProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const formattedDate = formatDate(date.toISOString());
  const formattedTime = formatTime(date.toISOString());

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">시작 날짜 및 시간</div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setIsTimePickerOpen(false);
              setIsDatePickerOpen((prev) => !prev);
            }}
            className={clsx(
              'text-lg-regular flex basis-3/5 items-center rounded-[12px] border px-4 py-3.5',
              isDatePickerOpen
                ? 'border-green-800'
                : 'border-slate-50/10 text-slate-500'
            )}
          >
            {formattedDate}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsDatePickerOpen(false);
              setIsTimePickerOpen((prev) => !prev);
            }}
            className={clsx(
              'text-lg-regular flex basis-2/5 items-center rounded-[12px] border px-4 py-3.5',
              isTimePickerOpen
                ? 'border-green-800'
                : 'border-slate-50/10 text-slate-500'
            )}
          >
            {formattedTime}
          </button>
        </div>
        {isDatePickerOpen && (
          <CustomDatePicker selectedDate={date} setSelectedDate={setDate} />
        )}
        {isTimePickerOpen && (
          <TimePicker selectedDate={date} setSelectedDate={setDate} />
        )}
      </div>
    </div>
  );
}
