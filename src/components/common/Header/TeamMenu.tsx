'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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
  const params = useParams();
  const teamIdParam = params.teamid;
  const teamId = teamIdParam ? Number(teamIdParam) : undefined;

  const [isOpen, setIsOpen] = useState(false);
  const sortedMemberships = [...memberships].sort(
    (a, b) => a.group.id - b.group.id
  );

  useEffect(() => {
    if (teamId == null || isNaN(teamId)) return;
    if (selectedGroup?.id === teamId) return;

    const found = memberships.find(
      (membership) => membership.group.id === teamId
    );
    if (found) {
      onSelect(found.group);
    }
  }, [teamId, memberships, selectedGroup, onSelect]);

  const dropdpwnClose = () => setIsOpen(false);
  const dropdownOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="ml-8 flex items-center gap-3">
      {teamId !== undefined && selectedGroup ? (
        <Link
          href={ROUTES.TEAM(selectedGroup.id)}
          className="text-md max-w-60 truncate font-medium hover:text-gray-700"
          onClick={dropdpwnClose}
        >
          {selectedGroup.name}
        </Link>
      ) : (
        <button
          type="button"
          className="text-md font-medium hover:text-gray-700"
          onClick={dropdownOpen}
        >
          팀 목록
        </button>
      )}
      <div className="relative flex items-center">
        <button
          type="button"
          className={`z-50 cursor-pointer hover:text-gray-700 ${
            isOpen ? 'rotate-180' : ''
          } transition-transform`}
          onClick={dropdownOpen}
        >
          <IconRenderer name="CheckIcon" className="hover:text-gray-700" />
        </button>

        {isOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default"
              onClick={dropdpwnClose}
            />

            <div className="absolute top-12 right-0 z-50 mt-2 flex w-[240px] flex-col gap-4 rounded-xl border border-slate-50/10 bg-slate-800 p-4">
              <div className="header-scroll flex max-h-[350px] flex-col gap-4 overflow-y-auto">
                {sortedMemberships.map(({ group, role }) => (
                  <div
                    key={group.id}
                    className="flex items-center gap-x-3 rounded-md px-2 py-2"
                  >
                    <Link
                      href={ROUTES.TEAM(group.id)}
                      className="py flex min-w-0 flex-1 items-center gap-x-3 rounded-md p-1 transition-colors hover:bg-slate-700"
                      onClick={() => {
                        onSelect(group);
                        setIsOpen(false);
                      }}
                    >
                      <div className="relative h-8 w-8 shrink-0">
                        {group.image ? (
                          <Image
                            src={`${group.image}`}
                            alt={group.name}
                            fill
                            // 임시조치 - 나중에 도메인 추가 예정
                            unoptimized
                            className="rounded-sm object-cover"
                          />
                        ) : (
                          <IconRenderer name="ImgIcon" size={32} />
                        )}
                      </div>
                      <span className="truncate text-sm">{group.name}</span>
                    </Link>

                    {role === 'ADMIN' && (
                      <Link
                        href={ROUTES.TEAM_EDIT(group.id)}
                        className="ml-2 flex-shrink-0"
                        onClick={() => setIsOpen(false)}
                      >
                        <IconRenderer
                          name="EditIcon"
                          size={20}
                          className="ml-auto flex-shrink-0 cursor-pointer hover:text-green-700"
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
                  onClick={dropdpwnClose}
                >
                  팀 추가하기
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
