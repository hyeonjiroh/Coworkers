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
        </div>
        {showMenu && <div className="text-sm text-slate-400">작업 메뉴</div>}
      </div>
    </div>
  );
}
