import { TaskListResponse } from '@/lib/apis/taskList/type';

export interface GroupBody {
  image?: string | null;
  name: string;
}

export interface GroupResponse {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId?: string;
  members?: GroupMemberResponse[];
  taskLists?: TaskListResponse[];
}

export interface GroupInvitationBody {
  userEmail: string;
  token: string;
}

export interface GroupInvitationResponse {
  groupId?: number;
  message?: string;
}

export interface GroupMemberBody {
  userEmail: string;
}

export interface GroupMemberResponse {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImage: string | null;
  role: 'ADMIN' | 'MEMBER';
}
