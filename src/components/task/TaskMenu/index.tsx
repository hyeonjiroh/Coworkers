'use client';

import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';
import { TaskBody } from '@/lib/apis/task/type';
import DropDown from '@/components/common/Dropdown';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import EditTaskModal from '@/components/common/Modal/content/EditTaskModal';
import {
  handleEditTask,
  handleDeleteTask,
} from '@/components/task/TaskMenu/actions/taskActions';
import { dropdownMenuStyle, dropdownItemStyle } from '@/app/styles/dropdown';

interface TaskMenuProps {
  taskId: number;
  taskName: string;
  taskDescription: string;
  size: 'sm' | 'md';
}

export default function TaskMenu({
  taskId,
  taskName,
  taskDescription,
  size,
}: TaskMenuProps) {
  const router = useRouter();
  const { openModal } = useModalStore();

  const openEditTaskModal = () => {
    openModal(
      {
        variant: 'taskForm',
        title: '할 일 수정하기',
        description:
          '할 일은 실제로 행동 가능한 작업 중심으로\n작성해주시면 좋습니다.',
        button: {
          number: 1,
          text: '수정하기',
          onRequest: (body) => handleEditTask(taskId, body as TaskBody),
        },
      },
      <EditTaskModal name={taskName} description={taskDescription} />
    );
  };

  const openDeleteTaskModal = () => {
    openModal({
      variant: 'danger',
      title: `'${taskName}'\n할 일을 정말 삭제하시겠어요?`,
      description: '삭제 후에는 되돌릴 수 없습니다.',
      button: {
        number: 2,
        text: '삭제하기',
        onRequest: () => {
          if (size === 'md') {
            router.back();
            setTimeout(() => {
              handleDeleteTask(taskId);
            }, 0);
          } else {
            handleDeleteTask(taskId);
          }
        },
      },
    });
  };

  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <TaskMenuButton size={size} />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className={`${dropdownMenuStyle}`}>
        <DropDown.Item
          onClick={openEditTaskModal}
          className={`${dropdownItemStyle}`}
        >
          수정하기
        </DropDown.Item>
        <DropDown.Item
          onClick={openDeleteTaskModal}
          className={`${dropdownItemStyle}`}
        >
          삭제하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
