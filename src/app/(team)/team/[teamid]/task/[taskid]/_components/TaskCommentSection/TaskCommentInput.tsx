import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { postTaskComment } from '@/lib/apis/comment';
import InputTextarea from '@/components/common/Input/InputTextarea';

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
      console.error('Failed to update the comment on the task :', error);
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
    <InputTextarea
      variant="reply"
      value={comment}
      onChange={(e) => {
        setComment(e.target.value);
      }}
      onClick={handleSubmitComment}
      isSubmitDisabled={!isSubmitValid}
      placeholder="댓글을 입력해 주세요"
      inputClassName="text-md-regular pr-8 placeholder-slate-500"
      rows={1}
    />
  );
}
