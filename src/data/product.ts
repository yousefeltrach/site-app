import { Boxes, SparklesIcon, ChartPieIcon } from "lucide-react";
import { Solution } from "./types";
import { CubeIcon, SquaresPlusIcon } from "@heroicons/react/20/solid";

export const products: Solution[] = [
  {
    name: "Fixed Bundle",
    description: "Create fixed product bundles to boost your sales and AOV.",
    href: "#",
    icon: CubeIcon,
  },
  {
    name: "Multipack Bundle",
    description: "Offer multi-pack bundles for bulk purchases and discounts.",
    href: "#",
    icon: Boxes,
  },
  {
    name: "Mix & Match Bundle",
    description: "Let customers customize their bundles with flexible options.",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Frequently Bought Together",
    description: "Recommend complementary products using AI.",
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Analytics",
    description: "Track bundle performance with detailed insights and reports.",
    href: "#",
    icon: ChartPieIcon,
  },
];
