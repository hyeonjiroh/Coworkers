import { RecurringTaskBody } from '@/lib/apis/task/type';
import { postRecurringTask } from '@/lib/apis/task';

export const handleCreateTask = async (
  groupId: number,
  taskListId: number,
  body: RecurringTaskBody
) => {
  try {
    await postRecurringTask({
      groupId,
      taskListId,
      body,
      tag: ['task'],
    });
  } catch (error) {
    console.error('Failed to create the task :', error);
  }
};
