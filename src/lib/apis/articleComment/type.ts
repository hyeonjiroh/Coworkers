import { UserResponse } from '@/lib/apis/user/type';

export interface ArticleCommentBody {
  content: string;
}

export interface ArticleCommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: UserResponse;
}

export interface ArticleCommentListResponse {
  list: ArticleCommentResponse[];
  nextCursor: number | null;
}

export interface MessageResponse {
  message: string;
}
