'use client';
import ArticleForm from '@/app/(board)/article/_components/ArticleForm';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-toastify';

export default function AddArticlePage() {
  const router = useRouter();

  const handleSubmit = (
    success: boolean,
    message?: string,
    articleId?: number
  ) => {
    if (success && articleId) {
      router.push(ROUTES.ARTICLE(articleId));
    } else {
      toast.error(message || '게시글 등록에 실패했습니다.');
    }
  };

  return <ArticleForm title="게시글 쓰기" onSubmit={handleSubmit} />;
}