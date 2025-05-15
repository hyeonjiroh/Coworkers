import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import InputTextarea from '@/components/common/Input/InputTextarea';
import StartDateTimeSection from '@/components/task-modal/StartDateTimeSection';
import RecurringSection from '@/components/task-modal/RecurringSection';
import { useCreateTaskFormValidation } from '@/components/common/Modal/content/CreateTaskModal/hooks/useCreateTaskFormValidation';

export interface RecurringTaskFormState {
  name: string;
  description: string;
  startDate: Date;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
}

export default function CreateTaskModal() {
  const [formData, setFormData] = useState<RecurringTaskFormState>({
    name: '',
    description: '',
    startDate: new Date(),
    frequencyType: 'ONCE',
    weekDays: [],
    monthDay: null,
  });

  useCreateTaskFormValidation(formData);

  return (
    <div className="flex flex-col gap-6">
      <InputBase
        id="task-name"
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        title="할 일 제목"
        titleClassName="mb-4 text-lg-medium"
        inputClassName="text-lg-regular py-1.5 placeholder-slate-500"
        placeholder="할 일 제목을 입력해주세요."
      />
      <StartDateTimeSection
        date={formData.startDate}
        setDate={(date) =>
          setFormData((prev) => ({ ...prev, startDate: date }))
        }
      />
      <RecurringSection
        frequencyType={formData.frequencyType}
        weekDays={formData.weekDays}
        monthDay={formData.monthDay}
        setFrequencyType={(frequencyType) =>
          setFormData((prev) => ({ ...prev, frequencyType }))
        }
        setWeekDays={(weekDays) =>
          setFormData((prev) => ({ ...prev, weekDays }))
        }
        setMonthDay={(monthDay) =>
          setFormData((prev) => ({ ...prev, monthDay }))
        }
      />
      <InputTextarea
        variant="box"
        id="task-description"
        value={formData.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
        title="할 일 설명"
        titleClassName="mb-4 text-lg-medium"
        inputClassName="text-lg-regular h-[75px] px-4 py-3 placeholder-slate-500"
        placeholder="할 일 설명을 입력해주세요."
      />
    </div>
  );
}
