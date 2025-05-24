import CookieSetter from '@/app/(auth)/oauth/kakao/CookieSetter';

export default async function KakaoLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { code, state } = await searchParams;
  return <CookieSetter code={code as string} state={state as string} />;
}
