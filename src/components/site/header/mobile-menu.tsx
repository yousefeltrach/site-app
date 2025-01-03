"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { CTAButton } from "./cta-button";
import Link from "next/link";
import { resources } from "@/data/resources";
import { products } from "@/data/product";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent
        side="left"
        className="flex w-full max-w-sm flex-col px-6 py-6 overflow-auto"
      >
        <SheetHeader className="flex items-center justify-between">
          {/* Header without Logo or Close Button */}
        </SheetHeader>

        <div className="mt-8 flow-root">
          {/* Features Section */}
          <div>
            <Button
              variant="ghost"
              onClick={toggleFeatures}
              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-secondary"
            >
              Features
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isFeaturesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </Button>
            <motion.div
              initial={false}
              animate={{ height: isFeaturesOpen ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 space-y-2">
                {products.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg py-1 pl-3 pr-1 text-xs font-medium leading-4 no-underline hover:bg-secondary"
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Resources Section */}
          <div className="mt-4">
            <Button
              variant="ghost"
              onClick={toggleResources}
              className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-secondary"
            >
              Resources
              <ChevronDown
                className={`h-5 w-5 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </Button>
            <motion.div
              initial={false}
              animate={{ height: isResourcesOpen ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="mt-2 space-y-2">
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg py-1 pl-3 pr-1 text-xs font-medium leading-4 no-underline hover:bg-secondary"
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Links */}
          <div className="mt-3 space-y-2">
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 no-underline hover:bg-secondary"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 no-underline hover:bg-secondary"
            >
              Docs
            </Link>
          </div>
        </div>

        {/* Call to Action Button */}
        <div>
          <CTAButton className="w-full animate-pulse hover:animate-none hover:font-bold rounded-xl">
            Join the waitlist
          </CTAButton>
        </div>

        {/* Mode Toggle */}
        <div className="mt-auto">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
