import { create } from 'zustand';
import { ReactNode } from 'react';
import { subscribeWithSelector } from 'zustand/middleware';

interface ModalOptions {
  variant?: 'default' | 'danger' | 'taskForm';
  title?: string;
  description?: string;
  button?: {
    number: 1 | 2;
    text: string;
    onRequest: (body?: unknown) => void;
    formId?: string; // 외부 form 과 연결하기 위한 HTML form 속성
  };
}

interface ModalState {
  options: ModalOptions;
  content: ReactNode | (() => ReactNode) | null;
  requestBody: unknown;
  setRequestBody: (body: unknown) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (isValid: boolean) => void;
  openModal: (
    options: ModalOptions,
    content?: ReactNode | (() => ReactNode) // 함수형 컴포넌트 호출(IIFE) 지원 위한 타입 확장
  ) => void;
  closeModal: () => void;
}

export const useModalStore = create<
  ModalState,
  [['zustand/subscribeWithSelector', never]]
>(
  subscribeWithSelector((set) => ({
    options: {},
    content: null,
    requestBody: null,
    setRequestBody: (body) => set({ requestBody: body }),
    isButtonDisabled: false,
    setIsButtonDisabled: (isButtonDisabled) => set({ isButtonDisabled }),
    openModal: (options, content) => {
      const resolvedContent =
        typeof content === 'function' ? content() : content; // 함수형 content 처리 (IIFE)
      set({ options, content: resolvedContent });
    },

    closeModal: () =>
      set({
        options: {},
        content: null,
        requestBody: null,
        isButtonDisabled: false,
      }),
  }))
);
