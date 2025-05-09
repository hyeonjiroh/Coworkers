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
  tag,
}: {
  groupId: number;
  taskListId: number;
  body: TaskListBody;
  tag?: string[];
}): Promise<TaskListResponse | null> {
  return serverFetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}`,
    method: 'PATCH',
    body,
    tag,
  });
}

// 할 일 목록 삭제 (DELETE /groups/:groupId/task-lists/:id)
export async function deleteTaskListById({
  taskListId,
  tag,
}: {
  taskListId: number;
  tag?: string[];
}): Promise<null> {
  return serverFetcher<undefined, null>({
    url: `/groups/{groupId}/task-lists/${taskListId}`,
    method: 'DELETE',
    tag,
  });
}

// 할 일 목록 생성 (POST /groups/:groupId/task-lists)
export async function postTaskList({
  groupId,
  body,
  tag,
}: {
  groupId: number;
  body: TaskListBody;
  tag?: string[];
}): Promise<TaskListResponse | null> {
  return serverFetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists`,
    method: 'POST',
    body,
    tag,
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
