import { TaskResponse } from '@/lib/apis/task/type';
import TitleButton from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListSection/TaskCard/TitleButton';
import ToggleTaskDoneButton from '@/components/task/ToggleTaskDoneButton';

interface HistoryCardProps extends TaskResponse {
  showMenu?: boolean;
}

export default function HistoryCard({
  id,
  doneAt,
  name,
  showMenu = false,
}: HistoryCardProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-lg bg-slate-800 px-[14px] py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <ToggleTaskDoneButton taskId={id} doneAt={doneAt} />
            <TitleButton name={name} id={id} doneAt={doneAt} />
          </div>
          {/* <div className="flex items-center gap-0.5">
            <IconRenderer name="CommentIcon" size={16} />
            <div className="text-xs-regular text-slate-500">{commentCount}</div>
          </div> */}
        </div>
        {showMenu && <div className="text-sm text-slate-400">작업 메뉴</div>}
      </div>
      {/* <div className="flex items-center gap-2.5">
        <DateInfo date={date} />
        <FrequencyInfo frequency={frequency} />
      </div> */}
    </div>
  );
}
