'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import { useRouter } from 'next/navigation';

export default function CloseButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex size-7 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-700"
    >
      <IconRenderer name="XIcon" />
    </button>
  );
}
