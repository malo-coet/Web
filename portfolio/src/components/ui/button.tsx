"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none border-2 text-sm font-mono font-semibold uppercase tracking-[0.18em] transition duration-75 active:translate-x-[4px] active:translate-y-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border)] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "border-[#739518] bg-[#262826] text-[#739518] shadow-[4px_4px_0_0_#739518] hover:bg-[#739518] hover:text-[#262826] active:shadow-none",
        outline:
          "border-[#4E5245] bg-transparent text-[#A2A989] shadow-[4px_4px_0_0_#4E5245] hover:bg-[#4E5245]/30 hover:text-[#A2A989] active:shadow-none",
        ghost:
          "border-transparent bg-transparent text-[#A2A989] hover:bg-[#4E5245]/30 active:shadow-none",
        subtle:
          "glass-button text-[#A2A989] shadow-[4px_4px_0_0_#4E5245] hover:bg-[#4E5245]/30 active:shadow-none",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
