'use client';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBarList/ProcessBadge';
import TaskListDropdownMenu from '@/app/(team)/team/_components/TaskListBarList/TaskListDropdownMenu';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
  colorChipStyle,
  colorList,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface TaskListBarProps {
  id: number;
  name: string;
  index: number;
  groupId: number;
}

const TaskListBar = ({ id, name, index, groupId }: TaskListBarProps) => {
  const router = useRouter();
  const color = colorList[index % colorList.length];

  const handleClick = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    router.push(`${ROUTES.TASK(groupId)}?id=${id}&date=${formattedDate}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      className="flex w-full cursor-pointer flex-col items-center justify-between"
    >
      <div className={`${taskListBarWrapperStyle}`}>
        <div
          className={`${taskListBarTitleStyle} flex items-center justify-start gap-3`}
        >
          <div
            className={`${colorChipStyle} shrink-0`}
            style={{ backgroundColor: color }}
          />
          <div className={`${taskListBarTitleStyle} pr-2`}>
            <GradientScrollable color="#1e293b">{name}</GradientScrollable>
          </div>
        </div>

        <div className="flex items-center gap-1 pr-2">
          <ProcessBadge />
          <TaskListDropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default TaskListBar;
