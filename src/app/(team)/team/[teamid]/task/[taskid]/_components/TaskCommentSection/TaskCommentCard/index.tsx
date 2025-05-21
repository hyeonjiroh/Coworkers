import { CommentResponse } from '@/lib/apis/comment/type';
import CommentMenu from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/CommentMenu';
import WriterInfo from '@/components/user/WriterInfo';
import DateInfo from '@/app/(team)/team/[teamid]/task/[taskid]/_components/TaskCommentSection/TaskCommentCard/DateInfo';

export default function TaskCommentCard({
  id,
  content,
  createdAt,
  user,
  enterCommentEditMode,
}: CommentResponse & {
  enterCommentEditMode: () => void;
}) {
  return (
    <div className="relative flex flex-col gap-4 border-b-2 border-slate-50/10 pb-4">
      <div className="absolute top-0 right-0">
        <CommentMenu
          enterCommentEditMode={enterCommentEditMode}
          commentId={id}
          writerId={user.id}
        />
      </div>
      <div className="text-md-regular pr-4 leading-5 whitespace-pre-wrap">
        {content}
      </div>
      <div className="flex items-center justify-between">
        <WriterInfo image={user.image} nickname={user.nickname} />
        <DateInfo date={createdAt} />
      </div>
    </div>
  );
}
