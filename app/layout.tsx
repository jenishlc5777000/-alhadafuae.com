import type { Metadata } from "next";
import "./globals.css";
import "./hero-overrides.css";
import ClientHeroInjector from "./ClientHeroInjector";
import UseStickyHeader from "./useStickyHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hadafinteriors.com"),
  title: { default: "Al Hadaf | Concrete Restoration Company in Dubai", template: "%s | Al Hadaf" },
  description: "Concrete repair, structural strengthening, scanning and building maintenance across Dubai. Talk to Al Hadaf for a practical site assessment.",
  keywords: ["concrete restoration Dubai", "concrete repair Dubai", "structural strengthening Dubai", "concrete scanning Dubai", "building maintenance Dubai"],
  openGraph: { type: "website", locale: "en_AE", siteName: "Al Hadaf Concrete Restoration", title: "Concrete Restoration Company in Dubai", description: "Practical restoration. Stronger buildings. Better outcomes." },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ClientHeroInjector /><UseStickyHeader />{children}</body></html>;
}
