import LoginForm from '@/app/(auth)/login/_components/LoginForm';
import NavigateToSignUp from '@/app/(auth)/login/_components/NavigateToSignUp';
import SocialLogin from '@/app/(auth)/login/_components/SocialLogin';

export default function LoginPage() {
  return (
    <div className="laptop:py-[140px] tablet:py-[100px] h-[calc(100vh-60px)] px-4 py-20">
      <div className="m-auto flex max-w-[460px] flex-col">
        <LoginForm />
        <NavigateToSignUp />
        <SocialLogin />
      </div>
    </div>
  );
}
