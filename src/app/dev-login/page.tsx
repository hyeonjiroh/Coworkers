import LoginButton from '@/app/dev-login/_components/LoginButton';
import LogoutButton from '@/app/dev-login/_components/LogoutButton';

export default function DevLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}
