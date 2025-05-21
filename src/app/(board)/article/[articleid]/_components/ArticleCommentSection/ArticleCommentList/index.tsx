'use client';

import { useRef, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersection } from '@/hooks/useIntersection';
import { ArticleCommentListResponse } from '@/lib/apis/articleComment/type';
import { getCommentsByArticleId } from '@/lib/apis/articleComment';
import { toast } from 'react-toastify';
import ArticleCommentCard from '@/app/(board)/article/[articleid]/_components/ArticleCommentSection/ArticleCommentList/ArticleCommentCard';
import EditableArticleCommentCard from '@/app/(board)/article/[articleid]/_components/ArticleCommentSection/ArticleCommentList/EditableArticleCommentCard';
import Skeleton from '@/components/common/Loading/Skeleton';
import Spinner from '@/components/common/Loading/Spinner';

const LIMIT = 3;

export default function ArticleCommentList({
  articleId,
}: {
  articleId: number;
}) {
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<ArticleCommentListResponse | null, Error>({
      queryKey: ['article-comment'],
      queryFn: ({ pageParam }) =>
        getCommentsByArticleId({
          articleId,
          limit: LIMIT,
          cursor: pageParam as number | null,
          tag: ['article'],
        }),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: null,
    });

  const isCommentListEmpty = Boolean(data?.pages[0]?.list.length === 0);

  useIntersection({
    target: observerRef,
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (status === 'error') {
    toast.error('댓글을 불러오지 못했습니다');
  }

  if (status === 'pending') {
    return (
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-lg bg-slate-800 p-4"
          >
            <Skeleton width="60%" height="1rem" />
            <Skeleton width="80%" height="1rem" />
            <Skeleton width="70%" height="1rem" />
            <Skeleton width="40%" height="1rem" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {data?.pages.map((page, pageIdx) =>
        page?.list.map((item, itemIdx) => {
          const isLast =
            pageIdx === data.pages.length - 1 &&
            itemIdx === page.list.length - 1;
          return editingCommentId === item.id ? (
            <EditableArticleCommentCard
              key={item.id}
              {...item}
              exitCommentEditMode={() => setEditingCommentId(null)}
            />
          ) : (
            <div key={item.id} ref={isLast ? observerRef : null}>
              <ArticleCommentCard
                {...item}
                enterCommentEditMode={() => setEditingCommentId(item.id)}
              />
            </div>
          );
        })
      )}
      {isFetchingNextPage && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
      {isCommentListEmpty && (
        <div className="text-md-medium tablet:py-[120px] py-[180px] text-center text-slate-500">
          <p>아직 작성된 댓글이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
