'use client';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/store/useModalStore';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-toastify';
import { getArticleById } from '@/lib/apis/article';
import { getUser } from '@/lib/apis/user';
import PostCard from '@/app/(board)/boards/_components/PostCard';
import { Post } from '@/utils/postMapper';

type PostListProps = {
  posts: Post[];
  deletePost: (articleId: number) => void;
};

export default function PostList({ posts, deletePost }: PostListProps) {
  const router = useRouter();
  const { openModal, closeModal } = useModalStore();

  const handleSelect = async (id: number, option: string) => {
    if (option === '수정하기') {
      try {
        const article = await getArticleById({ articleId: id });
        if (!article) {
          toast.error('게시글을 찾을 수 없습니다.');
          return;
        }

        const currentUser = await getUser({});
        if (!currentUser) {
          toast.error('로그인이 필요합니다.');
          return;
        }

        if (article.writer?.id !== currentUser.id) {
          toast.error('작성자만 수정할 수 있습니다.');
          return;
        }

        router.push(ROUTES.ARTICLE_EDIT(id));
      } catch (error) {
        console.error('수정 에러:', error);
        toast.error('게시글 수정 권한을 확인할 수 없습니다.');
      }
      return;
    }

    if (option === '삭제하기') {
      openModal({
        variant: 'danger',
        title: '게시글 삭제를 진행하시겠어요?',
        description: '삭제 후 복구가 불가능합니다.',
        button: {
          number: 2,
          text: '삭제',
          onRequest: async () => {
            try {
              await deletePost(id);
              closeModal();
              toast.success('게시글이 삭제되었습니다.');
            } catch (error: unknown) {
              if (error instanceof Error) {
                const statusMatch = error.message.match(/Error (\d+):/);
                const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
                if (status === 403) {
                  toast.error('작성자만 삭제할 수 있습니다.');
                  closeModal();
                } else {
                  toast.error(error.message || '삭제에 실패했습니다.');
                }
              } else {
                toast.error('삭제에 실패했습니다.');
              }
            }
          },
        },
      });
    }
  };

  return (
    <section className="tablet:gap-5 tablet:grid tablet:grid-cols-1 laptop:gap-5 laptop:grid-cols-2 grid h-full w-full grid-cols-1 flex-col gap-5">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          onSelect={(option) => handleSelect(post.id, option)}
        />
      ))}
    </section>
  );
}
