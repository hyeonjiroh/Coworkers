'use client';

import InputWithLabel from '@/components/auth/InputWithLabel';
import Button from '@/components/common/Button';
import {
  validatePassword,
  validatePasswordConfirm,
} from '@/utils/inputValidation';
import { useMemo, useState } from 'react';
import { z } from 'zod';

// reset password schema
const resetPasswordSchema = z
  .object({
    password: z.string(),
    passwordConfirm: z.string(),
  })

  .superRefine((val, ctx) => {
    const { password, passwordConfirm } = val;

    if (!password) {
      // 비밀번호가 비어있음
      ctx.addIssue({
        path: ['password'],
        code: z.ZodIssueCode.custom,
        message: '비밀번호는 필수 입력입니다.',
        fatal: true, // 조건 실패 시, 유효성 검사 중단
      });
    } else if (!validatePassword(password)) {
      // 비밀번호가 입력은 되었지만, 유효하지 않음
      ctx.addIssue({
        path: ['password'],
        code: z.ZodIssueCode.custom,
        message:
          '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.',
      });
    }

    if (!passwordConfirm) {
      // 비밀번호 확인이 비어있는 경우
      ctx.addIssue({
        path: ['passwordConfirm'],
        code: z.ZodIssueCode.custom,
        message: '비밀번호 확인은 필수 입력입니다.',
        fatal: true,
      });
    } else if (!validatePasswordConfirm({ password, passwordConfirm })) {
      // 비밀번호 확인이 입력은 되었지만, 비밀번호와 일치하지 않음
      ctx.addIssue({
        path: ['passwordConfirm'],
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
      });
    }
  });

export default function ResetPasswordForm() {
  const [formValues, setFormValues] = useState<{
    password: string;
    passwordConfirm: string;
  }>({
    password: '',
    passwordConfirm: '',
  });
  const [formErrors, setFormErrors] = useState<{
    password: string[] | undefined;
    passwordConfirm: string[] | undefined;
  }>({
    password: [],
    passwordConfirm: [],
  });

  const isFormValid = useMemo(() => {
    return (
      formValues.password !== '' &&
      formValues.passwordConfirm !== '' &&
      (formErrors.password?.length ?? 0) === 0 &&
      (formErrors.passwordConfirm?.length ?? 0) === 0
    );
  }, [formValues, formErrors]);

  const handleInputChange =
    (key: 'password' | 'passwordConfirm') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFormValues = { ...formValues, [key]: e.target.value };
      const result = resetPasswordSchema.safeParse(newFormValues);

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setFormErrors((prev) => ({
          ...prev,
          [key]: fieldErrors[key],
        }));
      } else {
        setFormErrors((prev) => ({
          ...prev,
          [key]: '',
        }));
      }
      setFormValues(newFormValues);
    };

  const handleFormSubmit = () => {
    console.log('form submit');
    setFormErrors({
      password: [],
      passwordConfirm: [],
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-4xl-medium mb-20 text-center">비밀번호 재설정</h1>

      <div className="mb-10 flex flex-col gap-6">
        <InputWithLabel
          inputType="password"
          errorMessage={formErrors.password}
          mode="resetPasswordPage"
          onChange={handleInputChange('password')}
        />
        <InputWithLabel
          inputType="passwordConfirm"
          errorMessage={formErrors.passwordConfirm}
          mode="resetPasswordPage"
          onChange={handleInputChange('passwordConfirm')}
        />
      </div>

      <Button
        size="lg"
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-[460px]"
        disabled={!isFormValid}
      >
        재설정
      </Button>
    </form>
  );
}
