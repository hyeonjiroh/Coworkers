import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { getUserGroups } from '@/lib/apis/user';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = cookies().get('accessToken')?.value;

  if (accessToken) {
    const userGroupsData = await getUserGroups({});
    const firstGroupId = userGroupsData?.[0]?.id;

    if (firstGroupId) {
      redirect(ROUTES.TEAM(firstGroupId));
    } else {
      redirect(ROUTES.TEAM_NO);
    }
  }

  return <>{children}</>;
}
