'use client';

import { useLockBackgroundScroll } from '@/hooks/useLockBackgroundScroll';

export default function Background({
  isSidePageOpen,
}: {
  isSidePageOpen: boolean;
}) {
  useLockBackgroundScroll(isSidePageOpen);
  return <div className="fixed inset-0 flex h-full w-full bg-black/50"></div>;
}
