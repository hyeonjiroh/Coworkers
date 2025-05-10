'use client';
import ProcessBadge from '@/app/(team)/team/_components/TaskListBar/ProcessBadge';
import GradientScrollable from '@/components/common/Scroll/GradientScrollable';
import {
  taskListBarWrapperStyle,
  taskListBarTitleStyle,
} from '@/app/(team)/team/_components/styles';

const TaskListBar = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className={`${taskListBarWrapperStyle}`}>
        <GradientScrollable>
          <p className={`${taskListBarTitleStyle}`}>
            목록 이름 30자 제한이라서 500에러 발생하는 듯하다
          </p>
        </GradientScrollable>
        <ProcessBadge />
      </div>
    </div>
  );
};

export default TaskListBar;
