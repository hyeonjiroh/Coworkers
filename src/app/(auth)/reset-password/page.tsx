import ResetPasswordForm from '@/app/(auth)/reset-password/ResetPasswordForm';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <div className="flex h-[calc(100vh-60px)] justify-center pt-[140px]">
      <div className="flex flex-col">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-400">로딩 중...</div>
          }
        >
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
