'use client';

import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');

    toast.success('로그아웃 성공');
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="bg-[#000000] text-[#ffffffff]"
    >
      로그아웃
    </button>
  );
}
