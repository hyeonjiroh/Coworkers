import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { deleteTaskComment } from '@/lib/apis/comment';
import DropDown from '@/components/common/Dropdown';
import CommentMenuButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/CommentMenu/CommentMenuButton';

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

  useEffect(() => {
    const id = Cookies.get('userId') || undefined;
    setUserId(Number(id));
  }, []);

  const isWriter = Number(userId) === writerId;

  const handleDeleteComment = async () => {
    try {
      await deleteTaskComment({ commentId, tag: ['task-comment'] });
    } catch (error) {
      console.error('Failed to delete the comment on the task :', error);
    }
  };

  return (
    isWriter && (
      <DropDown>
        <DropDown.Trigger>
          <CommentMenuButton />
        </DropDown.Trigger>
        <DropDown.Menu align="right">
          <DropDown.Item onClick={enterCommentEditMode}>수정하기</DropDown.Item>
          <DropDown.Item onClick={handleDeleteComment}>삭제하기</DropDown.Item>
        </DropDown.Menu>
      </DropDown>
    )
  );
}
