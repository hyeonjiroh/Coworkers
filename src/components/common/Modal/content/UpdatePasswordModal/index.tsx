'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import InputAuth from '@/components/common/Input/InputAuth';

interface PasswordForm {
  password: string;
  passwordConfirmation: string;
}

const UpdatePasswordModal = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<PasswordForm>();

  const getErrorMessages = (error: unknown): string | undefined => {
    if (!error) return undefined;
    if (typeof error === 'string') return error;
    if (
      typeof error === 'object' &&
      error &&
      'message' in error &&
      typeof error.message === 'string'
    ) {
      return error.message;
    }
    return undefined;
  };

  return (
    <div className="flex flex-col gap-4">
      <InputAuth
        id="password"
        title="새 비밀번호"
        {...register('password')}
        pattern="password"
        invalidMessage={
          getErrorMessages(errors.password) ||
          '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.'
        }
        placeholder="새 비밀번호를 입력해주세요."
      />
      <InputAuth
        id="passwordConfirmation"
        title="비밀번호 확인"
        {...register('passwordConfirmation')}
        pattern="passwordMatch"
        invalidMessage={
          getErrorMessages(errors.passwordConfirmation) ||
          '비밀번호가 일치하지 않습니다.'
        }
        placeholder="비밀번호를 다시 한 번 입력해주세요."
      />
    </div>
  );
};

export default UpdatePasswordModal;
