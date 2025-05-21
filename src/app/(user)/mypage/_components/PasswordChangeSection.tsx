'use client';
import React from 'react';
import InputAuth from '@/components/common/Input/InputAuth';
import Button from '@/components/common/Button';
import { useModalStore } from '@/store/useModalStore';
import UpdatePasswordModal from '@/components/common/Modal/content/UpdatePasswordModal/index';
import { usePasswordStore } from '@/app/(user)/mypage/_hooks/usePasswordStore';
import { FormProvider } from 'react-hook-form';
import { usePasswordChange } from '@/app/(user)/mypage/_hooks/usePasswordChange';

const PasswordChangeSection = () => {
  const { openModal } = useModalStore();
  const { passwordLength } = usePasswordStore();
  const { methods, handleSubmit, handleFormSubmit } = usePasswordChange();
  const defaultPassword = '•'.repeat(passwordLength || 8);

  return (
    <FormProvider {...methods}>
      <div className="relative">
        <InputAuth
          id="current-password"
          title="비밀번호"
          value={defaultPassword}
          onValueChange={() => {}}
          readOnly
          placeholder="현재 비밀번호"
        />
        <Button
          variant="primary"
          styleType="filled"
          radius="sm"
          size="sm"
          className="absolute top-1/2 right-4 h-8 w-[74px]"
          onClick={() =>
            openModal(
              {
                title: '비밀번호 변경하기',
                button: {
                  number: 2,
                  text: '변경하기',
                  onRequest: () => handleSubmit(handleFormSubmit)(),
                },
              },
              <FormProvider {...methods}>
                <UpdatePasswordModal />
              </FormProvider>
            )
          }
        >
          변경하기
        </Button>
      </div>
    </FormProvider>
  );
};

export default PasswordChangeSection;
