import SiteLayout from "@/components/site/site-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
