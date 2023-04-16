"use client";

import Image from "next/image";

import spotifySource from "@/assets/spotify.svg";

import { useBrowserStore } from "@/store";

import { Browser, Button } from "@/components";

const SectionIntroduction = () => {
  const { isVisible, handleOpenBrowser, isFullBrowser } = useBrowserStore();

  return (
    <main className={`${isFullBrowser ? "p-0" : "p-5"} h-screen w-full`}>
      <section className="w-full h-full relative">
        {!isVisible ? (
          <div className="flex items-center justify-center h-full">
            <Button
              icon={
                <Image
                  src={spotifySource}
                  alt="Logo ofícial do Spotify em cor preta"
                />
              }
              type="button"
              variants="primary"
              title="Iniciar Spotify"
              onClick={handleOpenBrowser}
              aria-label="Botão para iniciar o spotify"
            />
          </div>
        ) : (
          <Browser isVisible={isVisible} />
        )}
      </section>
    </main>
  );
};

export default SectionIntroduction;
