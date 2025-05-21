//베스트 게시글 패칭
'use client';
import { useQuery } from '@tanstack/react-query';
import { getArticles } from '@/lib/apis/article';
import { Post, mapArticleToPost } from '@/utils/postMapper';
import { useIsLaptop, useIsTablet } from '@/hooks/useCheckViewport';

interface UseBestPostsReturn {
  bestPosts: Post[];
  isBestLoading: boolean;
  error: string | null;
}

export function useBestPosts(): UseBestPostsReturn {
  const isLaptop = useIsLaptop();
  const isTablet = useIsTablet();

  let pageSize = 1;

  if (isLaptop) {
    pageSize = 3;
  } else if (isTablet) {
    pageSize = 2;
  } else {
    pageSize = 1;
  }

  const {
    data: bestPostsData,
    isLoading: isBestLoading,
    error: bestError,
  } = useQuery({
    queryKey: ['bestPosts', pageSize],
    queryFn: async () => {
      const data = await getArticles({
        page: 1,
        pageSize,
        order: 'like',
      });
      if (!data) throw new Error('베스트 게시글을 불러오지 못했습니다.');
      return data.list.map(mapArticleToPost);
    },
  });

  return {
    bestPosts: bestPostsData || [],
    isBestLoading,
    error: bestError?.message || null,
  };
}
