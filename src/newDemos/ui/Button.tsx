import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";


const buttonVariants = {
  default: "btn btn-primary",
  destructive: "btn btn-danger",
  outline: "btn btn-outline-secondary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-link",
  link: "btn btn-link",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    let sizeClass = "btn";
    if (size === "sm") sizeClass += " btn-sm";
    if (size === "lg") sizeClass += " btn-lg";
    
    return (
      <Comp
        className={clsx(
          `${buttonVariants[variant]} ${sizeClass} ${className}`
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };