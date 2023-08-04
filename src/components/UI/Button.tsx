import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "flex gap-2 items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none hover:opacity-80",
  {
    variants: {
      variant: {
        default: "bg-systemGrey5 text-systemDarkGrey font-semibold",
        grey: "bg-systemGrey2 text-systemDarkGrey font-semibold",
        blue: "bg-systemBlue text-systemWhite font-semibold",
        blueBorder: "border-solid, border-b-2 p-2 text-xl",
      },
      size: {
        sm: "px-10 py-2",
        lg: "px-10 py-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ className, variant, size }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button, buttonVariants };
