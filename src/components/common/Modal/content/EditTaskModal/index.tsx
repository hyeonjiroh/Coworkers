import { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import InputTextarea from '@/components/common/Input/InputTextarea';
import { useEditTaskFormValidation } from '@/components/common/Modal/content/EditTaskModal/hooks/useEditTaskFormValidation';

export interface RecurringTaskFormState {
  name: string;
  description: string;
}

export default function EditTaskModal({
  name: initialName,
  description: initialDescription,
}: RecurringTaskFormState) {
  const [formData, setFormData] = useState<RecurringTaskFormState>({
    name: initialName,
    description: initialDescription,
  });

  useEditTaskFormValidation({
    current: formData,
    initial: {
      name: initialName,
      description: initialDescription,
    },
  });

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
