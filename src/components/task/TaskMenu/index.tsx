'use client';

import { useModalStore } from '@/store/useModalStore';
import EditTaskModal from '@/components/common/Modal/content/EditTaskModal';
import DropDown from '@/components/common/Dropdown';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';

export default function TaskMenu({ size }: { size: 'sm' | 'md' }) {
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
          onRequest: () => {},
        },
      },
      <EditTaskModal />
    );
  };
  // 추후에 할 일 삭제 API 연결 예정
  const handleDeleteTask = () => console.log('삭제하기');

  return (
    <DropDown>
      <DropDown.Trigger className="p-0">
        <TaskMenuButton size={size} />
      </DropDown.Trigger>
      <DropDown.Menu align="right">
        <DropDown.Item onClick={openEditTaskModal}>수정하기</DropDown.Item>
        <DropDown.Item onClick={handleDeleteTask}>삭제하기</DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
}
