'use client';

import { toast } from 'react-toastify';

import { postGroups } from '@/lib/apis/group';

export default function CreateTeamButton() {
  const handleCreateTeam = async () => {
    try {
      const data = await postGroups({
        name: 'Test',
      });

      if (!data) return;

      const { id } = data;

      toast.success(id);
    } catch (error) {
      console.error('Failed to create team :', error);
      toast.error('팀 생성 실패');
    }
  };

  return (
    <button
      type="button"
      onClick={handleCreateTeam}
      className="bg-[#000000] text-[#ffffffff]"
    >
      팀 생성
    </button>
  );
}
