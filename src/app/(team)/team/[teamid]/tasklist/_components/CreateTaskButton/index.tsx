'use client';

import { useModalStore } from '@/store/useModalStore';
import { RecurringTaskBody } from '@/lib/apis/task/type';
import CreateTaskModal from '@/components/common/Modal/content/CreateTaskModal';
import { handleCreateTask } from '@/app/(team)/team/[teamid]/tasklist/_components/CreateTaskButton/actions/createTaskAction';
import Button from '@/components/common/Button';

interface CreateTaskButtonProps {
  groupId: number;
  taskListId: number;
}

export default function CreateTaskButton({
  groupId,
  taskListId,
}: CreateTaskButtonProps) {
  const { openModal } = useModalStore();

  const openCreateTaskModal = () => {
    openModal(
      {
        variant: 'taskForm',
        title: '할 일 만들기',
        description:
          '할 일은 실제로 행동 가능한 작업 중심으로\n작성해주시면 좋습니다.',
        button: {
          number: 1,
          text: '만들기',
          onRequest: (body) =>
            handleCreateTask(groupId, taskListId, body as RecurringTaskBody),
        },
      },
      <CreateTaskModal />
    );
  };

  return (
    <Button
      variant="floating"
      styleType="default"
      radius="lg"
      size="lg"
      className="fixed right-6 bottom-6 min-w-[125px]"
      startIcon="plus"
      onClick={openCreateTaskModal}
    >
      할 일 추가
    </Button>
  );
}
