import TaskCard from '@/app/(team)/team/[teamid]/tasklist/_components/TaskListSection/TaskCard';
import { TaskResponse } from '@/lib/apis/task/type';

export default function TaskListSection({ items }: { items: TaskResponse[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <TaskCard key={item.id} {...item} />
      ))}
    </div>
  );
}
