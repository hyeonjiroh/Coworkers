interface User {
  id: number;
  nickname: string;
  image: string | null;
}

export interface RecurringTaskBody {
  name: string;
  description: string;
  startDate: string;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
}

export interface RecurringTaskResponse {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  startDate: string;
  frequencyType: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  weekDays: number[];
  monthDay: number | null;
  taskListId: number;
  groupId: number;
  writerId: number;
}

export interface TaskBody {
  name: string;
  description: string;
  done: boolean;
}

export interface TaskResponse {
  id: number;
  updatedAt: string;
  date: string;
  doneAt: string | null;
  recurringId: number;
  name: string;
  description: string;
  frequency: 'ONCE' | 'DAILY' | 'WEEKLY' | 'MONTHLY';
  deletedAt: string | null;
  user: User | null;
  displayIndex: number;
  recurring: RecurringTaskResponse;
  writer: User;
  doneBy: {
    user: User | null;
  };
  commentCount: number;
}

export interface TaskOrderBody {
  displayIndex: number;
}
