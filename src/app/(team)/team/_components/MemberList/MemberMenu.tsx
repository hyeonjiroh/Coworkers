import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import DropDown from '@/components/common/Dropdown';

const MemberMenu = () => {
  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <TaskMenuButton size="sm" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[40px] w-[120px]">
        <DropDown.Item className="text-md-regular h-[38px] w-full">
          내보내기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default MemberMenu;
