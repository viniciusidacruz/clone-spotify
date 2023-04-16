import { create } from "zustand";

type BrowserStore = {
  isVisible: boolean;
  isFullBrowser: boolean;
  handleOpenBrowser: () => void;
  handleCloseBrowser: () => void;
  handleStateFullBrowser: () => void;
};

export const useBrowserStore = create<BrowserStore>((set, getState) => ({
  isVisible: false,
  isFullBrowser: false,
  handleOpenBrowser: () => set({ isVisible: true }),
  handleCloseBrowser: () => set({ isVisible: false }),
  handleStateFullBrowser: () =>
    set({ isFullBrowser: !getState().isFullBrowser }),
}));
