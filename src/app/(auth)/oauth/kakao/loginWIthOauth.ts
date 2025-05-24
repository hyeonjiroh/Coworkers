// server action
'use server';

import { CookieSetterProps } from '@/app/(auth)/oauth/kakao/CookieSetter';
import { cookies } from 'next/headers';

export default async function loginWithOauth({
  code,
  state,
}: CookieSetterProps) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signIn/KAKAO`;

  const responseBody = {
    state,
    redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI as string,
    token: code,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(responseBody),
    });
    console.log('response 응답', response);

    if (!response.ok) {
      throw new Error('간편 로그인 실패');
    }

    const data = await response.json();
    const { accessToken, refreshToken, user } = data;

    // 쿠키에 토큰과 userId 설정
    const cookieStore = cookies();

    cookieStore.set('accessToken', accessToken, {
      path: '/',
      secure: false,
      //httpOnly: true,
      sameSite: 'strict',
    });
    cookieStore.set('refreshToken', refreshToken, {
      path: '/',
      secure: false,
      // httpOnly: true,
      sameSite: 'strict',
    });
    cookieStore.set('userId', user.id.toString(), {
      path: '/',
      secure: false,
      // httpOnly: true,
      sameSite: 'strict',
    });
    console.log('로그인 성공:', data);
  } catch (error) {
    console.error('카카오 로그인 실패', error);
  }
}
