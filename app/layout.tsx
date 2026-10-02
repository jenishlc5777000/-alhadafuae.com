import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import Reveal from "./components/Reveal";
import Effects from "./components/Effects";
import { site } from "./lib/content";

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });
const serif = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Al Hadaf | Concrete Restoration Company in Dubai", template: "%s | Al Hadaf" },
  description: "Concrete repair, structural strengthening, scanning and building maintenance across Dubai. Talk to Al Hadaf for a practical site assessment.",
  keywords: ["concrete restoration Dubai", "concrete repair Dubai", "structural strengthening Dubai", "concrete scanning Dubai", "building maintenance Dubai"],
  openGraph: { type: "website", locale: "en_AE", siteName: site.name, title: "Concrete Restoration Company in Dubai", description: "Practical restoration. Stronger buildings. Better outcomes." },
  alternates: { canonical: "/" },
  icons: { icon: "/al-hadaf-logo.svg" },
};

export const viewport: Viewport = { themeColor: "#181413", width: "device-width", initialScale: 1 };

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: "+971582227430",
  email: site.email,
  description: "Concrete restoration, repair, structural strengthening, scanning and building maintenance in Dubai.",
  address: { "@type": "PostalAddress", streetAddress: "Office No 12, 30th Floor, Al Moosa Tower, Opposite Emirates Tower", addressLocality: "Dubai", addressCountry: "AE" },
  areaServed: "Dubai",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">
          <span id="top" />
          {children}
          <ContactSection />
        </main>
        <SiteFooter />
        <Reveal />
        <Effects />
      </body>
    </html>
  );
}
