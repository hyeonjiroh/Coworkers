interface User {
  id: number;
  nickname: string;
  image: string | null;
}

export interface CommentBody {
  content: string;
}

export interface CommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}
