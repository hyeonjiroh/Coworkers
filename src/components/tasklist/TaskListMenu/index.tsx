'use client';

import { GroupMemberResponse } from '@/lib/apis/group/type';
import { useModalStore } from '@/store/useModalStore';
import DropDown from '@/components/common/Dropdown';
import TaskListMenuButton from '@/components/tasklist/TaskListMenu/TaskListMenuButton';
import CreateTaskListModal from '@/components/common/Modal/content/CreateTaskListModal';
import EditTaskListModal from '@/components/common/Modal/content/EditTaskListModal';

interface TaskListMenuProps {
  membersData: GroupMemberResponse[];
  userId: number;
  size: 'sm' | 'md';
}

export default function TaskListMenu({
  membersData,
  userId,
  size,
}: TaskListMenuProps) {
  const { openModal } = useModalStore();

  const userData = membersData.find((member) => {
    return member.userId === userId;
  });
  const isAdmin = Boolean(userData?.role === 'ADMIN');

  const openCreateTaskListModal = () => {
    openModal(
      {
        variant: 'taskForm',
        title: '할 일 목록 추가하기',
        button: {
          number: 1,
          text: '만들기',
          onRequest: () => {},
        },
      },
      <CreateTaskListModal />
    );
  };

  const openEditTaskListModal = () => {
    openModal(
      {
        variant: 'taskForm',
        title: '할 일 목록 수정하기',
        button: {
          number: 1,
          text: '수정하기',
          onRequest: () => {},
        },
      },
      <EditTaskListModal />
    );
  };
  // 추후에 할 일 삭제 API 연결 예정
  const handleDeleteTaskList = () => console.log('삭제하기');

  return (
    isAdmin && (
      <DropDown>
        <DropDown.Trigger>
          <TaskListMenuButton size={size} />
        </DropDown.Trigger>
        <DropDown.Menu align="right">
          <DropDown.Item onClick={openCreateTaskListModal}>
            생성하기
          </DropDown.Item>
          <DropDown.Item onClick={openEditTaskListModal}>
            수정하기
          </DropDown.Item>
          <DropDown.Item onClick={handleDeleteTaskList}>삭제하기</DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    )
  );
}
