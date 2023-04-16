"use client";
import Image from "next/image";

import loaderSource from "@/assets/loader.gif";

import { IComponentParams } from "./types";

/**
 * @param {string}  title - Parâmetro para o título do botão.
 * @param {boolean} [loading] - Parâmetro para informar que está carregando algo.
 * @param {TVariants} [variants] - Parâmetro para informar qual o tipo do botão.
 */

export const Button = ({
  title,
  loading,
  variants,
  ...restProps
}: IComponentParams) => {
  const renderCSS = () => {
    if (variants === "contrast") {
      return {
        background: "bg-slate-50",
        color: "text-gray-900",
      };
    } else if (variants === "outline") {
      return {
        background: "bg-transparent",
        color: "text-slate-400",
        border: "border-solid border-2 border-slate-400",
      };
    } else {
      return {
        background: "bg-[#1ed760]",
        color: "text-gray-900",
      };
    }
  };

  const renderContentInButton = () => {
    if (loading) {
      return (
        <Image src={loaderSource} alt="Ilustração animada de gravação de voz" />
      );
    } else {
      return (
        <span className={`text-base ${renderCSS().color}  font-semibold`}>
          {title}
        </span>
      );
    }
  };

  return (
    <button
      className={`${renderCSS().background} ${
        renderCSS()?.border
      }  h-14 w-56 flex items-center justify-center rounded hover:scale-110 ease-in duration-300`}
      {...restProps}
    >
      {renderContentInButton()}
    </button>
  );
};
