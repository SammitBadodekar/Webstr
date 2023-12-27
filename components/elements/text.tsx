import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const TextVariants = cva("", {
  variants: {
    variant: {
      default: "",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Text = ({
  props,
}: {
  props: {
    content: string;
    size: "default" | "sm" | "lg";
    className: string;
    color: string;
    font: string;
  };
}) => {
  const { content, size, className, color, font } = props;

  return (
    <div className={cn(TextVariants({ size, className }), `text-[${color}]`)}>
      {content}
    </div>
  );
};

export default Text;
