"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PrevNext = () => {
  const { back } = useRouter();

  return (
    <div className="flex items-center gap-3">
      <span className="rounded-md h-7 w-7 flex items-center justify-center bg-g bg-[#2e2e2e] cursor-pointer">
        <ChevronLeft className="text-zinc-500 hover:text-zinc-400 ease-in duration-100" onClick={() => back()} />
      </span>

      <span className="rounded-md h-7 w-7 flex items-center justify-center bg-g bg-[#2e2e2e] cursor-pointer">
        <ChevronRight className="text-zinc-500 hover:text-zinc-400 ease-in duration-100" />
      </span>
    </div>
  );
};
