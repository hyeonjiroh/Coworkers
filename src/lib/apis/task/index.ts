import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
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
  return clientFetcher<RecurringTaskBody, RecurringTaskResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}/recurring`,
    method: 'POST',
    body,
  });
}

// 할 일 단일 조회 (GET /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function getTaskById({
  taskId,
}: {
  taskId: number;
}): Promise<TaskResponse | null> {
  return serverFetcher<undefined, TaskResponse>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'GET',
  });
}

// 할 일 수정 (PATCH /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function patchTaskById({
  taskId,
  body,
}: {
  taskId: number;
  body: TaskBody;
}): Promise<TaskResponse | null> {
  return clientFetcher<TaskBody, TaskResponse>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'PATCH',
    body,
  });
}

// 할 일 삭제 (DELETE /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function deleteTaskById({
  taskId,
}: {
  taskId: number;
}): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'DELETE',
  });
}

// 할 일 정렬 수정 (PATCH /groups/:groupId/task-lists/:taskListId/tasks/:taskId/order)
export async function patchTaskOrder({
  taskListId,
  taskId,
  body,
}: {
  taskListId: number;
  taskId: number;
  body: TaskOrderBody;
}): Promise<null> {
  return clientFetcher<TaskOrderBody, null>({
    url: `/groups/{groupId}/task-lists/${taskListId}/tasks/${taskId}/order`,
    method: 'PATCH',
    body,
  });
}

// 할 일 반복 설정 삭제 (DELETE /groups/:groupId/task-lists/:taskListId/tasks/:taskId/recurring/:recurringId)
export async function deleteTaskRecurringById({
  recurringId,
}: {
  recurringId: number;
}): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/{taskId}/recurring/${recurringId}`,
    method: 'DELETE',
  });
}
