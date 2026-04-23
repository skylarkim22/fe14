// src/components/Badge/index.tsx
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "secondary" | "destructive" | "outline";
  className?: string;
};

const badgeVariants = cva(
  "rounded-full bg-black px-2 py-1 text-xs font-medium text-white",
  {
    variants: {
      variant: {
        default: "bg-gray-800 text-white",
        secondary: "bg-gray-200 text-black",
        destructive: "bg-red-500 text-white",
        outline: "bg-transparent text-black border border-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default function Badge({ children, variant, className }: BadgeProps) {
  const badgeClass = twMerge(clsx(badgeVariants({ variant, className })));
  return <span className={badgeClass}>{children}</span>;
}
