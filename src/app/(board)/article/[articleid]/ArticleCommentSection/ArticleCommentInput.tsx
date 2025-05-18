'use client';

import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { postCommentByArticleId } from '@/lib/apis/articleComment';
import InputTextarea from '@/components/common/Input/InputTextarea';
import Button from '@/components/common/Button';

export default function ArticleCommentInput({
  articleId,
}: {
  articleId: number;
}) {
  const [comment, setComment] = useState('');
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmitComment = async () => {
    try {
      await postCommentByArticleId({
        articleId,
        body: { content: comment },
        tag: ['article'],
      });
      queryClient.invalidateQueries({ queryKey: ['article-comment'] });
      setComment('');
    } catch (error) {
      console.error('Failed to update the comment on the article :', error);
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
    <div className="flex flex-col items-end gap-4">
      <InputTextarea
        variant="box"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="댓글을 입력해 주세요"
        inputClassName="text-lg-regular h-[104px] px-4 py-3 placeholder-slate-500"
      />
      <Button
        variant="primary"
        styleType="filled"
        className="tablet:min-h-12 tablet:min-w-[184px] min-h-8 min-w-[74px]"
        radius="sm"
        onClick={handleSubmitComment}
        disabled={!isSubmitValid}
      >
        <div className="text-md-semibold tablet:text-lg-semibold">등록</div>
      </Button>
    </div>
  );
}
