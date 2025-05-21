import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { patchPassword } from '@/lib/apis/user';
import { usePasswordStore } from '@/app/(user)/mypage/_hooks/usePasswordStore';
import {
  passwordSchema,
  type PasswordForm,
} from '@/app/(user)/mypage/_components/schemas/passwordSchema';

export const usePasswordChange = () => {
  const { setPasswordLength } = usePasswordStore();

  const methods = useForm<PasswordForm>({
    resolver: zodResolver(passwordSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const { handleSubmit, reset, getValues } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PasswordForm) => {
      return patchPassword({ body: data });
    },
    onSuccess: () => {
      toast.success('비밀번호가 성공적으로 변경되었습니다.');
      setPasswordLength(getValues('password')?.length || 8);
      reset();
    },
    onError: (error: unknown) => {
      let errorMessage = '비밀번호 변경에 실패했습니다.';
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      toast.error(errorMessage);
    },
  });

  const handleFormSubmit = (data: PasswordForm) => {
    if (!isPending) {
      mutate(data);
    }
  };

  return {
    methods,
    handleSubmit,
    handleFormSubmit,
    isPending,
  };
};
