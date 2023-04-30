"use client";

import Link from "next/link";
import { ArrowDownCircle, Plus } from "lucide-react";

import { usePlaylistStore } from "@/store/playlist";

import { Logo } from "@/components";

import { MENUS } from "./data";

export const Sidebar = () => {
  const { playlists, handleAddNewPlaylist } = usePlaylistStore();

  return (
    <aside className="w-64 bg-zinc-950 p-6 flex flex-col">
      <Logo />
      <nav className="space-y-4 mt-8">
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
      <button
        type="button"
        onClick={() => handleAddNewPlaylist()}
        aria-label="Criar uma nova playlist"
        className="flex items-center gap-4 mt-10 text-zinc-400 hover:text-zinc-50 ease-in duration-100"
      >
        <Plus className="text-slate-900 p-1 gap-3 h-5 w-5 justify-center rounded-sm bg-gray-400" />

        <span className=" text-sm font-bold">Criar Playlist</span>
      </button>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2 overflow-auto h-60">
        {playlists.map((play) => (
          <Link
            key={play.id}
            href={play.id}
            className="text-zinc-400 text-sm hover:text-zinc-100"
          >
            {play.title}
          </Link>
        ))}
      </nav>

      <footer className="mt-auto">
        <Link
          target="_blank"
          href="https://spotify.com/download"
          className="flex text-center gap-3 text-neutral-50 hover:text-zinc-400 ease-in duration-100"
          aria-label="Baixar o programa do spotify para o Desktop"
        >
          <ArrowDownCircle />

          <span className="font-bold text-sm">Instalar o aplicativo</span>
        </Link>
      </footer>
    </aside>
  );
};
