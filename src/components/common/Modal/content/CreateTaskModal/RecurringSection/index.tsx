import { useEffect } from 'react';
import FrequencyTypeSelector from '@/components/common/Modal/content/CreateTaskModal/RecurringSection/FrequencyTypeSelector';
import WeekDaysSelector from '@/components/common/Modal/content/CreateTaskModal/RecurringSection/WeekDaysSelector';
import MonthDaySelector from '@/components/common/Modal/content/CreateTaskModal/RecurringSection/MonthDaySelector';

interface RecurringSectionProps {
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
  setFrequencyType: (
    frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY'
  ) => void;
  setWeekDays: (weekDays: number[]) => void;
  setMonthDay: (monthDay: number | null) => void;
}

export default function RecurringSection({
  frequencyType,
  weekDays,
  monthDay,
  setFrequencyType,
  setWeekDays,
  setMonthDay,
}: RecurringSectionProps) {
  // 반복 설정 변경 시 선택했던 반복 요일, 반복 날짜 초기화
  useEffect(() => {
    if (frequencyType !== 'WEEKLY') setWeekDays([]);
    if (frequencyType !== 'MONTHLY') setMonthDay(null);
  }, [frequencyType]);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg-medium">반복 설정</div>
      <FrequencyTypeSelector
        frequencyType={frequencyType}
        setFrequencyType={setFrequencyType}
      />
      {frequencyType === 'WEEKLY' && (
        <WeekDaysSelector weekDays={weekDays} setWeekDays={setWeekDays} />
      )}
      {frequencyType === 'MONTHLY' && (
        <MonthDaySelector monthDay={monthDay} setMonthDay={setMonthDay} />
      )}
    </div>
  );
}
