import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
import {
  TaskListBody,
  TaskListOrderBody,
  TaskListResponse,
} from '@/lib/apis/taskList/type';

// 할 일 목록 단일 조회 (GET /groups/:groupId/task-lists/:id)
export async function getTaskListById({
  taskListId,
  date,
  tag,
}: {
  taskListId: number;
  date: string;
  tag?: string[];
}): Promise<TaskListResponse | null> {
  return serverFetcher<undefined, TaskListResponse>({
    url: `/groups/{groupId}/task-lists/${taskListId}?date=${date}`,
    method: 'GET',
    tag,
  });
}

// 할 일 목록 수정 (PATCH /groups/:groupId/task-lists/:id)
export async function patchTaskListById({
  groupId,
  taskListId,
  body,
}: {
  groupId: number;
  taskListId: number;
  body: TaskListBody;
}): Promise<TaskListResponse | null> {
  return clientFetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}`,
    method: 'PATCH',
    body,
  });
}

// 할 일 목록 삭제 (DELETE /groups/:groupId/task-lists/:id)
export async function deleteTaskListById({
  taskListId,
}: {
  taskListId: number;
}): Promise<null> {
  return clientFetcher<undefined, null>({
    url: `/groups/{groupId}/task-lists/${taskListId}`,
    method: 'DELETE',
  });
}

// 할 일 목록 생성 (POST /groups/:groupId/task-lists)
export async function postTaskList({
  groupId,
  body,
}: {
  groupId: number;
  body: TaskListBody;
}): Promise<TaskListResponse | null> {
  return clientFetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists`,
    method: 'POST',
    body,
  });
}

// 할 일 목록 정렬 수정 (PATCH /groups/:groupId/task-lists/:id/order)
export async function patchTaskListOrder({
  groupId,
  taskListId,
  body,
}: {
  groupId: number;
  taskListId: number;
  body: TaskListOrderBody;
}): Promise<null> {
  return clientFetcher<TaskListOrderBody, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/order`,
    method: 'PATCH',
    body,
  });
}
