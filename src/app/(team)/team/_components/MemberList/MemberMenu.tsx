import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import DropDown from '@/components/common/Dropdown';
import { useModalStore } from '@/store/useModalStore';

interface MemberMenuProps {
  memberId: number;
  name: string;
  onDelete: (memberId: number) => void;
}

const MemberMenu = ({ memberId, name, onDelete }: MemberMenuProps) => {
  const { openModal } = useModalStore();

  const openMemberDeleteModal = () => {
    openModal({
      variant: 'danger',
      title: `'${name}' 님을 팀에서 내보내시겠어요?`,
      button: {
        number: 2,
        text: '확인',
        onRequest: () => onDelete(memberId),
      },
    });
  };

  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <TaskMenuButton size="sm" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[40px] w-[120px]">
        <DropDown.Item
          onClick={openMemberDeleteModal}
          className="text-md-regular h-[38px] w-full"
        >
          내보내기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default MemberMenu;
