'use client';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import ProgressBadge from '@/app/(team)/team/_components/TaskListBarList/ProgressBadge';
import TaskListMenu from '@/components/tasklist/TaskListMenu';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { GroupMemberResponse } from '@/lib/apis/group/type';
import {
  taskListBarContainerStyle,
  taskListBarTitleStyle,
  colorChipStyle,
  colorList,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface TaskListBarProps {
  id: number;
  name: string;
  index: number;
  groupId: number;
  userId: number;
  membersData: GroupMemberResponse[];
  total: number;
  done: number;
}

const TaskListBar = ({
  id,
  name,
  index,
  groupId,
  userId,
  membersData,
  total,
  done,
}: TaskListBarProps) => {
  const router = useRouter();
  const color = colorList[index % colorList.length];

  const handleClick = () => {
    const today = new Date().toISOString().split('T')[0];

    router.push(`${ROUTES.TASK(groupId)}?id=${id}&date=${today}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      className={`${taskListBarContainerStyle}`}
    >
      {/* left item */}
      <div className="flex w-full min-w-0 items-center gap-3">
        <div
          className={`${colorChipStyle} shrink-0`}
          style={{ backgroundColor: color }}
        />
        <div className={`${taskListBarTitleStyle} pr-2`}>
          <GradientScrollable color="#1e293b">{name}</GradientScrollable>
        </div>
      </div>

      {/* right item */}
      <div className="flex items-center gap-1 pr-2">
        <ProgressBadge total={total} done={done} />
        <TaskListMenu
          groupId={groupId}
          userId={userId}
          membersData={membersData}
          taskListId={id}
          taskListName={name}
          size="sm"
        />
      </div>
    </div>
  );
};

export default TaskListBar;
