// 할 일 목록별 done/todo 진행률 계산

import { TaskResponse } from '@/lib/apis/task/type';

export const calculateTaskListProgress = (
  tasks: TaskResponse[],
  date = new Date()
) => {
  const toDateOnly = (dateString: string) =>
    new Date(dateString).toISOString().split('T')[0];
  const today = date.toISOString().split('T')[0];

  const todaysTasks = tasks.filter(
    (task) => task.date && toDateOnly(task.date) === today
  );
  const doneTasks = todaysTasks.filter((task) => task.doneAt !== null);

  const total = todaysTasks.length;
  const done = doneTasks.length;

  return { total, done };
};
