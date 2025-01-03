"use client";

import React from "react";
import Link from "next/link";
import { MailIcon, PlayCircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

interface DropdownMenuProps {
  label: string;
  items: {
    name: string;
    href: string;
    description: string;
    icon: React.ElementType;
  }[];
  showFooter?: boolean;
}

export function DropdownMenu({ label, items, showFooter }: DropdownMenuProps) {
  return (
    <NavigationMenu className="rounded-xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center gap-2 rounded-xl">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-2 shadow-lg rounded-xl w-[300px] md:w-[400px] lg:w-[500px]">
            <ul className="grid gap-3">
              {items.map((item) => (
                <ListItem
                  key={item.name}
                  title={item.name}
                  href={item.href}
                  icon={item.icon}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
            {/* Footer Buttons */}
            {showFooter && (
              <div className="flex gap-2 mt-2 pt-2">
                <Button variant="secondary" className="w-full rounded-xl hover:bg-secondary hover:font-bold">
                  <span className="flex items-center gap-2">
                    <PlayCircleIcon className="h-6 w-6" />
                    Watch demo
                  </span>
                </Button>
                <Button variant="default" className="w-full rounded-xl hover:bg-primary hover:font-bold animate-pulse hover:animate-none">
                  <span className="flex items-center gap-2">
                    <MailIcon className="h-6 w-6" />
                    Join the waitlist
                  </span>
                </Button>
              </div>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  {
    title: string;
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
  }
>(({ title, href, icon: Icon, children }, ref) => {
  return (
    <li className="group hover:bg-secondary hover:font-bold rounded-lg">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className="flex items-center gap-4 p-1 rounded-lg transition-colors"
        >
          <div className="flex items-center justify-center rounded-xl">
            <Icon className="h-6 w-6 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
          </div>
          <div>
            <span className="block text-sm">
              {title}
            </span>
            <p className="text-xs text-muted-foreground group-hover:text-primary">{children}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
