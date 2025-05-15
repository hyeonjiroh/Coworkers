import ResetPasswordForm from '@/app/(auth)/reset-password/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <div className="flex h-[calc(100vh-60px)] justify-center pt-[140px]">
      <div className="flex flex-col">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
