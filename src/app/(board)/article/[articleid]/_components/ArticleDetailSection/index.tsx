import { ArticleResponse } from '@/lib/apis/article/type';
import ArticleMenu from '@/components/article/ArticleMenu';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/app/(board)/article/[articleid]/_components/ArticleDetailSection/DateInfo';
import CommentInfo from '@/app/(board)/article/[articleid]/_components/ArticleDetailSection/CommentInfo';
import ToggleLikeButton from '@/app/(board)/article/[articleid]/_components/ArticleDetailSection/ToggleLikeButton';

interface ArticleDetailSectionProps extends ArticleResponse {
  userId: number;
}

export default function ArticleDetailSection({
  id,
  title,
  image,
  createdAt,
  writer,
  content,
  likeCount,
  isLiked,
  commentCount,
  userId,
}: ArticleDetailSectionProps) {
  return (
    <div className="tablet:min-h-[312px] flex min-h-[242px] flex-col gap-6">
      <div>
        <div className="flex h-16 items-center justify-between border-b border-slate-50/10">
          <h1 className="text-2lg-bold tablet:text-xl-bold">{title}</h1>
          {writer && (
            <ArticleMenu articleId={id} userId={userId} writerData={writer} />
          )}
        </div>
        <div className="laptop:h-16 flex h-[72px] items-center justify-between">
          <div className="flex items-center gap-4">
            {writer && <WriterInfo {...writer} />}
            <div className="h-3 border border-slate-700"></div>
            {createdAt && <DateInfo date={createdAt} />}
          </div>
          <div className="flex gap-4">
            {commentCount !== undefined && (
              <CommentInfo commentCount={commentCount} />
            )}
            <ToggleLikeButton
              articleId={id}
              likeCount={likeCount ?? 0}
              isLiked={isLiked ?? false}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {image && (
          <div className="tablet:w-[500px] mx-auto w-full">
            <img
              src={image}
              style={{ width: 'auto', height: 'auto' }}
              alt="아티클 이미지"
            />
          </div>
        )}
        <div className="text-md-regular tablet:text-lg-medium tablet:leading-6 leading-5 whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}
