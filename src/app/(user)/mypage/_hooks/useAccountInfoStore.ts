import { create } from 'zustand';

interface AccountInfoState {
  name: string;
  setName: (name: string) => void;
}

export const useAccountInfoStore = create<AccountInfoState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
}));
