import { GroupMemberResponse } from '@/lib/apis/group/type';

interface useIsAdminProps {
  membersData: GroupMemberResponse[] | undefined;
  userId: number | undefined;
}

export const useIsAdmin = ({ membersData, userId }: useIsAdminProps) => {
  const userData = membersData?.find((member) => member.userId === userId);
  return Boolean(userData?.role === 'ADMIN');
};
