import DropDown from '@/components/common/Dropdown';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';

const TaskListDropdownMenu = () => {
  return (
    <DropDown>
      <DropDown.Trigger className="mb-0">
        <TaskMenuButton size="sm" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[80px] w-[120px]">
        <DropDown.Item className="text-md-regular h-[39px] w-full">
          수정하기
        </DropDown.Item>
        <DropDown.Item className="text-md-regular h-[39px] w-full">
          삭제하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default TaskListDropdownMenu;
