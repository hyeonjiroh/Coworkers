'use client';
import CreateTaskListModal from '@/components/common/Modal/content/CreateTaskListModal';
import { useModalStore } from '@/store/useModalStore';
import { TaskListBody } from '@/lib/apis/taskList/type';
import { handleCreateTaskList } from '@/components/tasklist/TaskListMenu/actions/taskListActions';
import { handleInvite } from '@/app/(team)/team/_components/AddButton/handleInvite';

type AddButtonVariant = 'tasklist' | 'member';

interface AddButtonProps {
  variant: AddButtonVariant;
  groupId: number;
}

const ADD_BUTTON_TEXT: Record<AddButtonVariant, string> = {
  tasklist: '+ 새로운 목록 추가하기',
  member: '+ 새로운 멤버 초대하기',
};

const AddButton = ({ variant, groupId }: AddButtonProps) => {
  const { openModal } = useModalStore();

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

  const openInviteMemberModal = () => {
    openModal({
      title: '멤버 초대',
      description: '그룹에 참여할 수 있는 링크를 복사합니다.',
      button: {
        number: 1,
        text: '링크 복사하기',
        onRequest: () => handleInvite(groupId),
      },
    });
  };

  return (
    <button
      onClick={
        variant === 'tasklist' ? openCreateTaskListModal : openInviteMemberModal
      }
      className="text-md-regular text-green-700"
    >
      {ADD_BUTTON_TEXT[variant]}
    </button>
  );
};

export default AddButton;
