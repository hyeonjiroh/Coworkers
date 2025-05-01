import LoginForm from '@/app/(auth)/login/_components/LoginForm';
import NavigateToSignUp from '@/app/(auth)/login/_components/NavigateToSignUp';
import SocialLogin from '@/app/(auth)/login/_components/SocialLogin';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        <LoginForm />
        <NavigateToSignUp />
        <SocialLogin />
      </div>
    </div>
  );
}
// 브라우저, 서버 쿠키 모두에 저장한다 (accessToken)
// 브라우저, 서버 쿠키 모두 (accessToken, refreshToken)
