import HistoryCard from '@/app/(user)/myhistory/_components/MyHistorySection/HistoryCard';
import { TaskResponse } from '@/lib/apis/task/type';

export default function MyHistorySection({ items }: { items: TaskResponse[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <HistoryCard key={item.id} {...item} />
      ))}
    </div>
  );
}
