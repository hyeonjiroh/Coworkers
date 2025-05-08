'use client';

import Link from 'next/link';
import type { UserMembershipResponse } from '@/lib/apis/user/type';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { ROUTES } from '@/constants/routes';

export default function SideMenu({
  isSideMenuOpen,
  onClose,
  memberships,
}: {
  isSideMenuOpen: boolean;
  onClose: () => void;
  memberships: UserMembershipResponse[];
}) {
  return (
    <>
      {isSideMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            onClick={onClose}
          />

          <div
            className={`fixed top-0 left-0 z-50 h-[812px] w-[250px] border-r border-b border-slate-50/10 bg-slate-800 p-6 transition-transform duration-300 ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="mb-8 flex shrink-0 justify-end">
              <button
                type="button"
                className="cursor-pointer"
                onClick={onClose}
              >
                <IconRenderer name="XIcon" className="hover:text-green-100" />
              </button>
            </div>

            <ul className="header-scroll flex h-[700px] flex-col gap-6 overflow-y-auto overscroll-contain text-sm font-normal">
              {memberships.map(({ group, role }) => (
                <li
                  key={group.id}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={ROUTES.TEAM(group.id)}
                    className="hover:text-green-700"
                    onClick={onClose}
                  >
                    {group.name}
                  </Link>

                  {role === 'ADMIN' && (
                    <Link
                      href={ROUTES.TEAM_EDIT(group.id)}
                      onClick={onClose}
                      className="ml-2"
                    >
                      <IconRenderer
                        name="EditIcon"
                        size={20}
                        className="mr-5 hover:text-green-700"
                      />
                    </Link>
                  )}
                </li>
              ))}

              <li>
                <Link
                  href={ROUTES.BOARDS}
                  className="hover:text-green-700"
                  onClick={onClose}
                >
                  자유게시판
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
