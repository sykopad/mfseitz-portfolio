import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mfseitz.com';

export const viewport: Viewport = {
  themeColor: '#090a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammed Faiz Seitz — AI Engineer & Full-Stack Systems Architect",
    template: "%s | Muhammed Faiz Seitz",
  },
  description: "Official portfolio and engineering resume of Muhammed Faiz Seitz: 15+ full-stack software systems, civic intelligence platforms, and 37 autonomous Apify cloud scrapers. Based in Durban, South Africa.",
  applicationName: "Muhammed Faiz Seitz Portfolio",
  keywords: [
    "Muhammed Faiz Seitz",
    "AI Engineer",
    "Full-Stack Architect",
    "Systems Architect",
    "Next.js 16",
    "TypeScript",
    "Durban",
    "South Africa",
    "Civic Tech",
    "Apify Scrapers",
    "Supabase",
    "PostGIS",
    "Mapbox GL",
    "Autonomous Agents",
    "fal.ai",
    "Fintech",
    "NFC Payments",
    "CAPS Curriculum",
    "Schooler",
    "Aytada",
    "Shaya Pay",
    "Decolonize"
  ],
  authors: [{ name: "Muhammed Faiz Seitz", url: "mailto:byseitz.agency@gmail.com" }],
  creator: "Muhammed Faiz Seitz",
  publisher: "Muhammed Faiz Seitz",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammed Faiz Seitz — AI Engineer & Full-Stack Systems Architect",
    description: "15+ production systems, civic intelligence platforms, state capture noir RPGs, and 37 autonomous cloud scrapers. Based in Durban, South Africa.",
    url: siteUrl,
    siteName: "Muhammed Faiz Seitz Portfolio",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Faiz Seitz — AI Engineer & Systems Architect",
    description: "15+ production software systems, civic intelligence engines, and 37 Apify cloud scrapers.",
    creator: "@mfseitz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Muhammed Faiz Seitz",
      "givenName": "Muhammed Faiz",
      "familyName": "Seitz",
      "jobTitle": "AI Engineer & Lead Systems Architect",
      "email": "byseitz.agency@gmail.com",
      "nationality": {
        "@type": "Country",
        "name": "South Africa"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Durban",
        "addressRegion": "KwaZulu-Natal",
        "addressCountry": "ZA"
      },
      "url": siteUrl,
      "image": `${siteUrl}/images/profile.png`,
      "sameAs": [
        "https://www.linkedin.com/in/muhammed-faiz-seitz/",
        "https://github.com/seitzmf",
        "https://github.com/MisterSeitz",
        "https://github.com/sykopad"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Autonomous Agent Architecture",
        "Next.js App Router",
        "Full-Stack Web Engineering",
        "Apify Cloud Scrapers",
        "PostGIS Geospatial Intelligence",
        "PostgreSQL & Drizzle ORM",
        "Supabase Realtime & Auth",
        "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Muhammed Faiz Seitz — AI Engineer & Full-Stack Systems Architect",
      "description": "Production software systems, civic intelligence platforms, and 37 autonomous cloud scrapers.",
      "publisher": {
        "@id": `${siteUrl}/#person`
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090a0f] text-neutral-100 font-sans">
        {children}
      </body>
    </html>
  );
}

