import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  RecurringTaskBody,
  RecurringTaskResponse,
  TaskBody,
  TaskResponse,
  TaskOrderBody,
} from '@/lib/apis/task/type';

// 반복 할 일 생성 (POST /groups/:groupId/task-lists/:taskListId/recurring)
export async function postRecurringTask({
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

// 할 일 단일 조회 (GET /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function getTaskById({
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

// 할 일 수정 (PATCH /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function patchTaskById({
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

// 할 일 삭제 (DELETE /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function deleteTaskById({
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

// 할 일 정렬 수정 (PATCH /groups/:groupId/task-lists/:taskListId/tasks/:taskId/order)
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

// 할 일 반복 설정 삭제 (DELETE /groups/:groupId/task-lists/:taskListId/tasks/:taskId/recurring/:recurringId)
export async function deleteTaskRecurringById({
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
