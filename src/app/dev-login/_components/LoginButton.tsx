'use client';

import Cookies from 'js-cookie';
import { signIn } from '@/lib/apis/auth';
import { toast } from 'react-toastify';

export default function LoginButton() {
  const handleLogin = async () => {
    try {
      const data = await signIn({
        body: {
          email: 'test1111@email.com',
          password: 'test1111*',
        },
      });

      if (!data) return;

      const { accessToken, refreshToken, user } = data;

      Cookies.set('accessToken', accessToken, {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });

      Cookies.set('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });

      Cookies.set('userId', user.id.toString(), {
        path: '/',
        secure: true,
        sameSite: 'Strict',
      });

      toast.success('로그인 성공');
    } catch (error) {
      console.error('Failed to login :', error);
      toast.error('로그인 실패');
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="bg-[#000000] text-[#ffffffff]"
    >
      로그인
    </button>
  );
}
