'use client';

import InputBase from '@/components/common/Input/InputBase';
import { useModalStore } from '@/store/useModalStore';
import { validateEmail } from '@/utils/inputValidation';
import { useRef } from 'react';

export default function ResetPasswordModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setRequestBody, closeModal } = useModalStore.getState();

  return (
    <form
      id="reset-password-form"
      onSubmit={(e) => {
        e.preventDefault();

        // 유효성 검사
        const email = inputRef.current?.value.trim();
        if (!email || !validateEmail(email)) return;

        const requestBody = { email };
        setRequestBody(requestBody); // 상태 변경, useEffect 에서 api 호출 위해 필요

        // options.button?.onRequest?.(requestBody);
        closeModal();
      }}
    >
      <InputBase
        ref={inputRef}
        placeholder="이메일을 입력하세요."
        defaultValue="" // 초기값 설정
      />
    </form>
  );
}
