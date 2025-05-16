'use client';

import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';
import { ROUTES } from '@/constants/routes';
import DropDown from '@/components/common/Dropdown';
import ArticleMenuButton from '@/components/article/ArticleMenu/ArticleMenuButton';
import { handleDeleteArticle } from '@/components/article/ArticleMenu/actions/articleActions';
import { UserResponse } from '@/lib/apis/user/type';
import { useIsWriter } from '@/hooks/useIsWriter';

interface ArticleMenuProps {
  articleId: number;
  userId: number;
  writerData: UserResponse;
}

export default function ArticleMenu({
  articleId,
  userId,
  writerData,
}: ArticleMenuProps) {
  const router = useRouter();
  const { openModal } = useModalStore();

  const isWriter = useIsWriter({ writerData, userId });

  const openDeleteArticleModal = () => {
    openModal({
      variant: 'danger',
      title: `해당 게시글을 정말 삭제하시겠어요?`,
      description: '삭제 후에는 되돌릴 수 없습니다.',
      button: {
        number: 2,
        text: '삭제하기',
        onRequest: () => {
          setTimeout(() => {
            handleDeleteArticle(articleId);
          }, 0);
          router.push(ROUTES.BOARDS);
        },
      },
    });
  };

  return (
    <>
      {isWriter && (
        <DropDown>
          <DropDown.Trigger>
            <ArticleMenuButton />
          </DropDown.Trigger>
          <DropDown.Menu align="right">
            <DropDown.Item
              onClick={() => router.push(ROUTES.ARTICLE_EDIT(articleId))}
            >
              수정하기
            </DropDown.Item>
            <DropDown.Item onClick={openDeleteArticleModal}>
              삭제하기
            </DropDown.Item>
          </DropDown.Menu>
        </DropDown>
      )}
    </>
  );
}
