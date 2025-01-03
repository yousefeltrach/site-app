import { forwardRef } from "react";
import Link from "next/link";
import { Button as ShadcnButton, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
  onClick?: () => void;
}

export const CTAButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  CTAButtonProps
>(({ href, children, className, ...props }, ref) => {
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <ShadcnButton ref={ref as any} className={cn(className)} {...props}>
          {children}
        </ShadcnButton>
      </Link>
    );
  }
  return (
    <ShadcnButton ref={ref as any} className={cn(className)} {...props}>
      {children}
    </ShadcnButton>
  );
});

CTAButton.displayName = "CTAButton";
