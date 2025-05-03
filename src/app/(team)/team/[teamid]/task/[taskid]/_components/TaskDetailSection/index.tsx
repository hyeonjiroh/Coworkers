import { TaskResponse } from '@/lib/apis/task/type';
import TaskMenuButton from '@/components/task/TaskMenuButton';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/components/task/DateInfo';
import FrequencyInfo from '@/components/task/FrequencyInfo';

export default function TaskDetailSection({
  id,
  recurring,
  doneAt,
  name,
  description,
  frequency,
  writer,
}: TaskResponse) {
  const date = recurring?.startDate;

  // 아직 사용하지 않은 값들 임시로 콘솔에 출력
  console.log(id, doneAt);

  return (
    <div className="tablet:min-h-[312px] min-h-[242px]">
      <div className="tablet:gap-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2lg-bold tablet:text-xl-bold">{name}</h1>
          <TaskMenuButton size="md" />
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
