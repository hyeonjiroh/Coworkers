import SignupForm from '@/app/(auth)/signup/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex h-[calc(100vh-60px)] items-center justify-center">
      <div className="flex flex-col">
        <SignupForm />
      </div>
    </div>
  );
}
