'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';

export default function LoginForm() {
  const handleOpenModal = () => {
    // open password-find modal
  };

  const handleFormSubmit = () => {
    // form submit
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel inputType="email" autoComplete="email" />
        <InputWithLabel inputType="password" autoComplete="current-password" />
      </div>

      <ForgotPasswordButton onClick={handleOpenModal} />

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
      >
        로그인
      </Button>
    </form>
  );
}
