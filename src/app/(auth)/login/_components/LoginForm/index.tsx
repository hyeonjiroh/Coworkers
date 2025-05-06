'use client';

import ForgotPasswordButton from '@/app/(auth)/login/_components/LoginForm/ForgotPasswordButton';
import InputWithLabel from '@/app/(auth)/login/_components/LoginForm/InputWithLabel';
import Button from '@/components/common/Button';
import { signIn } from '@/lib/apis/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleOpenModal = () => {
    // open password-find modal
  };

  // form submit
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid) return;

    //
    try {
      const res = await signIn({
        body: {
          email,
          password,
        },
      });
      console.log(res);
      toast.success('로그인 성공'); // test
    } catch (error) {
      if (error instanceof Error) {
        // 비밀번호가 일치하지 않는 경우
        if (error.message.includes('비밀번호')) {
          setFormErrors({
            email: '',
            password: error.message,
          });
          return;
        }
        // 가입되지 않은 유저일 경우
        if (error.message.includes('이메일')) {
          setFormErrors({
            email: error.message, // 존재하지 않는 이메일입니다.
            password: '',
          });
          return;
        }

        // Network Error
        console.error('Network Error', error);
        toast.error('예상치 못한 오류가 발생했습니다. ');
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">로그인</h1>

      <div className="flex flex-col gap-6">
        <InputWithLabel
          inputType="email"
          autoComplete="email"
          onValidChange={setIsEmailValid}
          onValueChange={setEmail}
          submitErrorMessage={formErrors.email}
        />

        <InputWithLabel
          inputType="password"
          autoComplete="current-password"
          onValidChange={setIsPasswordValid}
          onValueChange={setPassword}
          submitErrorMessage={formErrors.password}
        />
      </div>

      <ForgotPasswordButton onClick={handleOpenModal} />

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
        disabled={!(isEmailValid && isPasswordValid)}
      >
        로그인
      </Button>
    </form>
  );
}
