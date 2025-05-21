import { ArticleCommentResponse } from '@/lib/apis/articleComment/type';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/app/(board)/article/[articleid]/_components/ArticleCommentSection/ArticleCommentList/ArticleCommentCard/DateInfo';
import CommentMenu from '@/app/(board)/article/[articleid]/_components/ArticleCommentSection/ArticleCommentList/ArticleCommentCard/CommentMenu';

export default function ArticleCommentCard({
  id,
  content,
  createdAt,
  writer,
  enterCommentEditMode,
}: ArticleCommentResponse & {
  enterCommentEditMode: () => void;
}) {
  return (
    <div className="tablet:px-6 tablet:py-5 flex flex-col gap-8 rounded-lg bg-slate-800 p-4">
      <div className="flex justify-between">
        <div className="text-md-regular tablet:text-lg-regular tablet:leading-6 leading-5 whitespace-pre-wrap">
          {content}
        </div>
        {writer && (
          <CommentMenu
            enterCommentEditMode={enterCommentEditMode}
            commentId={id}
            writerId={writer.id}
          />
        )}
      </div>
      <div className="flex items-center gap-4">
        {writer && <WriterInfo {...writer} />}
        <div className="h-3 border border-slate-700"></div>
        {createdAt && <DateInfo date={createdAt} />}
      </div>
    </div>
  );
}
