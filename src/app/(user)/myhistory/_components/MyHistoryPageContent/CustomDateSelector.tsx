import { useRef, useState } from 'react';
import { formatDateToDots } from '@/utils/formatDate';
import { useClosePopup } from '@/hooks/useClosePopup';
import CustomDatePicker from '@/components/common/Datepicker';
import clsx from 'clsx';

interface StartDateTimeSectionProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

export default function CustomDateSelector({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: StartDateTimeSectionProps) {
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useClosePopup(selectorRef, () => {
    setIsStartDatePickerOpen(false);
    setIsEndDatePickerOpen(false);
  });

  const formattedStartDate = startDate
    ? formatDateToDots(startDate.toISOString())
    : '시작일';
  const formattedEndDate = endDate
    ? formatDateToDots(endDate.toISOString())
    : '종료일';

  return (
    <div ref={selectorRef} className="relative z-5 w-[320px]">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            setIsEndDatePickerOpen(false);
            setIsStartDatePickerOpen((prev) => !prev);
          }}
          className={clsx(
            'text-md-medium flex min-h-[29px] w-[120px] basis-3/5 items-center rounded border px-3 py-1.5',
            isStartDatePickerOpen
              ? 'border-green-800'
              : 'border-slate-50/10 text-slate-500'
          )}
        >
          {formattedStartDate}
        </button>
        <span className="text-white">~</span>
        <button
          type="button"
          onClick={() => {
            setIsStartDatePickerOpen(false);
            setIsEndDatePickerOpen((prev) => !prev);
          }}
          className={clsx(
            'text-md-medium flex w-[120px] basis-3/5 items-center rounded border px-3 py-1.5',
            isEndDatePickerOpen
              ? 'border-green-800'
              : 'border-slate-50/10 text-slate-500'
          )}
        >
          {formattedEndDate}
        </button>
      </div>
      <div className="absolute top-10 w-[320px]">
        {isStartDatePickerOpen && (
          <CustomDatePicker
            type="start"
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
        {isEndDatePickerOpen && (
          <CustomDatePicker
            type="end"
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        )}
      </div>
    </div>
  );
}
