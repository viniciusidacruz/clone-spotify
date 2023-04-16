import { create } from "zustand";

type BrowserStore = {
  isVisible: boolean;
  handleOpenBrowser: () => void;
  handleCloseBrowser: () => void;
};

export const useBrowserStore = create<BrowserStore>((set) => ({
  isVisible: false,
  handleOpenBrowser: () => set({ isVisible: true }),
  handleCloseBrowser: () => set({ isVisible: false }),
}));
