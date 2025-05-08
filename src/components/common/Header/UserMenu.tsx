'use client';

import { useState } from 'react';
import Link from 'next/link';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { ROUTES } from '@/constants/routes';

export default function UserMenu({
  nickname,
  onLogout,
}: {
  nickname?: string;
  onLogout: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemClass =
    'flex items-center justify-center h-[47px] w-full px-4 py-2 hover:bg-slate-700';

  const close = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="group relative z-50 flex cursor-pointer items-center gap-3 hover:cursor-pointer hover:text-gray-700"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IconRenderer
          name="UserIcon"
          size={16}
          className="group-hover:text-gray-700"
        />
        {nickname ?? '사용자'}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            onClick={close}
          />

          <div className="absolute right-0 z-50 mt-2 w-[135px] flex-col items-center justify-center rounded-md border border-slate-50/10 bg-slate-800 text-center text-sm text-[14px] whitespace-nowrap text-white">
            <Link href={ROUTES.MYHISTORY}>
              <button
                type="button"
                className={`${menuItemClass} rounded-t-md`}
                onClick={close}
              >
                마이 히스토리
              </button>
            </Link>
            <Link href={ROUTES.MYPAGE}>
              <button type="button" className={menuItemClass} onClick={close}>
                계정 설정
              </button>
            </Link>
            <Link href={ROUTES.TEAM_JOIN}>
              <button type="button" className={menuItemClass} onClick={close}>
                팀 참여
              </button>
            </Link>
            <Link href={ROUTES.HOME}>
              <button
                type="button"
                className={`${menuItemClass} cursor-pointer rounded-b-md`}
                onClick={() => {
                  onLogout();
                  close();
                }}
              >
                로그아웃
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
