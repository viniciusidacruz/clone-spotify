"use client";

import { Header } from "@/components";

import { IComponentParams } from "./types";

export const Browser = ({ isVisible }: IComponentParams) => {
  if (!isVisible) return null;

  return (
    <div className="bg-[#242424] rounded-lg h-full">
      <Header />
    </div>
  );
};
