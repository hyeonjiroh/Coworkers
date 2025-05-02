'use client';

import { GroupMemberResponse } from '@/lib/apis/group/type';
import IconRenderer from '@/components/common/Icons/IconRenderer';

export default function ManageButton({
  membersData,
  userId,
}: {
  membersData: GroupMemberResponse[];
  userId: number;
}) {
  const userData = membersData.find((member) => {
    return member.userId === userId;
  });

  const isAdmin = Boolean(userData?.role === 'ADMIN');

  return (
    <>
      {isAdmin && (
        <button
          type="button"
          className="flex size-6 items-center justify-center rounded-full transition-colors duration-100 hover:bg-slate-800"
        >
          <IconRenderer name="GearIcon" size={18} />
        </button>
      )}
    </>
  );
}
