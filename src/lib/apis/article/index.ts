import serverFetcher from '@/lib/server/fetcher.server';
import clientFetcher from '@/lib/client/fetcher.client';
import {
  ArticleBody,
  ArticleListResponse,
  ArticleResponse,
} from '@/lib/apis/article/type';

// 게시글 생성 (POST /articles)
export async function postArticle({
  body,
}: {
  body: ArticleBody;
}): Promise<ArticleResponse | null> {
  const payload = {
    content: body.content,
    title: body.title,
    ...(body.image ? { image: body.image } : {}),
  };

  return clientFetcher<typeof payload, ArticleResponse>({
    url: `/articles`,
    method: 'POST',
    body: payload,
  });
}

// 게시글 목록 조회 (GET /articles)
export async function getArticles({
  page,
  pageSize,
  order,
  keyword,
}: {
  page: number;
  pageSize: number;
  order: 'recent' | 'like';
  keyword?: string;
}): Promise<ArticleListResponse | null> {
  let query = `page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  if (keyword) {
    query += `&keyword=${keyword}`;
  }

  return clientFetcher<undefined, ArticleListResponse>({
    url: `/articles?${query}`,
    method: 'GET',
  });
}

// 게시글 상세 조회 (GET /articles/:articleId)
export async function getArticleById({
  articleId,
  tag,
}: {
  articleId: number;
  tag?: string[];
}): Promise<ArticleResponse | null> {
  return serverFetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}`,
    method: 'GET',
    tag,
  });
}

// 게시글 수정 (PATCH /articles/:articleId)
export async function patchArticleById({
  articleId,
  body,
}: {
  articleId: number;
  body: ArticleBody;
}): Promise<ArticleResponse | null> {
  const payload = {
    content: body.content,
    title: body.title,
    ...(body.image ? { image: body.image } : {}),
  };

  return clientFetcher<typeof payload, ArticleResponse>({
    url: `/articles/${articleId}`,
    method: 'PATCH',
    body: payload,
  });
}

// 게시글 삭제 (DELETE /articles/:articleId)
export async function deleteArticleById({
  articleId,
}: {
  articleId: number;
}): Promise<ArticleResponse | null> {
  return clientFetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}`,
    method: 'DELETE',
  });
}

// 게시글 좋아요 등록 (POST /articles/:articleId/like)
export async function postArticleLike({
  articleId,
  tag,
}: {
  articleId: number;
  tag?: string[];
}): Promise<ArticleResponse | null> {
  return serverFetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}/like`,
    method: 'POST',
    tag,
  });
}

// 게시글 좋아요 취소 (DELETE /articles/:articleId/like)
export async function deleteArticleLike({
  articleId,
  tag,
}: {
  articleId: number;
  tag?: string[];
}): Promise<ArticleResponse | null> {
  return serverFetcher<undefined, ArticleResponse>({
    url: `/articles/${articleId}/like`,
    method: 'DELETE',
    tag,
  });
}
