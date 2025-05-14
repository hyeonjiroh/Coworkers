'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getArticles, deleteArticle } from '@/lib/apis/article';
import { Post, mapArticleToPost } from '@/utils/postMapper';

interface UsePostsReturn {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  orderBy: 'recent' | 'like';
  setOrderBy: (order: 'recent' | 'like') => void;
  filteredPosts: Post[];
  totalPosts: number;
  isPostsLoading: boolean;
  error: string | null;
  paginate: (pageNumber: number) => void;
  deletePost: (articleId: number) => void;
}

//게시글 패칭
export function usePosts(
  searchQuery: string,
  initialPage: number,
  initialOrder: 'recent' | 'like'
): UsePostsReturn {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [orderBy, setOrderBy] = useState<'recent' | 'like'>(initialOrder);

  //URL orderBy 상태관리
  const syncUrlWithOrder = useCallback(() => {
    const currentOrder =
      (searchParams.get('orderBy') as 'recent' | 'like') || 'recent';
    const newParams = new URLSearchParams(searchParams.toString());
    if (currentOrder !== orderBy) {
      setOrderBy(currentOrder);
      setCurrentPage(1);
      newParams.set('orderBy', currentOrder);
      newParams.set('page', '1');
    } else {
      newParams.set('orderBy', orderBy);
    }
    router.push(`/boards?${newParams.toString()}`, { scroll: false });
  }, [searchParams, orderBy, router]);

  const {
    data: postsData,
    isLoading: isPostsLoading,
    error: postsError,
  } = useQuery({
    queryKey: ['posts', searchQuery, currentPage, orderBy],
    queryFn: async () => {
      const data = await getArticles({
        page: currentPage,
        pageSize: 10,
        order: orderBy,
        keyword: searchQuery || undefined,
      });
      if (!data) throw new Error('게시글을 불러오지 못했습니다.');
      return {
        posts: data.list.map(mapArticleToPost),
        totalCount: data.totalCount,
      };
    },
  });

  //게시글 삭제
  const deleteMutation = useMutation({
    mutationFn: (articleId: number) => deleteArticle({ articleId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['bestPosts'] });
    },
    onError: (error: Error) => {
      console.error('삭제 실패:', error.message);
    },
  });

  //페이지네이션
  const paginate = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('page', pageNumber.toString());
      router.push(`/boards?${newParams.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  useEffect(() => {
    syncUrlWithOrder();
  }, [syncUrlWithOrder, orderBy]);

  return {
    currentPage,
    setCurrentPage,
    orderBy,
    setOrderBy,
    filteredPosts: postsData?.posts || [],
    totalPosts: postsData?.totalCount || 0,
    isPostsLoading,
    error: postsError?.message || null,
    paginate,
    deletePost: deleteMutation.mutate,
  };
}
