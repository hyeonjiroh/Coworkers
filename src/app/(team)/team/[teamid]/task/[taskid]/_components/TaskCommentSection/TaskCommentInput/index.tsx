import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { postTaskComment } from '@/lib/apis/comment';
import AutoResizeTextarea from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/AutoResizeTextarea';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function TaskCommentInput() {
  const [comment, setComment] = useState('');
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const params = useParams();
  const taskId = Number(params.taskid);

  const handleSubmitComment = async () => {
    try {
      await postTaskComment({
        taskId,
        body: { content: comment },
        tag: ['task-comment'],
      });
      setComment('');
    } catch (error) {
      console.log('Failed to update the comment on the task :', error);
    }
  };

  useEffect(() => {
    if (comment.trim() !== '') {
      setIsSubmitValid(true);
    } else {
      setIsSubmitValid(false);
    }
  }, [comment]);

  return (
    <div className="border-y-2 border-slate-50/10 pt-6 pb-4">
      <div className="flex justify-between gap-2">
        <AutoResizeTextarea
          value={comment}
          placeholder="댓글을 달아주세요"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={handleSubmitComment}
          className="flex size-6 items-center justify-center rounded-full bg-green-700 transition-colors duration-100 hover:bg-green-800 focus:bg-green-900 active:bg-green-900 disabled:cursor-not-allowed disabled:bg-slate-400"
          disabled={!isSubmitValid}
        >
          <IconRenderer name="ArrowTopIcon" size={16} />
        </button>
      </div>
    </div>
  );
}
