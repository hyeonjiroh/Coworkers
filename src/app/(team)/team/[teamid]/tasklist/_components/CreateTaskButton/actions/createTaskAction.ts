import { RecurringTaskBody } from '@/lib/apis/task/type';
import { postRecurringTask } from '@/lib/apis/task';
import { toast } from 'react-toastify';

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
    toast.success('할 일이 등록되었습니다.');
  } catch (error) {
    console.error('Failed to create the task :', error);
    toast.error('할 일을 등록하지 못했습니다.');
  }
};
