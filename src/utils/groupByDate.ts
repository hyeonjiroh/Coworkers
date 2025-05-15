import { TaskResponse } from '@/lib/apis/task/type';

export function groupByDate(tasks: TaskResponse[]) {
  const grouped: Record<string, { display: string; items: TaskResponse[] }> =
    {};

  for (const task of tasks) {
    const isoDate = task.date.split('T')[0];
    const display = new Date(task.date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    if (!grouped[isoDate]) {
      grouped[isoDate] = { display, items: [] };
    }

    grouped[isoDate].items.push(task);
  }

  return grouped;
}
