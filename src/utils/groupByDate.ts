import { TaskResponse } from '@/lib/apis/task/type';

export function groupByDate(tasks: TaskResponse[]) {
  const grouped: Record<string, { display: string; items: TaskResponse[] }> =
    {};

  for (const task of tasks) {
    // doneAt 기준으로 날짜 결정
    if (!task.doneAt) continue; // 완료되지 않은 작업은 히스토리에서 제외

    const isoDate = task.doneAt.split('T')[0];
    const display = new Date(task.doneAt).toLocaleDateString('ko-KR', {
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
