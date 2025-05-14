import UserIcon from '@/components/user/UserIcon';
import BreakEmail from '@/app/(team)/team/_components/MemberList/BreakEmail';
import TaskMenuButton from '@/components/task/TaskMenu/TaskMenuButton';
import { GroupResponse } from '@/lib/apis/group/type';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import {
  memberCardContainerStyle,
  memberCardItemWrapperStyle,
  memberCardTextWrapperStyle,
} from '@/app/(team)/team/_components/MemberList/styles';

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

  return (
    <div className={`${memberCardContainerStyle}`}>
      {/* 아이템 래퍼 */}
      <div className={`${memberCardItemWrapperStyle}`}>
        <div className="tablet:h-[33px] tablet:w-[146px] flex items-center gap-3">
          {/* 프로필 아이콘 */}
          <UserIcon image={userImage} responsive={true} />

          {/* 이름 + 이메일 */}
          <div className={`${memberCardTextWrapperStyle}`}>
            <p className="text-md-regular">{name}</p>
            <BreakEmail email={email} />
          </div>
        </div>

        {/* 메뉴 버튼 */}
        {isAdmin && <TaskMenuButton size="sm" />}
      </div>
    </div>
  );
};

export default MemberCard;
