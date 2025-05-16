import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function CommentInfo({
  commentCount,
}: {
  commentCount: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <IconRenderer name="CommentIcon" />
      <div className="text-md-regular text-slate-500">{commentCount}</div>
    </div>
  );
}
