import { deleteArticleById } from '@/lib/apis/article';

export const handleDeleteArticle = async (articleId: number) => {
  try {
    await deleteArticleById({
      articleId,
    });
  } catch (error) {
    console.error('Failed to delete the article :', error);
  }
};
