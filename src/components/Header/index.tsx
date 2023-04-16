import { MoreVertical } from "lucide-react";

import { FieldSearch } from "@/components";
import { Dots, PrevNext } from "./components";

export const Header = () => {
  return (
    <header className="px-4 border-b border-zinc-700 h-16 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Dots />

        <PrevNext />
      </div>

      <FieldSearch />

      <MoreVertical className="text-zinc-500 cursor-pointer hover:text-zinc-400 ease-in duration-100" />
    </header>
  );
};
