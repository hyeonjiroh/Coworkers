import { ArticleResponse } from '@/lib/apis/article/type';

export type Post = {
  id: number;
  title: string;
  date: string;
  nickname: string;
  likes: number;
  image?: string | undefined;
  writerImage: string | null;
  writerId: number;
};

export function mapArticleToPost(article: ArticleResponse): Post {
  return {
    id: article.id,
    title: article.title || '제목 없음',
    date: article.createdAt
      ? new Date(article.createdAt).toLocaleDateString('ko-KR')
      : '날짜 없음',
    nickname: article.writer?.nickname || 'user1',
    likes: article.likeCount || 0,
    image: article.image ?? undefined,
    writerImage: article.writer?.image || null,
    writerId: article.writer?.id || 0,
  };
}
