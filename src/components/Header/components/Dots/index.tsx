"use client";

import { useBrowserStore } from "@/store";

export const Dots = () => {
  const { handleCloseBrowser, handleStateFullBrowser } = useBrowserStore();

  return (
    <div className="flex items-center gap-3">
      <span
        aria-label="fechar navegador"
        onClick={handleCloseBrowser}
        className="rounded-full bg-red-500 h-3 w-3 cursor-pointer hover:bg-orange-300 ease-in duration-100"
      />

      <span
        arial-label="minimizar navegador"
        className="rounded-full bg-yellow-500 h-3 w-3 cursor-pointer hover:bg-yellow-300 ease-in duration-100"
      />

      <span
        onClick={handleStateFullBrowser}
        arial-label="maximizar o navegador"
        className="rounded-full bg-green-500 h-3 w-3 cursor-pointer hover:bg-green-300 ease-in duration-100"
      />
    </div>
  );
};
