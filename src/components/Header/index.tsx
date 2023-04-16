import { Dots, PrevNext } from "./components";

export const Header = () => {
  return (
    <header className="px-4 border-b border-zinc-700 h-16 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <Dots />

        <PrevNext />
      </div>
    </header>
  );
};
