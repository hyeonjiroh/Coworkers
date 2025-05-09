import { TaskBody } from '@/lib/apis/task/type';
import { patchTaskById, deleteTaskById } from '@/lib/apis/task';

export const handleEditTask = async (taskId: number, body: TaskBody) => {
  try {
    await patchTaskById({
      taskId,
      body,
      tag: ['task'],
    });
  } catch (error) {
    console.error('Failed to edit the task :', error);
  }
};

export const handleDeleteTask = async (taskId: number) => {
  try {
    await deleteTaskById({
      taskId,
      tag: ['task'],
    });
  } catch (error) {
    console.error('Failed to delete the task :', error);
  }
};
