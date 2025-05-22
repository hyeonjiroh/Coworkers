'use client';
import React, { useState, useEffect } from 'react';
import ArticleForm from '@/app/(board)/article/_components/ArticleForm';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { getArticleByIdForClient } from '@/lib/apis/article';
import { ArticleResponse } from '@/lib/apis/article/type';
import { useArticleStore } from '@/store/useArticleStore';
import { toast } from 'react-toastify';

export default function EditArticlePage({
  params,
}: {
  params: { articleid?: string };
}) {
  const router = useRouter();
  const { setArticle } = useArticleStore();
  const [article, setArticleState] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        if (!params?.articleid) {
          setError('게시글 ID가 제공되지 않았습니다.');
          return;
        }

        const articleId = parseInt(params.articleid);
        if (isNaN(articleId) || articleId <= 0) {
          setError('유효하지 않은 게시글 ID입니다.');
          return;
        }

        const response = await getArticleByIdForClient({ articleId });
        if (response) {
          setArticleState(response);
        } else {
          setError('게시글을 불러오는데 실패했습니다.');
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('401')) {
          setError('인증 정보가 유효하지 않습니다. 다시 로그인해 주세요.');
          toast.error('인증 정보가 유효하지 않습니다. 다시 로그인해 주세요.');
        } else {
          setError('게시글을 불러오는데 실패했습니다.');
          toast.error('게시글을 불러오는데 실패했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error || !article) {
    return <div>{error || '게시글을 찾을 수 없습니다.'}</div>;
  }

  const handleSubmit = async (
    success: boolean,
    message?: string,
    articleId?: number
  ) => {
    if (success && articleId) {
      const updatedArticle = await getArticleByIdForClient({ articleId });
      if (updatedArticle) {
        setArticle(updatedArticle);
      }
      router.push(ROUTES.ARTICLE(articleId));
      router.refresh();
    } else {
      toast.error(message || '게시글 수정에 실패했습니다.');
      router.push(ROUTES.HOME);
    }
  };

  return (
    <ArticleForm
      title="게시글 수정"
      initialTitle={article.title || ''}
      initialContents={article.content || ''}
      initialImageUrl={article.image || null}
      articleId={parseInt(params.articleid ?? '0')}
      onSubmit={handleSubmit}
    />
  );
}