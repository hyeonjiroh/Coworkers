import LoginButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/LoginButton';
import LogoutButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/LogoutButton';
import ModalButton from '@/app/(team)/team/[teamid]/task/[taskid]/_components/ModalButton';

export default function TaskDetailPage() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <LoginButton />
        <LogoutButton />
        <ModalButton />
      </div>
    </div>
  );
}
