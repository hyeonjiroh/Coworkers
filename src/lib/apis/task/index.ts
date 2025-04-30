import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  RecurringTaskBody,
  RecurringTaskResponse,
  TaskBody,
  TaskResponse,
  TaskOrderBody,
} from '@/lib/apis/task/type';

export async function postTask({
  groupId,
  taskListId,
  body,
}: {
  groupId: number;
  taskListId: number;
  body: RecurringTaskBody;
}): Promise<RecurringTaskResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<RecurringTaskBody, RecurringTaskResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}/recurring`,
    method: 'POST',
    token,
    body,
  });
}

export async function getTask({
  groupId,
  taskListId,
  taskId,
  token,
}: {
  groupId: number;
  taskListId: number;
  taskId: number;
  token: string;
}): Promise<TaskResponse | null> {
  return fetcher<undefined, TaskResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
    method: 'GET',
    token,
  });
}

export async function patchTask({
  groupId,
  taskListId,
  taskId,
  body,
}: {
  groupId: number;
  taskListId: number;
  taskId: number;
  body: TaskBody;
}): Promise<TaskResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<TaskBody, TaskResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
    method: 'PATCH',
    token,
    body,
  });
}

export async function deleteTask({
  groupId,
  taskListId,
  taskId,
}: {
  groupId: number;
  taskListId: number;
  taskId: number;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}`,
    method: 'DELETE',
    token,
  });
}

export async function patchTaskOrder({
  groupId,
  taskListId,
  taskId,
  body,
}: {
  groupId: number;
  taskListId: number;
  taskId: number;
  body: TaskOrderBody;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<TaskOrderBody, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}/order`,
    method: 'PATCH',
    token,
    body,
  });
}

// 할 일 반복 설정 삭제
export async function deleteTaskRecurring({
  groupId,
  taskListId,
  taskId,
  recurringId,
}: {
  groupId: number;
  taskListId: number;
  taskId: number;
  recurringId: number;
}): Promise<null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/tasks/${taskId}/recurring/${recurringId}`,
    method: 'DELETE',
    token,
  });
}
