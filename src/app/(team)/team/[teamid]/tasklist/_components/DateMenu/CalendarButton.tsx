import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function CalendarButton() {
  return (
    <button
      type="button"
      className="flex size-6 items-center justify-center rounded-full bg-slate-800 transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="CalendarIcon" size={12} />
    </button>
  );
}
