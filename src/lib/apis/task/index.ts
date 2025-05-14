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
  tag,
}: {
  groupId: number;
  taskListId: number;
  body: RecurringTaskBody;
  tag?: string[];
}): Promise<RecurringTaskResponse | null> {
  return serverFetcher<RecurringTaskBody, RecurringTaskResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}/recurring`,
    method: 'POST',
    body,
    tag,
  });
}

// 할 일 단일 조회 (GET /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function getTaskById({
  taskId,
  tag,
}: {
  taskId: number;
  tag?: string[];
}): Promise<TaskResponse | null> {
  return serverFetcher<undefined, TaskResponse>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'GET',
    tag,
  });
}

// 할 일 수정 (PATCH /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function patchTaskById({
  taskId,
  body,
  tag,
}: {
  taskId: number;
  body: TaskBody;
  tag?: string[];
}): Promise<TaskResponse | null> {
  return serverFetcher<TaskBody, TaskResponse>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'PATCH',
    body,
    tag,
  });
}

// 할 일 삭제 (DELETE /groups/:groupId/task-lists/:taskListId/tasks/:taskId)
export async function deleteTaskById({
  taskId,
  tag,
}: {
  taskId: number;
  tag?: string[];
}): Promise<null> {
  return serverFetcher<undefined, null>({
    url: `/groups/{groupId}/task-lists/{taskListId}/tasks/${taskId}`,
    method: 'DELETE',
    tag,
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
