import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  TaskListBody,
  TaskListOrderBody,
  TaskListResponse,
} from '@/lib/apis/taskList/type';

// 할 일 목록 단일 조회 (GET /groups/:groupId/task-lists/:id)
export async function getTaskListById({
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
  const token = Cookies.get('accessToken');
  return fetcher<TaskListBody, TaskListResponse>({
    url: `/groups/${groupId}/task-lists/${taskListId}`,
    method: 'PATCH',
    token,
    body,
  });
}

// 할 일 목록 삭제 (DELETE /groups/:groupId/task-lists/:id)
export async function deleteTaskListById({
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

// 할 일 목록 생성 (POST /groups/:groupId/task-lists)
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
  const token = Cookies.get('accessToken');
  return fetcher<TaskListOrderBody, null>({
    url: `/groups/${groupId}/task-lists/${taskListId}/order`,
    method: 'PATCH',
    token,
    body,
  });
}
