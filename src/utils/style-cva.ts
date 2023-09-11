import { twMerge } from "tailwind-merge";

export function style(args: object, cvas: Function) {
  return twMerge(cvas(args));
}
