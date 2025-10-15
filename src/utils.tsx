import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const beutifyNumber = (v: number | string) => String(v).replace(".", ",");

export function highlightNumbers(text: string) {
  return text.split(/(\d+)/).map((part, i) =>
    /^\d+$/.test(part) ? (
      <span key={i} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}
