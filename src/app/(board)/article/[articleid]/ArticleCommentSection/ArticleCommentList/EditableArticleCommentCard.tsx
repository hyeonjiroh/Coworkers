import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ArticleCommentResponse } from '@/lib/apis/articleComment/type';
import { patchCommentByArticleId } from '@/lib/apis/articleComment';
import Button from '@/components/common/Button';
import InputTextarea from '@/components/common/Input/InputTextarea';

export default function EditableArticleCommentCard({
  id,
  content,
  exitCommentEditMode,
}: ArticleCommentResponse & {
  exitCommentEditMode: () => void;
}) {
  const [editedComment, setEditedComment] = useState(content ?? '');
  const [isEditValid, setIsEditValid] = useState(false);
  const queryClient = useQueryClient();

  const handleEditComment = useMutation({
    mutationFn: (content: string) =>
      patchCommentByArticleId({
        commentId: id,
        body: { content },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['article-comment'] });
      exitCommentEditMode();
    },
    onError: (error) => {
      console.error('Failed to update the comment on the article :', error);
    },
  });

  useEffect(() => {
    if (editedComment.trim() !== '' && editedComment !== content) {
      setIsEditValid(true);
    } else {
      setIsEditValid(false);
    }
  }, [editedComment]);

  return (
    <div className="tablet:px-6 tablet:py-5 flex flex-col gap-8 rounded-lg bg-slate-800 p-4">
      <div className="flex flex-col gap-2">
        <div>
          <InputTextarea
            variant="base"
            value={editedComment}
            onChange={(e) => {
              setEditedComment(e.target.value);
            }}
            placeholder="댓글을 입력해 주세요"
            inputClassName="text-md-regular tablet:text-lg-regular placeholder-slate-500"
            rows={1}
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={exitCommentEditMode}
            className="text-md-semibold tablet:text-lg-semibold px-3 py-1 text-slate-500"
          >
            취소
          </button>
          <Button
            variant="secondary"
            styleType="outlined"
            className="tablet:min-h-12 tablet:min-w-[100px] min-h-8 min-w-[74px]"
            radius="sm"
            onClick={() => handleEditComment.mutate(editedComment)}
            disabled={!isEditValid}
          >
            <div className="text-md-semibold tablet:text-lg-semibold">
              수정하기
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
