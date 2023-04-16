"use client";

import { Fragment } from "react";
import { useTransition, animated } from "@react-spring/web";

import { useBrowserStore } from "@/store";

import { Browser, Button } from "@/components";

const SectionIntroduction = () => {
  const { isVisible, handleOpenBrowser, handleCloseBrowser } =
    useBrowserStore();

  const transition = useTransition(isVisible, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  });

  return (
    <Fragment>
      <section className="w-full h-full">
        {!isVisible ? (
          <Button
            type="button"
            variants="primary"
            title="Iniciar Spotify"
            onClick={handleOpenBrowser}
            aria-label="Botão para iniciar o spotify"
          />
        ) : (
          <Fragment>
            {transition((style, isOpen) => (
              <animated.div style={style} className="h-full">
                <Browser isVisible={isOpen} />
              </animated.div>
            ))}
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

export default SectionIntroduction;
