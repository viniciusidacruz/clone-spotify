"use client";

import { Fragment } from "react";

import { useBrowserStore } from "@/store";

import { Browser, Button } from "@/components";

const SectionIntroduction = () => {
  const { isVisible, handleOpenBrowser } = useBrowserStore();

  return (
    <Fragment>
      <section className="w-full h-full flex items-center justify-center">
        {!isVisible && (
          <Button
            type="button"
            variants="primary"
            title="Iniciar Spotify"
            onClick={handleOpenBrowser}
            aria-label="Botão para iniciar o spotify"
          />
        )}

        <Browser isVisible={isVisible} />
      </section>
    </Fragment>
  );
};

export default SectionIntroduction;
