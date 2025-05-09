'use client';

import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';
import { GroupMemberResponse } from '@/lib/apis/group/type';
import { TaskListBody } from '@/lib/apis/taskList/type';
import DropDown from '@/components/common/Dropdown';
import TaskListMenuButton from '@/components/tasklist/TaskListMenu/TaskListMenuButton';
import CreateTaskListModal from '@/components/common/Modal/content/CreateTaskListModal';
import EditTaskListModal from '@/components/common/Modal/content/EditTaskListModal';
import {
  handleCreateTaskList,
  handleDeleteTaskList,
  handleEditTaskList,
} from '@/components/tasklist/TaskListMenu/actions/taskListActions';

interface TaskListMenuProps {
  membersData: GroupMemberResponse[];
  userId: number;
  groupId: number;
  taskListId: number;
  taskListName: string;
  size: 'sm' | 'md';
}

export default function TaskListMenu({
  membersData,
  userId,
  groupId,
  taskListId,
  taskListName,
  size,
}: TaskListMenuProps) {
  const router = useRouter();
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
          onRequest: (body) =>
            handleCreateTaskList(groupId, body as TaskListBody),
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
          onRequest: (body) =>
            handleEditTaskList(groupId, taskListId, body as TaskListBody),
        },
      },
      <EditTaskListModal taskListName={taskListName} />
    );
  };

  const openDeleteTaskListModal = () => {
    openModal({
      variant: 'danger',
      title: `'${taskListName}'\n할 일 목록을 정말 삭제하시겠어요?`,
      description: '삭제 후에는 되돌릴 수 없습니다.',
      button: {
        number: 2,
        text: '삭제하기',
        onRequest: () => {
          handleDeleteTaskList(taskListId);
          if (size === 'md') {
            router.push(`/team/${groupId}`);
          }
        },
      },
    });
  };

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
          <DropDown.Item onClick={openDeleteTaskListModal}>
            삭제하기
          </DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    )
  );
}
