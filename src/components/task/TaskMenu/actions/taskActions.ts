import { TaskBody } from '@/lib/apis/task/type';
import { patchTaskById, deleteTaskById } from '@/lib/apis/task';
import { toast } from 'react-toastify';

export const handleEditTask = async (taskId: number, body: TaskBody) => {
  try {
    await patchTaskById({
      taskId,
      body,
      tag: ['task'],
    });
    toast.success('할 일이 수정되었습니다.');
  } catch (error) {
    console.error('Failed to edit the task :', error);
    toast.error('할 일을 수정하지 못했습니다.');
  }
};

export const handleDeleteTask = async (taskId: number) => {
  try {
    await deleteTaskById({
      taskId,
      tag: ['task'],
    });
    toast.success('할 일이 삭제되었습니다.');
  } catch (error) {
    console.error('Failed to delete the task :', error);
    toast.error('할 일을 삭제하지 못했습니다.');
  }
};
