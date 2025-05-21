import { create } from 'zustand';

interface ProfileImageState {
  previewUrl: string | null;
  setPreviewUrl: (url: string | null) => void;
}

export const useProfileImageStore = create<ProfileImageState>((set) => ({
  previewUrl: null,
  setPreviewUrl: (url) => set({ previewUrl: url }),
}));
