import "./animations.scss";
import "./globals.scss";
import "swiper/css"
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollUp from "@/components/scroll-up";
import { defaultOpenGraph, SiteName, SiteURL } from "@/lib/metadata";

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable:'--font-playfair-display' })

export const metadata: Metadata = {
  metadataBase: new URL(SiteURL),
  title: {
    template: `%s | ${SiteName}`,
    default: `${SiteName} | India's Finest Merchant Exporter`,
  },
  description: "Exim Global, a excellence Merchant Exporter in India, excels in global trade. Explore our diverse product range for seamless solutions. Your trusted partner.",
  openGraph: {
    ...defaultOpenGraph,
    title: {
      template: "Exim Global | %s",
      default: `${SiteName} | India's Finest Merchant Exporter`,
    },
    description: "Exim Global, a excellence Merchant Exporter in India, excels in global trade. Explore our diverse product range for seamless solutions. Your trusted partner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable}`}>
        <Header />
        {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
