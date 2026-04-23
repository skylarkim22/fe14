import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function Input({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  const baseStyle =
    "w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs";
  const mergedClass = twMerge(clsx(baseStyle, className));

  return <input type={type} className={mergedClass} {...props} />;
}
