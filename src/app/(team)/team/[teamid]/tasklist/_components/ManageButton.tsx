import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function ManageButton() {
  return (
    <button
      type="button"
      className="flex size-6 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-800"
    >
      <IconRenderer name="GearIcon" size={18} />
    </button>
  );
}
