import LoginButton from './_components/LoginButton';
import LogoutButton from './_components/LogoutButton';
import ModalButton from '@/app/(team)/team/[teamid]/tasklist/_components/ModalButton';

export default function TaskListPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <LoginButton />
      <LogoutButton />
      <ModalButton />
    </div>
  );
}
