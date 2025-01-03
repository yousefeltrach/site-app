import React from "react";
import Link from "next/link";
import { FooterNavigation } from "@/data/types";

const NavigationSection: React.FC<FooterNavigation> = ({
  title,
  items,
}) => {
  return (
    <div>
      <h3 className="text-sm font-bold mt-4">{title}</h3>
      <ul role="list" className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationSection;
