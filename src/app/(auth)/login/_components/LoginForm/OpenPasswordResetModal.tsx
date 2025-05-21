'use client';

import ResetPasswordModal from '@/components/common/Modal/content/ResetPasswordModal';
import { postResetPasswordToEmail } from '@/lib/apis/user';
import { ResetPasswordToEmailBody } from '@/lib/apis/user/type';
import { useModalStore } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function OpenPasswordResetModal({ ...props }) {
  const { openModal } = useModalStore();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = useModalStore.subscribe(
      (state) => state.requestBody, // selector
      // listener
      (newRequestBody) => {
        if (!newRequestBody) return;
        const { email } = newRequestBody as { email: string };

        if (!email) return;

        const requestBody = {
          email,
          redirectUrl: `${window.location.origin}/`,
        };
        handleSendResetPasswordLink(requestBody);
      }
    );
    return () => {
      unsubscribe(); // 언마운트, 구독 해제
    };
  }, []);

  // send reset password link
  const handleSendResetPasswordLink = async (
    requestBody: ResetPasswordToEmailBody
  ) => {
    try {
      const response = await postResetPasswordToEmail({ body: requestBody });

      if (!response) {
        throw new Error('204 : No Content');
      }
      toast.success('비밀번호 재설정 링크가 전송되었습니다.');
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;

        // 존재하지 않는 유저 : User not found
        if (errorMessage.includes('User not found')) {
          toast.error('존재하지 않는 이메일입니다. 회원가입을 먼저 해주세요.');
          router.push('/signup');
        } else {
          toast.error(`Error : ${error}`);
        }
      }
    }
  };

  return (
    <div className="mt-3 mb-10 flex justify-end">
      <button
        className="leading-normal font-medium text-emerald-500 underline"
        type="button"
        onClick={() => {
          openModal(
            {
              title: '비밀번호 재설정',
              description: '비밀번호 재설정 링크를 보내드립니다.',
              button: {
                formId: 'reset-password-form', // formId 연결
                number: 2,
                text: '링크 보내기',
                // 기존 모달 컴포넌트의 onRequest 호출 방식과의 일관성을 위해 빈 함수 전달
                onRequest: () => {},
              },
            },

            (() => <ResetPasswordModal />)()
          );
        }}
        {...props}
      >
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}
