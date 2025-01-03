"use client";

import Link from "next/link";
import { DropdownMenu } from "./dropdown-menu";
import { products } from "@/data/product";
import { resources } from "@/data/resources";

export default function NavBar() {
  return (
    <div className="hidden lg:flex lg:gap-x-8 items-center">
      <DropdownMenu items={products} label="Features" showFooter />
      <DropdownMenu items={resources} label="Resources" />
      <Link
        href="/skills"
        className="text-sm font-semibold leading-6 px-4 py-2 rounded-xl hover:bg-secondary hover:text-primary transition-colors"
      >
        About
      </Link>
      <Link
        href="/skills"
        className="text-sm font-semibold leading-6 px-4 py-2 rounded-xl hover:bg-secondary hover:text-primary transition-colors"
      >
        Experience
      </Link>
      <Link
        href="/skills"
        className="text-sm font-semibold leading-6 px-4 py-2 rounded-xl hover:bg-secondary hover:text-primary transition-colors"
      >
        Skills
      </Link>
      <Link
        href="#"
        className="text-sm font-semibold leading-6 px-4 py-2 rounded-xl hover:bg-secondary hover:text-primary transition-colors"
      >
        Project
      </Link>
    </div>
  );
}
