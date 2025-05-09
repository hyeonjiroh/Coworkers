import { TaskListBody } from '@/lib/apis/taskList/type';
import {
  postTaskList,
  patchTaskListById,
  deleteTaskListById,
} from '@/lib/apis/taskList';

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
  } catch (error) {
    console.error('Failed to create the task list :', error);
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
  } catch (error) {
    console.error('Failed to edit the task list :', error);
  }
};

export const handleDeleteTaskList = async (taskListId: number) => {
  try {
    await deleteTaskListById({
      taskListId,
      tag: ['tasklist'],
    });
  } catch (error) {
    console.error('Failed to delete the task list :', error);
  }
};
