import { useTransition, animated } from '@react-spring/web'

import { Header, Main, Sidebar } from "@/components";

import { IComponentParams } from "./types";
import { Fragment } from 'react';

export const Browser = ({ isVisible }: IComponentParams) => {
  const transitions = useTransition(isVisible, {
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
      {transitions((style, item) =>
        item && (
          <animated.div className="bg-[#242424] rounded-lg h-full" style={style}>
            <Header />

            <div className="flex flex-col h-[90%] w-full bg-zinc-900">
              <div className="flex flex-1">
                <Sidebar />
                <Main />
              </div>

              <footer className="bg-zinc-800 border-t border-zinc-700 p-6 rounded-b-lg">footer</footer>
            </div>
          </animated.div>
        )
      )}
    </Fragment>
  );
};
