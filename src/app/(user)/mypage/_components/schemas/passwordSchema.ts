import { z } from 'zod';

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, '비밀번호는 필수 입력입니다.')
      .refine((value) => {
        const hasAlphabet = /[a-zA-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[^a-zA-Z0-9]/.test(value);
        return value.length >= 8 && hasAlphabet && hasNumber && hasSpecialChar;
      }, '비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다.'),
    passwordConfirmation: z.string().min(1, '비밀번호 확인은 필수 입력입니다.'),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        path: ['passwordConfirmation'],
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
      });
    }
  });

export type PasswordForm = z.infer<typeof passwordSchema>;
