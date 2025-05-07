'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Logo from './Logo';
import TeamMenu from './TeamMenu';
import UserMenu from './UserMenu';
import SideMenu from './SideMenu';
import { useAuth } from '@/hooks/useAuth';
import { useMemberships } from '@/hooks/useMemberships';
import { getUser } from '@/lib/apis/user';
import { UserResponse } from '@/lib/apis/user/type';
import { ROUTES } from '@/constants/routes';

export default function Header() {
  const isLogin = useAuth();
  const { memberships, selectedGroup, setSelectedGroup } =
    useMemberships(isLogin);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const logoHref = selectedGroup
    ? ROUTES.TEAM(selectedGroup.id)
    : ROUTES.TEAM_NO;

  const { data: user } = useQuery<UserResponse, Error>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const u = await getUser({});
      if (!u) throw new Error('유저 정보를 가져오지 못했습니다');
      return u;
    },
    enabled: isLogin && Boolean(selectedGroup),
  });

  const handleLogout = () => {
    Cookies.remove('accessToken', { path: '/' });
    Cookies.remove('refreshToken', { path: '/' });
    toast.success('로그아웃 되었습니다');
  };

  if (!isLogin) {
    return (
      <header className="h-[60px] w-full border border-slate-50/10 bg-slate-800 px-6 py-5">
        <div className="text-md-medium mx-auto flex h-full w-[1200px] max-w-[1920px] items-center justify-between leading-6 text-white">
          <Link
            href={ROUTES.HOME}
            className="desktop:w-[158px] flex w-[102px] items-center justify-between gap-0.5"
          >
            <IconRenderer name="LogoIcon" className="hover: cursor-pointer" />
            <IconRenderer name="CoworkersIcon" className="h-8 w-33" />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="h-[60px] w-full border border-slate-50/10 bg-slate-800 px-6 py-5">
        <div className="text-lg-medium mx-auto flex h-full max-w-[1200px] items-center justify-between leading-6 text-white">
          <nav className="flex items-center justify-between">
            <IconRenderer
              name="GnbMenuIcon"
              className="tablet:hidden mr-4 block cursor-pointer hover:text-gray-700"
              onClick={() => setSideMenuOpen(true)}
            />
            <Logo href={logoHref} />

            <div className="tablet:flex hidden items-center">
              {memberships.length > 0 && selectedGroup && (
                <TeamMenu
                  memberships={memberships}
                  selectedGroup={selectedGroup}
                  onSelect={setSelectedGroup}
                />
              )}
              <Link
                href={ROUTES.BOARDS}
                className="text-md ml-8 font-medium hover:text-gray-700"
              >
                자유게시판
              </Link>
            </div>
          </nav>

          <UserMenu nickname={user?.nickname} onLogout={handleLogout} />
        </div>
      </header>

      <SideMenu
        isSideMenuOpen={isSideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
        memberships={memberships}
      />
    </>
  );
}
