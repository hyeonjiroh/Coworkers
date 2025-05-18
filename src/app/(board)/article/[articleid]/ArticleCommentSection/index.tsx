import ArticleCommentInput from '@/app/(board)/article/[articleid]/ArticleCommentSection/ArticleCommentInput';
import ArticleCommentList from '@/app/(board)/article/[articleid]/ArticleCommentSection/ArticleCommentList';

export default function ArticleCommentSection({
  articleId,
}: {
  articleId: number;
}) {
  return (
    <div className="tablet:gap-6 flex flex-col gap-4">
      <h2 className="tablet:text-2lg-semibold text-lg-semibold">댓글</h2>
      <div className="tablet:gap-10 flex flex-col gap-8">
        <ArticleCommentInput articleId={articleId} />
        <div className="w-full border border-slate-50/10"></div>
        <ArticleCommentList articleId={articleId} />
      </div>
    </div>
  );
}
