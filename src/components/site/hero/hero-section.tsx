"use client";

import HeroContent from "./hero-content";

export default function HeroSection() {
  return (
    <section className="relative px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-12 text-center">
        <HeroContent
          title="Launch your SaaS faster with xSaaS"
          description="Get your SaaS to market without the hassle of repetitive setup. xSaaS provides the essential tools and pre-built features you need, allowing you to focus on innovation and ship your product faster."
          primaryButton={{ text: "Join the waitlist", href: "#" }}
          secondaryButton={{ text: "Learn more", href: "#" }}
        />
      </div>
    </section>
  );
}
