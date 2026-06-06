
// store/useMenuStore.js
import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
