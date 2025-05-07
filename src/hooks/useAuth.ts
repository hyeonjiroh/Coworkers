'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

export function useAuth(): boolean {
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(!!Cookies.get('accessToken'));
  }, [pathname]);

  return isLogin;
}
