import Footer from "./footer/footer";
import Header from "./header/header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
