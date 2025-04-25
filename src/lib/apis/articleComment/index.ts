import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  ArticleCommentBody,
  ArticleCommentListResponse,
  ArticleCommentResponse,
  MessageResponse,
} from '@/lib/apis/articleComment/type';

// 게시글 댓글 작성 (POST /articles/:articleId/comments)
export async function postCommentByArticleId({
  articleId,
  body,
}: {
  articleId: number;
  body: ArticleCommentBody;
}): Promise<ArticleCommentResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<ArticleCommentBody, ArticleCommentResponse>({
    url: `articles/${articleId}/comments`,
    method: 'POST',
    token,
    body,
  });
}

// 게시글 댓글 목록 조회 (GET /articles/:articleId/comments)
export async function getCommentsByArticleId({
  articleId,
  limit,
  cursor,
  token,
}: {
  articleId: number;
  limit: number;
  cursor?: number;
  token: string;
}): Promise<ArticleCommentListResponse | null> {
  let query = `limit=${limit}`;
  if (cursor) {
    query += `&cursor=${cursor}`;
  }

  return fetcher<undefined, ArticleCommentListResponse>({
    url: `/articles/${articleId}/comments?${query}`,
    method: 'GET',
    token,
  });
}

// 게시글 댓글 수정 (PATCH /comments/:commentId)
export async function patchCommentByArticleId({
  commentId,
  body,
}: {
  commentId: number;
  body: ArticleCommentBody;
}): Promise<ArticleCommentResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<ArticleCommentBody, ArticleCommentResponse>({
    url: `/comments/${commentId}`,
    method: 'PATCH',
    token,
    body,
  });
}

// 게시글 댓글 삭제 (DELETE /comments/:commentId)
export async function deleteCommentByArticleId(
  commentId: number
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, MessageResponse>({
    url: `/comments/${commentId}`,
    method: 'DELETE',
    token,
  });
}
