"use client";

import { Header, Main, Sidebar } from "@/components";

import { IComponentParams } from "./types";

export const Browser = ({ isVisible }: IComponentParams) => {
  if (!isVisible) return null;

  return (
    <div className="bg-[#242424] rounded-lg h-full">
      <Header />

      <div className="flex flex-col h-[90%] w-full bg-zinc-900">
        <div className="flex flex-1">
          <Sidebar />
          <Main />
        </div>

        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
      </div>
    </div>
  );
};
