'use client';
import React, { useEffect } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/lib/apis/user';
import { UserResponse } from '@/lib/apis/user/type';
import { validateName } from '@/utils/inputValidation';
import PasswordChangeSection from '@/app/(user)/mypage/_components/PasswordChangeSection';
import { toast } from 'react-toastify';
import Skeleton from '@/components/common/Loading/Skeleton';

interface AccountInfoSectionProps {
  name: string;
  setName: (name: string) => void;
}

const AccountInfoSection = ({ name, setName }: AccountInfoSectionProps) => {
  const [email, setEmail] = React.useState('');
  const [nameError, setNameError] = React.useState<string | null>(null);

  const {
    data: userData,
    isLoading,
    error,
  } = useQuery<UserResponse | null>({
    queryKey: ['user'],
    queryFn: () => getUser({ tag: ['user'] }),
  });

  useEffect(() => {
    if (error) {
      toast.error('사용자 정보를 불러오지 못했습니다.');
    } else if (userData) {
      setName(userData.nickname || '');
      setEmail(userData.email || '');
    }
  }, [userData, error, setName]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (validateName(newName)) {
      setName(newName);
      setNameError(null);
    } else {
      setNameError('이름은 10자를 초과할 수 없습니다.');
    }
  };

  if (isLoading) {
    return (
      <div className="mb-6 flex w-full flex-col gap-4">
        <Skeleton height="48px" className="mt-3" />
        <Skeleton height="48px" className="mt-3" />
      </div>
    );
  }

  return (
    <div className="mb-6 flex w-full flex-col gap-4">
      <div>
        <InputBase
          title="이름"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="w-full"
          containerClassName="mt-3 h-[48px] bg-slate-800"
        />
        {nameError && (
          <div className="text-danger mt-1 text-sm">{nameError}</div>
        )}
      </div>
      <InputBase
        title="이메일"
        type="email"
        value={email}
        readOnly
        onChange={(e) => e.preventDefault()}
        className="w-full cursor-not-allowed"
        containerClassName="mt-3 h-[48px] cursor-not-allowed bg-slate-700"
      />
      <PasswordChangeSection />
    </div>
  );
};

export default AccountInfoSection;
