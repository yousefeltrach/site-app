import React from "react";
import Link from "next/link";

interface SocialIconProps {
  name: string;
  href: string;
  Icon: React.ElementType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, href, Icon }) => {
  return (
    <Link href={href} className="text-muted-foreground hover:text-primary">
      <span className="sr-only">{name}</span>
      <Icon className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
};

export default SocialIcon;
