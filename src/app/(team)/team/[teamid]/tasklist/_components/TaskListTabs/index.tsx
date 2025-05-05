import TaskListTab from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListTabs/TaskListTab';
import { TaskListResponse } from '@/lib/apis/taskList/type';

export default function TaskListTabs({
  items,
  selectedId,
}: {
  items: TaskListResponse[];
  selectedId: number;
}) {
  return (
    <div className="scrollbar-hide flex gap-3 overflow-x-auto whitespace-nowrap">
      {items.map((item) => (
        <TaskListTab key={item.id} {...item} selectedId={selectedId} />
      ))}
    </div>
  );
}
