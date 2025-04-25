import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  ArticleBody,
  ArticleListResponse,
  ArticleResponse,
  MessageResponse,
} from '@/lib/apis/article/type';

export async function postArticle(
  body: ArticleBody
): Promise<ArticleResponse | null> {
  const token = Cookies.get('accessToken');

  const payload = {
    content: body.content,
    title: body.title,
    ...(body.image ? { image: body.image } : {}),
  };

  return fetcher<typeof payload, ArticleResponse>({
    url: `/articles`,
    method: 'POST',
    token,
    body: payload,
  });
}

export async function getArticleList({
  page,
  pageSize,
  order,
  keyword,
  token,
}: {
  page: number;
  pageSize: number;
  order: 'recent' | 'like';
  keyword?: string;
  token: string;
}): Promise<ArticleListResponse | null> {
  let query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  if (keyword) {
    query += `&keyword=${keyword}`;
  }

  return fetcher<undefined, ArticleListResponse>({
    url: `/articles?${query}`,
    method: 'GET',
    token,
  });
}

export async function getArticle({
  articleId,
  token,
}: {
  articleId: number;
  token: string;
}): Promise<ArticleResponse | null> {
  return fetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}`,
    method: 'GET',
    token,
  });
}

export async function patchArticle({
  articleId,
  body,
}: {
  articleId: number;
  body: ArticleBody;
}): Promise<ArticleResponse | null> {
  const token = Cookies.get('accessToken');

  const payload = {
    content: body.content,
    title: body.title,
    ...(body.image ? { image: body.image } : {}),
  };

  return fetcher<typeof payload, ArticleResponse>({
    url: `/articles/${articleId}`,
    method: 'PATCH',
    token,
    body: payload,
  });
}

export async function deleteArticle(
  articleId: number
): Promise<MessageResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, MessageResponse>({
    url: `/articles/${articleId}`,
    method: 'DELETE',
    token,
  });
}

export async function postArticleLike(
  articleId: number
): Promise<ArticleResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}/like`,
    method: 'POST',
    token,
  });
}

export async function deleteArticleLike(
  articleId: number
): Promise<ArticleResponse | null> {
  const token = Cookies.get('accessToken');
  return fetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}/like`,
    method: 'DELETE',
    token,
  });
}
