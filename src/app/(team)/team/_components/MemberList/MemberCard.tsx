import UserIcon from '@/components/user/UserIcon';
import MemberMenu from '@/app/(team)/team/_components/MemberList/MemberMenu';
import MemberProfileModal from '@/components/common/Modal/content/MemberProfileModal';
import { useModalStore } from '@/store/useModalStore';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { GroupResponse } from '@/lib/apis/group/type';
import {
  memberCardContainerStyle,
  memberCardItemWrapperStyle,
  memberCardProfileWrapperStyle,
  memberCardNameStyle,
  memberCardEmailStyle,
} from '@/app/(team)/team/_components/MemberList/styles';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '@/constants/messages';

interface MemberCardProps {
  group: GroupResponse;
  name: string;
  email: string;
  memberId: number;
  userId: number;
  profileImage: string | null;
  onDelete: (memberId: number) => void;
}

const MemberCard = ({
  group,
  name,
  email,
  memberId,
  userId,
  profileImage,
  onDelete,
}: MemberCardProps) => {
  const isAdmin = useIsAdmin({ membersData: group.members, userId });

  const { openModal } = useModalStore();
  const openMemberProfileModal = () => {
    openModal(
      {
        button: {
          number: 1,
          text: '이메일 복사하기',
          onRequest: () => {
            navigator.clipboard
              .writeText(email)
              .then(() => {
                toast.success(TOAST_MESSAGES.clipboard.copyEmailSuccess);
              })
              .catch((error) => {
                console.log('이메일 복사 실패', error);
                toast.error(TOAST_MESSAGES.clipboard.copyEmailFail);
              });
          },
        },
      },
      <MemberProfileModal image={profileImage} name={name} email={email} />
    );
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={openMemberProfileModal}
      onKeyDown={(e) => {
        if (e.key === 'enter' || e.key === '') openMemberProfileModal();
      }}
      className={`${memberCardContainerStyle}`}
    >
      {/* left item */}
      <div className={`${memberCardItemWrapperStyle}`}>
        {/* 프로필 아이콘 */}
        <div className={`${memberCardProfileWrapperStyle}`}>
          <UserIcon
            image={profileImage}
            sizeClass="tablet:size-8 size-6"
            imageSize="32px"
          />
        </div>
        {/* 이름 */}
        <p className={`${memberCardNameStyle}`}>{name}</p>
        {/* 이메일 */}
        <p className={`${memberCardEmailStyle}`}>{email}</p>
      </div>
      {/* 메뉴 버튼 */}
      {isAdmin && userId !== memberId && (
        <MemberMenu memberId={memberId} name={name} onDelete={onDelete} />
      )}
    </div>
  );
};

export default MemberCard;
