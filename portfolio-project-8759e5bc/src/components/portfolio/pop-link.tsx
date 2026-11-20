import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const popLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground font-semibold transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-background shadow-pop-sm hover:shadow-pop",
        primary: "bg-primary text-primary-foreground shadow-pop-sm hover:shadow-pop",
        accent: "bg-accent text-accent-foreground shadow-pop-sm hover:shadow-pop",
        outline: "bg-transparent text-foreground hover:bg-foreground hover:text-background",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type PopLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof popLinkVariants>;

export function PopLink({ className, variant, size, ...props }: PopLinkProps) {
  return <a className={cn(popLinkVariants({ variant, size }), className)} {...props} />;
}

export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-muted-foreground">
      <span className="text-highlight">{index}</span>
      <span className="h-px w-10 bg-current" />
      {children}
    </p>
  );
}
