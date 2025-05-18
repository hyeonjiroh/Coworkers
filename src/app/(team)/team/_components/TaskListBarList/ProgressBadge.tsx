import IconRenderer from '@/components/common/Icons/IconRenderer';
import CircularTaskListsProgress from '@/app/(team)/team/_components/TaskListBarList/CircularTaskListsProgress';
import {
  progressBadgeContainerStyle,
  progressBadgeTextStyle,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface ProgressBadgeProps {
  total: number;
  done: number;
  progress: number;
}

const ProgressBadge = ({ total, done, progress }: ProgressBadgeProps) => {
  const isDone = total === done;

  return (
    <div className={`${progressBadgeContainerStyle}`}>
      {isDone ? (
        <IconRenderer name="ProgressDoneIcon" size={16} />
      ) : (
        <CircularTaskListsProgress percentage={progress} />
      )}
      <p className={`${progressBadgeTextStyle}`}>
        {done}/{total}
      </p>
    </div>
  );
};

export default ProgressBadge;
