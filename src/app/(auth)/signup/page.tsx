import SignupForm from '@/app/(auth)/signup/SignupForm';

export default function SignupPage() {
  return (
    <div className="tablet:py-[100px] h-[calc(100vh-60px)] px-4 py-20">
      <div className="m-auto flex max-w-[460px] flex-col">
        <SignupForm />
      </div>
    </div>
  );
}
