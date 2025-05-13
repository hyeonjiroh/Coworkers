import React, { useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import InputTextarea from '@/components/common/Input/InputTextarea';
import StartDateTimeSection from '@/components/common/Modal/content/CreateTaskModal/StartDateTimeSection';

export default function CreateTaskModal() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-6">
      <InputBase
        id="task-title"
        title="할 일 제목"
        titleClassName="mb-4 text-lg-medium"
        inputClassName="text-lg-regular py-1.5 placeholder-slate-500"
        placeholder="할 일 제목을 입력해주세요."
      />
      <StartDateTimeSection date={date} setDate={setDate} />
      <InputTextarea
        variant="box"
        id="task-description"
        title="할 일 설명"
        titleClassName="mb-4 text-lg-medium"
        inputClassName="text-lg-regular h-[75px] px-4 py-3 placeholder-slate-500"
        placeholder="할 일 설명을 입력해주세요."
      />
    </div>
  );
}
