import TaskListMenuItem from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListMenu/TaskListMenuItem';
import { TaskListResponse } from '@/lib/apis/taskList/type';

export default function TaskListMenu({
  items,
  selectedId,
}: {
  items: TaskListResponse[];
  selectedId: number;
}) {
  return (
    <div className="scrollbar-hide flex gap-3 overflow-x-auto whitespace-nowrap">
      {items.map((item) => (
        <TaskListMenuItem key={item.id} {...item} selectedId={selectedId} />
      ))}
    </div>
  );
}
