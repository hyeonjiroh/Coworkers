import { deleteArticleById } from '@/lib/apis/article';
import { toast } from 'react-toastify';

export const handleDeleteArticle = async (articleId: number) => {
  try {
    await deleteArticleById({
      articleId,
    });
    toast.success('게시글이 삭제되었습니다.');
  } catch (error) {
    console.error('Failed to delete the article :', error);
    toast.error('게시글을 삭제하지 못했습니다.');
  }
};
