import { TaskResponse } from '@/lib/apis/task/type';
import TaskMenu from '@/components/task/TaskMenu';
import DoneInfo from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskDetailSection/DoneInfo';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/components/task/DateInfo';
import FrequencyInfo from '@/components/task/FrequencyInfo';
import clsx from 'clsx';

export default function TaskDetailSection({
  recurring,
  doneAt,
  name,
  description,
  frequency,
  writer,
}: TaskResponse) {
  const date = recurring?.startDate;

  return (
    <div className="tablet:min-h-[312px] min-h-[242px]">
      <div className="tablet:gap-4 flex flex-col gap-3">
        <DoneInfo doneAt={doneAt} />
        <div className="flex items-center justify-between">
          <h1
            className={clsx(
              'text-2lg-bold tablet:text-xl-bold',
              doneAt && 'line-through'
            )}
          >
            {name}
          </h1>
          <TaskMenu size="md" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {writer && <WriterInfo {...writer} />}
            <div className="flex items-center gap-2.5">
              {date && <DateInfo date={date} withTime={true} />}
              <FrequencyInfo frequency={frequency} />
            </div>
          </div>
          <div className="text-md-regular">{description}</div>
        </div>
      </div>
    </div>
  );
}
