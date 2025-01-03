import { ForwardRefExoticComponent, SVGProps } from "react";

export interface Solution {
  name: string;
  description: string;
  href: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}

export interface CallToAction {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
}

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ElementType;
  isCTA?: boolean;
}

export interface FooterNavigation {
  title: string;
  items: NavItem[];
}
