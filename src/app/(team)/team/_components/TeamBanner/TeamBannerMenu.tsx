import DropDown from '@/components/common/Dropdown';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { deleteGroupMemberById } from '@/lib/apis/group';
import { GroupResponse } from '@/lib/apis/group/type';
import { useModalStore } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { toast } from 'react-toastify';

interface TeamBannerMenuProps {
  group: GroupResponse;
  userId: number;
}

const TeamBannerMenu = ({ group, userId }: TeamBannerMenuProps) => {
  const router = useRouter();
  const isAdmin = useIsAdmin({ membersData: group.members, userId });
  const { openModal } = useModalStore();

  const handleTeamLeave = async () => {
    try {
      await deleteGroupMemberById({ groupId: group.id, memberId: userId });
      router.push(ROUTES.HOME);
      toast.success(`'${group.name}' 팀을 탈퇴했습니다.`);
    } catch (error) {
      console.error('탈퇴 실패', error);
      toast.error('탈퇴에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  const openTeamLeaveModal = () => {
    openModal({
      variant: 'danger',
      title: `'${group.name}' 팀에서 나가시겠어요?`,
      button: {
        number: 2,
        text: '확인',
        onRequest: () => handleTeamLeave(),
      },
    });
  };

  if (isAdmin) {
    return (
      <IconRenderer
        onClick={() => router.push(ROUTES.TEAM_EDIT(group.id))}
        name="GearIcon"
        className="cursor-pointer"
      />
    );
  }

  return (
    <DropDown>
      <DropDown.Trigger>
        <IconRenderer name="GearIcon" className="cursor-pointer" />
      </DropDown.Trigger>
      <DropDown.Menu align="right" className="mt-2 h-[40px] w-[120px]">
        <DropDown.Item
          onClick={openTeamLeaveModal}
          className="text-md-regular h-[38px] w-full"
        >
          탈퇴하기
        </DropDown.Item>
      </DropDown.Menu>
    </DropDown>
  );
};

export default TeamBannerMenu;
