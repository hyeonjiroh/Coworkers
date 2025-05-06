import Link from 'next/link';

export default function NavigateToSignUp() {
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <span className="text-lg-medium">아직 계정이 없으신가요?</span>
      <Link href={'/signup'} className="font-medium text-emerald-500 underline">
        가입하기
      </Link>
    </div>
  );
}
