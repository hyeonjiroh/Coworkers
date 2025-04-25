import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  ArticleCommentBody,
  ArticleCommentListResponse,
  ArticleCommentResponse,
  MessageResponse,
} from '@/lib/apis/articleComment/type';

export async function postArticleComment({
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

export async function getArticleList({
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

export async function patchArticleComment({
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

export async function deleteArticleComment(
  commentId: number
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, MessageResponse>({
    url: `/comments/${commentId}`,
    method: 'DELETE',
    token,
  });
}
