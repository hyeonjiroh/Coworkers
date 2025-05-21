'use client';
import React from 'react';
import Image from 'next/image';
import { useModalStore } from '@/store/useModalStore';
import { useMutation } from '@tanstack/react-query';
import { deleteUser } from '@/lib/apis/user';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const SecessionButton = () => {
  const { openModal } = useModalStore();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      Cookies.remove('accessToken', { path: '/' });
      Cookies.remove('refreshToken', { path: '/' });
      Cookies.remove('userId', { path: '/' });

      toast.success('회원 탈퇴가 완료되었습니다.');
      router.push('/');
    },
    onError: () => {
      toast.error('회원 탈퇴에 실패했습니다.');
    },
  });

  const handleSecession = () => {
    openModal({
      variant: 'danger',
      title: '회원 탈퇴를 진행하시겠어요?',
      description:
        '그룹장으로 있는 그룹은 자동으로 삭제되고, 모든 그룹에서 나가집니다.',
      button: {
        number: 2,
        text: '회원 탈퇴',
        onRequest: () => {
          if (!isPending) {
            mutate();
          }
        },
      },
    });
  };

  return (
    <button
      className="text-danger text-lg-medium flex items-center gap-2"
      onClick={handleSecession}
      disabled={isPending}
    >
      <Image
        src="/image/secession_icon.svg"
        alt="회원 탈퇴 아이콘"
        width={24}
        height={24}
      />
      {isPending ? '탈퇴 중...' : '회원 탈퇴하기'}
    </button>
  );
};

export default SecessionButton;
