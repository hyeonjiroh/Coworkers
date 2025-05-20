import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useClosePopup } from '@/hooks/useClosePopup';
import { useIsMobile } from '@/hooks/useCheckViewport';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import CustomDatePicker from '@/components/common/Datepicker';

export default function CalendarButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  const id = searchParams.get('id');
  const currentDate = searchParams.get('date');

  const [selectedDate, setSelectedDate] = useState(new Date(currentDate!));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const datepickerRef = useRef<HTMLDivElement>(null);
  useClosePopup(datepickerRef, () => setIsDatePickerOpen(false));

  useEffect(() => {
    const newDateString = selectedDate.toISOString().slice(0, 10);
    const params = new URLSearchParams(searchParams);
    params.set('id', id!);
    params.set('date', newDateString);
    router.push(`?${params.toString()}`);
    setIsDatePickerOpen(false);
  }, [selectedDate]);

  return (
    <div className="relative">
      {!isMobile && (
        <button
          type="button"
          onClick={() => setIsDatePickerOpen((prev) => !prev)}
          className="flex size-6 items-center justify-center rounded-full bg-slate-800 transition-colors duration-100 hover:bg-slate-700"
        >
          <IconRenderer name="CalendarIcon" size={12} />
        </button>
      )}
      {isDatePickerOpen && (
        <div ref={datepickerRef} className="absolute top-7">
          <CustomDatePicker
            startDate={selectedDate}
            setStartDate={setSelectedDate}
          />
        </div>
      )}
    </div>
  );
}
