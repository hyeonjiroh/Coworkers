'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function ExpansionButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="flex size-7 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="ExpansionIcon" size={18} />
    </button>
  );
}
