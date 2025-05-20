import DatePicker from 'react-datepicker';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  type?: 'start' | 'end';
  startDate: Date | null;
  endDate?: Date | null;
  setStartDate: (date: Date) => void;
  setEndDate?: (date: Date) => void;
  disablePastDate?: boolean;
}

export default function CustomDatePicker({
  type = 'start',
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  disablePastDate = false,
}: CustomDatePickerProps) {
  return (
    <DatePicker
      selected={type === 'start' ? startDate : endDate}
      onChange={(date) => {
        if (!date) return;
        if (type === 'start') {
          setStartDate(date);
        } else {
          const endOfDay = new Date(date);
          endOfDay.setHours(23, 59, 59, 999);
          setEndDate?.(endOfDay);
        }
      }}
      startDate={startDate ?? undefined}
      endDate={endDate ?? undefined}
      {...(type === 'start' && {
        selectsStart: true,
        maxDate: endDate ?? undefined,
      })}
      {...(type === 'end' && {
        selectsEnd: true,
        minDate: startDate ?? undefined,
      })}
      {...(disablePastDate && { minDate: new Date() })}
      dayClassName={(date) => {
        const targetDate = type === 'start' ? startDate : endDate;
        const isSelected =
          targetDate && date.toDateString() === targetDate.toDateString();

        return isSelected
          ? 'text-md-semibold! bg-green-700! text-slate-800! hover:text-slate-50! focus:bg-green-700!'
          : 'bg-slate-800!';
      }}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return (
          <div className="text-md-medium flex items-center justify-between bg-slate-800 px-1 py-1 text-white">
            <button onClick={decreaseMonth}>
              <IconRenderer name="CalendarArrowIcon" flip />
            </button>
            <span>{`${year}년 ${month}월 ${day}일`}</span>
            <button onClick={increaseMonth}>
              <IconRenderer name="CalendarArrowIcon" />
            </button>
          </div>
        );
      }}
      locale={ko}
      inline
    />
  );
}
