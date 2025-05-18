// done/todo 진행률 계산

import { TaskResponse } from '@/lib/apis/task/type';

export function calculateProgress(tasks: TaskResponse[]) {
  const toDateOnly = (dateString: string) =>
    new Date(dateString).toISOString().split('T')[0];

  const today = new Date().toISOString().split('T')[0];

  // task.date의 시간 탈락시킨 후 연월일로만 비교
  const todaysTasks = tasks.filter((task) => {
    return task.date && toDateOnly(task.date) === today;
  });
  const doneTasks = todaysTasks.filter((task) => task.doneAt !== null);

  const total = todaysTasks.length;
  const done = doneTasks.length;
  const progress = total === 0 ? 0 : Math.round((done / total) * 100);

  return { total, done, progress };
}
