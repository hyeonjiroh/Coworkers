'use client';

import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import TeamProfileForm from '@/app/(team)/_components/TeamProfileForm';
import { useMemberships } from '@/hooks/useMemberships';
import { useCreateGroup } from '@/hooks/useGroupQueries';

export default function AddTeamPage() {
  const router = useRouter();
  const { memberships } = useMemberships(true);
  const createGroup = useCreateGroup();

  const handleCreate = async ({
    name,
    file,
  }: {
    name: string;
    file?: File;
  }) => {
    const newGroup = await createGroup.mutateAsync({ name, file });
    if (newGroup?.id) {
      router.push(ROUTES.TEAM(newGroup.id));
    }
  };

  return (
    <div className="flex w-full justify-center pt-35">
      <TeamProfileForm
        existingNames={memberships.map((m) => m.group.name)}
        submitLabel="팀 생성하기"
        onSubmit={handleCreate}
      />
    </div>
  );
}
