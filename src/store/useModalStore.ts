import { create } from 'zustand';
import { ReactNode } from 'react';

interface ModalOptions {
  variant?: 'default' | 'danger' | 'taskForm';
  title?: string;
  description?: string;
  button?: {
    number: 1 | 2;
    text: string;
    onRequest: (body?: unknown) => void;
  };
}

interface ModalState {
  options: ModalOptions;
  content: ReactNode | null;
  requestBody: unknown;
  setRequestBody: (body: unknown) => void;
  isButtonDisabled: boolean;
  setIsButtonDisabled: (isValid: boolean) => void;
  openModal: (options: ModalOptions, content?: ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  options: {},
  content: null,
  requestBody: null,
  setRequestBody: (body) => set({ requestBody: body }),
  isButtonDisabled: false,
  setIsButtonDisabled: (isButtonDisabled) => set({ isButtonDisabled }),
  openModal: (options, content) => set({ options, content }),
  closeModal: () =>
    set({
      options: {},
      content: null,
      requestBody: null,
      isButtonDisabled: false,
    }),
}));
