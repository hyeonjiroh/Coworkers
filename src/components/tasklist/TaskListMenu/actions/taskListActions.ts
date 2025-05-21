import { TaskListBody } from '@/lib/apis/taskList/type';
import {
  postTaskList,
  patchTaskListById,
  deleteTaskListById,
} from '@/lib/apis/taskList';
import { toast } from 'react-toastify';

export const handleCreateTaskList = async (
  groupId: number,
  body: TaskListBody
) => {
  try {
    await postTaskList({
      groupId,
      body,
      tag: ['tasklist'],
    });
    toast.success('할 일 목록이 등록되었습니다.');
  } catch (error) {
    console.error('Failed to create the task list :', error);
    toast.error('할 일 목록을 등록하지 못했습니다.');
  }
};

export const handleEditTaskList = async (
  groupId: number,
  taskListId: number,
  body: TaskListBody
) => {
  try {
    await patchTaskListById({
      groupId,
      taskListId,
      body,
      tag: ['tasklist'],
    });
    toast.success('할 일 목록이 수정되었습니다.');
  } catch (error) {
    console.error('Failed to edit the task list :', error);
    toast.error('할 일 목록을 수정하지 못했습니다.');
  }
};

export const handleDeleteTaskList = async (taskListId: number) => {
  try {
    await deleteTaskListById({
      taskListId,
      tag: ['tasklist'],
    });
    toast.success('할 일 목록이 삭제되었습니다.');
  } catch (error) {
    console.error('Failed to delete the task list :', error);
    toast.error('할 일 목록을 삭제하지 못했습니다.');
  }
};
