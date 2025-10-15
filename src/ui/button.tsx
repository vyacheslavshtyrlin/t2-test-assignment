import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../utils";

const buttonVariants = cva(
  "relative text-secondary cursor-pointer disabled:bg-muted disabled:cursor-not-allowed transition-colors duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90",
        selected: "bg-selected",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  extra?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, extra = null, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      children={
        <>
          <div className="bg-white">{children}</div>
          <div className="bg-inherit   flex white-space-pre-line items-center  font-normal text-xl  justify-center text-white w-20 h-20 rounded-full absolute bottom-6 right-6">
            {extra}
          </div>
        </>
      }
      {...props}
    />
  )
);
Button.displayName = "Button";
