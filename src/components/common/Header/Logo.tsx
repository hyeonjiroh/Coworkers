'use client';

import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function Logo({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="desktop:w-[158px] flex w-[102px] items-center justify-between gap-0.5"
    >
      <IconRenderer name="LogoIcon" className="hover: cursor-pointer" />
      <IconRenderer name="CoworkersIcon" className="h-8 w-33" />
    </Link>
  );
}
