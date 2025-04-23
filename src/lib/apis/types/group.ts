export interface GetGroupResponse {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
  members: [
    {
      userId: number;
      groupId: number;
      userName: string;
      userEmail: string;
      userImage: string | null;
      role: string; // 나중에 "ADMIN" | "MEMBER"(?)으로 바꿔도 될 것 같다.
    },
  ];
  taskLists: string[];
}

export interface PostGroupBody {
  image?: string | null;
  name: string;
}

export interface PostGroupResponse {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}
