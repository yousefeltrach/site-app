import { NavItem } from "./types";

export const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ] as NavItem[],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
  ] as NavItem[],
  company: [
    { name: "Blog", href: "/blog" },
    { name: "Case studies", href: "/case-studies" },
    { name: "Manifesto", href: "/manifesto" },
  ] as NavItem[],
  legal: [
    { name: "Terms of service", href: "/terms" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "License", href: "/license" },
  ] as NavItem[],
};
