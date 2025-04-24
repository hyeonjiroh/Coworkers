import { TaskResponse } from '@/lib/apis/task/type';

export interface TaskListBody {
  name: string;
}
export interface TaskListResponse {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  groupId: number;
  displayIndex: number;
  tasks: TaskResponse[];
}

export interface TaskListOrderBody {
  displayIndex: number;
}
