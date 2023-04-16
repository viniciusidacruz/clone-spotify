import { ButtonHTMLAttributes } from "react";

export type TVariants = "primary" | "contrast" | "outline";

export interface IComponentParams
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
  className?: string;
  variants?: TVariants;
}
