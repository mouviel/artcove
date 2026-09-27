import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Shantell_Sans } from "next/font/google";
import { social } from "@/lib/metadata";
import { site } from "@/lib/site";
import "./globals.css";

const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
});

const shantell = Shantell_Sans({
  variable: "--font-shantell",
  subsets: ["latin"],
  axes: ["INFM", "BNCE"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["commission tracker", "art commissions", "commission queue", "artist invoice", "Discord commissions", "Windows app"],
  // Fallback for pages without their own; pages call social() with their url.
  ...social({ url: "/" }),
};

export const viewport: Viewport = {
  themeColor: "#f3f5f8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${familjen.variable} ${shantell.variable} antialiased`}>
      <body className="min-h-dvh bg-paper font-sans text-graphite">{children}</body>
    </html>
  );
}
