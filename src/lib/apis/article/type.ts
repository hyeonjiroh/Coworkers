import { UserResponse } from '@/lib/apis/user/type';

export interface ArticleBody {
  image?: string | null;
  content: string;
  title: string;
}

export interface ArticleResponse {
  id: number;
  title?: string;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
  writer?: UserResponse;
  content?: string;
  likeCount?: number;
  isLiked?: boolean;
  commentCount?: number;
}

export interface ArticleListResponse {
  list: ArticleResponse[];
  totalCount: number;
}
