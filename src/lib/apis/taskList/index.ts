import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  TaskListBody,
  TaskListOrderBody,
  TaskListResponse,
} from '@/lib/apis/taskList/type';

export async function getTaskList({
  groupId,
  taskListId,
  date,
  token,
}: {
  groupId: number;
  taskListId: number;
  date: string;
  token: string;
}): Promise<TaskListResponse | null> {
  return fetcher<undefined, TaskListResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}?date=${date}`,
    method: 'GET',
    token,
  });
}

export async function patchTaskList({
  groupId,
  taskListId,
  body,
}: {
  groupId: number;
  taskListId: number;
  body: TaskListBody;
}): Promise<TaskListResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}`,
    method: 'PATCH',
    token,
    body,
  });
}

export async function deleteTaskList({
  groupId,
  taskListId,
}: {
  groupId: number;
  taskListId: number;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}`,
    method: 'DELETE',
    token,
  });
}

export async function postTaskList({
  groupId,
  body,
}: {
  groupId: number;
  body: TaskListBody;
}): Promise<TaskListResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists`,
    method: 'POST',
    token,
    body,
  });
}

export async function patchTaskListOrder({
  groupId,
  taskListId,
  body,
}: {
  groupId: number;
  taskListId: number;
  body: TaskListOrderBody;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<TaskListOrderBody, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/order`,
    method: 'PATCH',
    token,
    body,
  });
}
