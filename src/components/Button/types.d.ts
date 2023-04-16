import { ButtonHTMLAttributes, ReactNode } from "react";

export type TVariants = "primary" | "contrast" | "outline";

export interface IComponentParams
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
  variants?: TVariants;
}
