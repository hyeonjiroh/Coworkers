import Cookies from 'js-cookie';
import fetcher from '@/lib/fetcher';
import {
  ArticleBody,
  ArticleListResponse,
  ArticleResponse,
  MessageResponse,
} from '@/lib/apis/article/type';

// 게시글 생성 (POST /articles)
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

// 게시글 목록 조회 (GET /articles)
export async function getArticles({
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

// 게시글 상세 조회 (GET /articles/:articleId)
export async function getArticleById({
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

// 게시글 수정 (PATCH /articles/:articleId)
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

// 게시글 삭제 (DELETE /articles/:articleId)
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

// 게시글 좋아요 등록 (POST /articles/:articleId/like)
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

// 게시글 좋아요 취소 (DELETE /articles/:articleId/like)
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
