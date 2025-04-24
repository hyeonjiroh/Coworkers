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
  teamId: string;
  members: GroupMemberResponse[];
  taskLists: string[]; // 수정 필요
}

export interface GroupInvitationBody {
  userEmail: string;
  token: string;
}

export interface GroupInvitationResponse {
  groupId: number;
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

export interface GroupTasksResponse {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImage: string | null;
  role: 'ADMIN' | 'MEMBER';
}
