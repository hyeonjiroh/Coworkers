import InputBase from '@/components/common/Input/InputBase';

export default function EditTaskModal() {
  return (
    <div>
      <InputBase
        title="할 일 제목"
        titleClassName="mb-[8px]"
        id="task-title"
        placeholder="할 일 제목을 입력해주세요."
      />
    </div>
  );
}
