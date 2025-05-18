import clientFetcher from '@/lib/client/fetcher.client';
import serverFetcher from '@/lib/server/fetcher.server';
import {
  ArticleCommentBody,
  ArticleCommentListResponse,
  ArticleCommentResponse,
} from '@/lib/apis/articleComment/type';

// 게시글 댓글 작성 (POST /articles/:articleId/comments)
export async function postCommentByArticleId({
  articleId,
  body,
  tag,
}: {
  articleId: number;
  body: ArticleCommentBody;
  tag?: string[];
}): Promise<ArticleCommentResponse | null> {
  return serverFetcher<ArticleCommentBody, ArticleCommentResponse>({
    url: `/articles/${articleId}/comments`,
    method: 'POST',
    body,
    tag,
  });
}

// 게시글 댓글 목록 조회 (GET /articles/:articleId/comments)
export async function getCommentsByArticleId({
  articleId,
  limit,
  cursor,
  tag,
}: {
  articleId: number;
  limit: number;
  cursor?: number | null;
  tag?: string[];
}): Promise<ArticleCommentListResponse | null> {
  let query = `limit=${limit}`;
  if (cursor) {
    query += `&cursor=${cursor}`;
  }

  return serverFetcher<undefined, ArticleCommentListResponse>({
    url: `/articles/${articleId}/comments?${query}`,
    method: 'GET',
    tag,
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
  return clientFetcher<ArticleCommentBody, ArticleCommentResponse>({
    url: `/comments/${commentId}`,
    method: 'PATCH',
    body,
  });
}

// 게시글 댓글 삭제 (DELETE /comments/:commentId)
export async function deleteCommentByArticleId({
  commentId,
  tag,
}: {
  commentId: number;
  tag?: string[];
}): Promise<ArticleCommentResponse | null> {
  return serverFetcher<undefined, ArticleCommentResponse>({
    url: `/comments/${commentId}`,
    method: 'DELETE',
    tag,
  });
}
