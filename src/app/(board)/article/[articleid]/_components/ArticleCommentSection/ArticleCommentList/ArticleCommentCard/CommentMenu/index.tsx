import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { deleteCommentByArticleId } from '@/lib/apis/articleComment';
import DropDown from '@/components/common/Dropdown';
import CommentMenuButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/CommentMenu/CommentMenuButton';
import { toast } from 'react-toastify';

export default function CommentMenu({
  commentId,
  writerId,
  enterCommentEditMode,
}: {
  commentId: number;
  writerId: number;
  enterCommentEditMode: () => void;
}) {
  const [userId, setUserId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const id = Cookies.get('userId') || undefined;
    setUserId(Number(id));
  }, []);

  const isWriter = Number(userId) === writerId;

  const handleDeleteComment = async () => {
    try {
      await deleteCommentByArticleId({ commentId, tag: ['article'] });
      queryClient.invalidateQueries({ queryKey: ['article-comment'] });
      toast.success('댓글이 삭제되었습니다.');
    } catch (error) {
      console.error('Failed to delete the comment on the article :', error);
      toast.error('댓글을 삭제하지 못했습니다.');
    }
  };

  return isWriter ? (
    <DropDown>
      <DropDown.Trigger>
        <CommentMenuButton />
      </DropDown.Trigger>
      <DropDown.Menu align="right">
        <DropDown.Item onClick={enterCommentEditMode}>수정하기</DropDown.Item>
        <DropDown.Item onClick={handleDeleteComment}>삭제하기</DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  ) : (
    <div className="size-4 shrink-0"></div>
  );
}
