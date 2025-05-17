import UserIcon from '@/components/user/UserIcon';
import BreakEmail from '@/app/(team)/team/_components/MemberList/BreakEmail';
import MemberMenu from '@/app/(team)/team/_components/MemberList/MemberMenu';
import MemberProfileModal from '@/components/common/Modal/content/MemberProfileModal';
import { useModalStore } from '@/store/useModalStore';
import { GroupResponse } from '@/lib/apis/group/type';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import {
  memberCardContainerStyle,
  memberCardItemWrapperStyle,
  memberCardTextWrapperStyle,
} from '@/app/(team)/team/_components/MemberList/styles';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '@/constants/messages';

interface MemberCardProps {
  group: GroupResponse;
  name: string;
  email: string;
  userId: number;
  userImage: string | null;
}

const MemberCard = ({
  group,
  name,
  email,
  userId,
  userImage,
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
      <MemberProfileModal image={userImage} name={name} email={email} />
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
      {/* 아이템 래퍼 */}
      <div className={`${memberCardItemWrapperStyle}`}>
        <div className="tablet:h-[33px] tablet:w-[146px] flex items-center gap-3">
          {/* 프로필 아이콘 */}
          <UserIcon
            image={userImage}
            sizeClass="tablet:size-8 size-6"
            imageSize="32px"
          />

          {/* 이름 + 이메일 */}
          <div className={`${memberCardTextWrapperStyle}`}>
            <p className="text-md-regular">{name}</p>
            <BreakEmail email={email} />
          </div>
        </div>

        {/* 메뉴 버튼 */}
        {isAdmin && <MemberMenu />}
      </div>
    </div>
  );
};

export default MemberCard;
