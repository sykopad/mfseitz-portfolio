import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Faiz Seitz — AI Engineer & Full-Stack Systems Architect",
  description: "Portfolio of Muhammed Faiz Seitz: 15+ full-stack software systems, civic intelligence platforms, and 37 autonomous cloud scrapers. Based in Durban, South Africa.",
  keywords: [
    "Muhammed Faiz Seitz",
    "AI Engineer",
    "Full-Stack Architect",
    "Next.js",
    "Durban",
    "South Africa",
    "Civic Tech",
    "Apify Scrapers",
    "Supabase",
    "PostGIS"
  ],
  authors: [{ name: "Muhammed Faiz Seitz", url: "mailto:byseitz.agency@gmail.com" }],
  openGraph: {
    title: "Muhammed Faiz Seitz — AI Engineer & Full-Stack Systems Architect",
    description: "Production software systems, state capture noir RPGs, geospatial civic intelligence, and 37 Apify autonomous scrapers.",
    type: "website",
    locale: "en_ZA"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090a0f] text-neutral-100 font-sans">
        {children}
      </body>
    </html>
  );
}
