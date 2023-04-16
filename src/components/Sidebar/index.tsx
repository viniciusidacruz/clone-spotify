import Link from "next/link";

import { MENUS, PLAYLISTS } from "./data";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-950 p-6">
      <nav className="space-y-4">
        {MENUS.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            className="text-zinc-200 flex items-center gap-3 text-sm font-semibold"
          >
            {menu.icon}
            {menu.title}
          </Link>
        ))}
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 overflow-auto h-60">
        {PLAYLISTS.map((play) => (
          <Link
            key={play.id}
            href={play.path}
            className="text-zinc-400 text-sm hover:text-zinc-100"
          >
            {play.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
