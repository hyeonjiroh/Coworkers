'use client';

import { deleteGroup } from '@/lib/apis/group';
import { toast } from 'react-toastify';

export default function DeleteTeamButton() {
  const groupId = 2202;

  const handleDeleteTeam = async () => {
    try {
      await deleteGroup(groupId);

      toast.success('팀 삭제 성공');
    } catch (error) {
      console.error('Failed to delete team :', error);
      toast.error('팀 삭제 실패');
    }
  };

  return (
    <button
      type="button"
      onClick={handleDeleteTeam}
      className="bg-[#000000] text-[#ffffffff]"
    >
      팀 삭제
    </button>
  );
}
