import DatePicker from 'react-datepicker';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function CustomDatePicker({
  selectedDate,
  setSelectedDate,
}: CustomDatePickerProps) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => date && setSelectedDate(date)}
      locale={ko}
      inline
      dayClassName={(date) =>
        date.toDateString() === selectedDate.toDateString()
          ? 'text-md-semibold! bg-green-700! text-slate-800! hover:text-slate-50! focus:bg-green-700!'
          : 'bg-slate-800!'
      }
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
    />
  );
}
