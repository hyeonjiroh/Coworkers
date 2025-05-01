import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function TaskMenuButton() {
  return (
    <button
      type="button"
      className="flex size-5 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="ThreeDotsIcon" size={16} />
    </button>
  );
}
