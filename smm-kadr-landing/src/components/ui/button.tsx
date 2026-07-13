import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-slate-950 px-5 py-3 text-white shadow-[0_14px_36px_-16px_rgba(15,23,42,0.8)] hover:-translate-y-0.5 hover:bg-blue-700",
        primary:
          "bg-blue-600 px-5 py-3 text-white shadow-[0_14px_36px_-16px_rgba(37,99,235,0.9)] hover:-translate-y-0.5 hover:bg-blue-700",
        outline: "border border-slate-300 bg-white/70 px-5 py-3 text-slate-900 hover:border-blue-300 hover:bg-blue-50",
        ghost: "px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-950",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4",
        lg: "h-13 px-6 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
