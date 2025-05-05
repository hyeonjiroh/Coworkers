import clientFetcher from '@/lib/client/fetcher.client';
import {
  ArticleCommentBody,
  ArticleCommentListResponse,
  ArticleCommentResponse,
} from '@/lib/apis/articleComment/type';

// 게시글 댓글 작성 (POST /articles/:articleId/comments)
export async function postCommentByArticleId({
  articleId,
  body,
}: {
  articleId: number;
  body: ArticleCommentBody;
}): Promise<ArticleCommentResponse | null> {
  return clientFetcher<ArticleCommentBody, ArticleCommentResponse>({
    url: `articles/${articleId}/comments`,
    method: 'POST',
    body,
  });
}

// 게시글 댓글 목록 조회 (GET /articles/:articleId/comments)
export async function getCommentsByArticleId({
  articleId,
  limit,
  cursor,
}: {
  articleId: number;
  limit: number;
  cursor?: number;
}): Promise<ArticleCommentListResponse | null> {
  let query = `limit=${limit}`;
  if (cursor) {
    query += `&cursor=${cursor}`;
  }

  return clientFetcher<undefined, ArticleCommentListResponse>({
    url: `/articles/${articleId}/comments?${query}`,
    method: 'GET',
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
}: {
  commentId: number;
}): Promise<ArticleCommentResponse | null> {
  return clientFetcher<undefined, ArticleCommentResponse>({
    url: `/comments/${commentId}`,
    method: 'DELETE',
  });
}
