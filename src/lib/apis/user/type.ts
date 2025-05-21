import { TaskResponse } from '@/lib/apis/task/type';

export interface UserBody {
  nickname?: string;
  image?: string | null;
}

export interface UserResponse {
  id: number;
  nickname: string;
  createdAt?: string;
  updatedAt?: string;
  image: string | null;
  teamId?: string;
  email?: string;
  memberships?: UserMembershipResponse[];
}

export interface UserGroupResponse {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}

export interface UserMembershipResponse {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImage: string | null;
  role: 'ADMIN' | 'MEMBER';
  group: UserGroupResponse;
}

export interface UserHistoryResponse {
  tasksDone: TaskResponse[];
}

export interface ResetPasswordToEmailBody {
  email: string;
  redirectUrl: string;
}

export interface ResetPasswordBody {
  passwordConfirmation: string;
  password: string;
  token?: string;
}

export interface MessageResponse {
  message: string;
}
