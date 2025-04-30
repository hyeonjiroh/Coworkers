import InputBase from '@/components/common/Input/InputBase';

export default function CreateTaskModal() {
  return (
    <div>
      <InputBase
        id="task-title"
        title="할 일 제목"
        titleClassName="mb-[8px]"
        placeholder="할 일 제목을 입력해주세요."
      />
    </div>
  );
}
