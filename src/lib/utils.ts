import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
export function getBrightness(hexColor: string) {
    hexColor = hexColor.replace(/^#/, "");

    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);

    return (r * 299 + g * 587 + b * 114) / 1000;
  }