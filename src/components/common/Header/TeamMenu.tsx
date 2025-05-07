'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { UserMembershipResponse } from '@/lib/apis/user/type';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';

interface TeamMenuProps {
  memberships: UserMembershipResponse[];
  selectedGroup: UserMembershipResponse['group'] | null;
  onSelect: (group: UserMembershipResponse['group']) => void;
}

export default function TeamMenu({
  memberships,
  selectedGroup,
  onSelect,
}: TeamMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const m = pathname.match(/^\/team\/(\d+)/);
    if (!m) return;
    const teamId = Number(m[1]);
    if (selectedGroup?.id === teamId) return;
    const found = memberships.find((x) => x.group.id === teamId);
    if (found) {
      onSelect(found.group);
    }
  }, [pathname, memberships, selectedGroup, onSelect]);

  const label = pathname.startsWith('/team/') ? selectedGroup?.name : '팀 목록';
  const close = () => setOpen(false);

  const baseLink = selectedGroup
    ? ROUTES.TEAM(selectedGroup.id)
    : ROUTES.TEAM_NO;

  return (
    <div className="relative ml-8 flex gap-3">
      <Link href={baseLink} className="text-md font-medium hover:text-gray-700">
        {label}
      </Link>

      <button
        type="button"
        className={`z-50 cursor-pointer hover:text-gray-700 ${
          open ? 'rotate-180' : ''
        } transition-transform`}
        onClick={() => setOpen((o) => !o)}
      >
        <IconRenderer name="CheckIcon" className="hover:text-gray-700" />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            onClick={close}
          />

          <div className="absolute top-[45px] left-[-140px] z-50 flex w-[240px] flex-col gap-4 rounded-xl border border-slate-50/10 bg-slate-800 p-4">
            <div className="header-scroll flex max-h-[350px] flex-col gap-4 overflow-y-auto">
              {memberships.map(({ group, role }) => (
                <div
                  key={group.id}
                  className="flex items-center gap-x-3 rounded-md px-2 py-2"
                >
                  <Link
                    href={ROUTES.TEAM(group.id)}
                    className="py flex flex-1 items-center gap-x-3 rounded-md p-1 transition-colors hover:bg-slate-700"
                    onClick={() => {
                      onSelect(group);
                      setOpen(false);
                    }}
                  >
                    <div className="relative h-8 w-8">
                      <Image
                        src={group.image ?? '/image/default_team_img.png'}
                        alt={group.name}
                        fill
                        // 임시조치 - 나중에 도메인 추가 예정
                        unoptimized
                        className="rounded-sm object-cover"
                      />
                    </div>
                    <span className="text-sm whitespace-nowrap">
                      {group.name}
                    </span>
                  </Link>

                  {role === 'ADMIN' && (
                    <Link
                      href={ROUTES.TEAM_EDIT(group.id)}
                      onClick={() => setOpen(false)}
                    >
                      <IconRenderer
                        name="EditIcon"
                        size={20}
                        className="cursor-pointer hover:text-green-700"
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <Link href={ROUTES.TEAM_ADD}>
              <Button
                variant="floating"
                styleType="transparent"
                radius="sm"
                size="lg"
                className="!w-full"
                startIcon="plus"
                onClick={close}
              >
                팀 추가하기
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
