"use client";

import { useState } from "react";
import { CTAButton } from "./cta-button";
import NavBar from "./nav-bar";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 justify-start">
          <Logo />
        </div>
        <NavBar />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CTAButton href="/" className="z-[99] animate-pulse hover:font-bold hover:animate-none rounded-xl mr-2">
            Contact Me
          </CTAButton>
          <ModeToggle />
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            className="rounded-3xl hover:bg-secondary font-bold"
          >
            <Menu className="h-8 w-8" />
          </Button>
        </div>
      </nav>
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
