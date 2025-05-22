'use client';

import { useRouter, useParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import TeamProfileForm from '@/app/(team)/_components/TeamProfileForm';
import { useModalStore } from '@/store/useModalStore';
import { useMemberships } from '@/hooks/useMemberships';
import {
  useDeleteGroup,
  useGroup,
  useUpdateGroup,
} from '@/hooks/useGroupQueries';
import Spinner from '@/components/common/Loading/Spinner';

export default function EditTeamPage() {
  const router = useRouter();
  const { teamid } = useParams();
  const id = Number(teamid);
  const { memberships } = useMemberships(true);
  const groupQuery = useGroup(id);
  const updateGroup = useUpdateGroup(id);
  const deleteGroup = useDeleteGroup(id);
  const { openModal } = useModalStore();

  if (groupQuery.isLoading) {
    return (
      <div className="mt-30 flex h-full w-full items-center justify-center">
        <Spinner size={48} />
      </div>
    );
  }

  if (groupQuery.isError || !groupQuery.data) {
    return <p>팀 정보를 가져오지 못했습니다.</p>;
  }

  const group = groupQuery.data;

  const handleEdit = async ({
    name,
    file,
    removeImage,
  }: {
    name: string;
    file?: File;
    removeImage?: boolean;
  }) => {
    await updateGroup.mutateAsync({ name, file, removeImage });
    router.replace(ROUTES.TEAM(id));
  };

  const handleDelete = async () => {
    await deleteGroup.mutateAsync();
    router.push(ROUTES.HOME);
  };

  const openDeleteTaskModal = () => {
    openModal({
      variant: 'danger',
      title: `'${group.name}'\n\n팀을 정말 삭제하시겠어요?`,
      description: '삭제 후에는 되돌릴 수 없습니다.',
      button: {
        number: 2,
        text: '삭제하기',
        onRequest: handleDelete,
      },
    });
  };

  return (
    <div className="flex w-full justify-center pt-[140px]">
      <div className="flex flex-col items-center">
        <TeamProfileForm
          existingNames={memberships
            .map((m) => m.group.name)
            .filter((n) => n !== group.name)}
          initialName={group.name}
          initialPreview={group.image ?? ''}
          submitLabel="팀 수정하기"
          onSubmit={handleEdit}
        />
        <button
          onClick={openDeleteTaskModal}
          className="mt-6 text-red-500 hover:underline"
        >
          팀 삭제하기
        </button>
      </div>
    </div>
  );
}
