import { create } from 'zustand';

interface PasswordState {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
}

export const usePasswordStore = create<PasswordState>((set) => ({
  passwordLength: 8,
  setPasswordLength: (length) => set({ passwordLength: length }),
}));
