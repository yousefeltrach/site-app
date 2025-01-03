import React from "react";
import NavigationSection from "./navigation-section";
import NewsletterForm from "./newsletter-form";
import SocialIcons from "./social-icons";
import Link from "next/link";
import { footerNavigation } from "@/data/footer-navigation";


const Footer: React.FC = () => {
  const navigation = footerNavigation;
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationSection
                title="Solutions"
                items={navigation.solutions}
              />
              <NavigationSection title="Support" items={navigation.support} />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <NavigationSection title="Company" items={navigation.company} />
              <NavigationSection title="Legal" items={navigation.legal} />
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-16 mx-auto max-w-7xl border-t border-muted-foreground/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-12">
          <SocialIcons />
          <p className="mt-8 text-sm text-muted-foreground md:order-1 md:mt-0">
           Made with ❤️ &copy; {new Date().getFullYear()}  Inc. - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
