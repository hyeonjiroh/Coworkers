'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import { postArticleLike, deleteArticleLike } from '@/lib/apis/article';

export default function ToggleLikeButton({
  articleId,
  likeCount,
  isLiked,
}: {
  articleId: number;
  likeCount: number;
  isLiked: boolean;
}) {
  const handleLikeArticle = async () => {
    try {
      await postArticleLike({ articleId, tag: ['article'] });
    } catch (error) {
      console.error('Failed to update article like status :', error);
    }
  };

  const handleUnlikeArticle = async () => {
    try {
      await deleteArticleLike({ articleId, tag: ['article'] });
    } catch (error) {
      console.error('Failed to update article like status :', error);
    }
  };
  return (
    <div className="flex items-center gap-1">
      <IconRenderer
        name={isLiked ? 'HeartFullIcon' : 'HeartEmptyIcon'}
        onClick={isLiked ? handleUnlikeArticle : handleLikeArticle}
        size={24}
        className="cursor-pointer"
      />
      <div className="text-md-regular text-slate-500">{likeCount}</div>
    </div>
  );
}
