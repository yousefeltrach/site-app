import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroContentProps {
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
}

export default function HeroContent({
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeroContentProps) {
  return (
    <div>
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
        {title}
      </h1>
      <p className="mt-8 text-lg sm:text-xl">{description}</p>
      <div className="mt-10 flex items-center justify-center gap-x-2">
        <Link href={primaryButton.href}>
          <Button
            variant="default"
            className="animate-pulse hover:animate-none hover:font-bold"
          >
            {primaryButton.text}
          </Button>
        </Link>
        <Link href={secondaryButton.href}>
          <Button variant="ghost">{secondaryButton.text}</Button>
        </Link>
      </div>
    </div>
  );
}
