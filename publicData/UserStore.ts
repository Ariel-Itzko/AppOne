import { create } from 'zustand';


type UserStore = {
  publicEmail: string;
  publicUserName: string;
  setPublicEmail: (publicEmail: string) => void;
  setPublicUserName: (publicUserName: string) => void;
};


export const useUserStore = create<UserStore>((set) => ({
  publicEmail: '',
  publicUserName: '',
  setPublicEmail: (publicEmail) => set({ publicEmail }),
  setPublicUserName: (publicUserName) => set({ publicUserName }),
}));