import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// @ts-expect-error - TODO: Remove when used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
