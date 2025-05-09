import { useEffect, useState } from 'react';
import { CommentResponse } from '@/lib/apis/comment/type';
import { patchTaskComment } from '@/lib/apis/comment';
import Button from '@/components/common/Button';
import AutoResizeTextarea from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/AutoResizeTextarea';

export default function EditableTaskCommentCard({
  id,
  content,
  exitCommentEditMode,
}: CommentResponse & {
  exitCommentEditMode: () => void;
}) {
  const [editedComment, setEditedComment] = useState(content);
  const [isEditValid, setIsEditValid] = useState(false);

  const handleEditComment = async () => {
    try {
      await patchTaskComment({
        commentId: id,
        body: { content: editedComment },
        tag: ['task-comment'],
      });
      exitCommentEditMode();
    } catch (error) {
      console.error('Failed to update the comment on the task :', error);
    }
  };

  useEffect(() => {
    if (editedComment.trim() !== '' && editedComment !== content) {
      setIsEditValid(true);
    } else {
      setIsEditValid(false);
    }
  }, [editedComment]);

  return (
    <div className="flex flex-col gap-4 border-b-2 border-slate-50/10 pb-4">
      <div>
        <AutoResizeTextarea
          value={editedComment}
          onChange={(e) => {
            setEditedComment(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={exitCommentEditMode}
          className="text-md-semibold px-3 py-1 text-slate-500"
        >
          취소
        </button>
        <Button
          variant="secondary"
          styleType="outlined"
          className="w-[74px]"
          radius="sm"
          size="sm"
          onClick={handleEditComment}
          disabled={!isEditValid}
        >
          <div className="text-md-semibold">수정하기</div>
        </Button>
      </div>
    </div>
  );
}
