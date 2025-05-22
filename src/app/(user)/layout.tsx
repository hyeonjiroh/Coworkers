import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = cookies().get('accessToken')?.value;

  if (!accessToken) {
    redirect(ROUTES.LOGIN);
  }

  return <>{children}</>;
}
