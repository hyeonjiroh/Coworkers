import IconRenderer from '@/components/common/Icons/IconRenderer';
import CircularProgress from '@/app/(team)/team/_components/TaskListBarList/CircularProgress';
import {
  progressBadgeContainerStyle,
  progressBadgeTextStyle,
} from '@/app/(team)/team/_components/TaskListBarList/styles';

interface ProgressBadgeProps {
  total: number;
  done: number;
}

const ProgressBadge = ({ total, done }: ProgressBadgeProps) => {
  const isDone = total === done;
  const percentage = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className={`${progressBadgeContainerStyle}`}>
      {isDone ? (
        <IconRenderer name="ProgressDoneIcon" size={16} />
      ) : (
        <CircularProgress percentage={percentage} />
      )}
      <p className={`${progressBadgeTextStyle}`}>
        {done}/{total}
      </p>
    </div>
  );
};

export default ProgressBadge;
