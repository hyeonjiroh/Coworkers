import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function CommentMenuButton() {
  return (
    <div className="flex size-4 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-800">
      <IconRenderer name="ThreeDotsIcon" size={16} />
    </div>
  );
}
