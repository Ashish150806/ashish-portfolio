import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile, siteUrl, skills, socialLinks } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

const title = "Ashish — Software Engineer | DTU";
const description =
  "Ashish  — B.Tech Software Engineering student at DTU. Full-stack developer (React, Next.js, Express) and data analyst, building polished web products and data-driven experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ashish",
  },
  description,
  applicationName: "Ashish — Portfolio",
  keywords: [
    "Ashish",
    "Software Engineer",
    "Full Stack Developer",
    "DTU",
    "Delhi Technological University",
    "Next.js",
    "React",
    "TypeScript",
    "Data Analyst",
    "Portfolio",
  ],
  authors: [{ name: "Ashish", url: siteUrl }],
  creator: "Ashish",
  publisher: "Ashish",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Ashish — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Ashish0503",
  },
  category: "technology",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

// Person structured data (JSON-LD) — rendered server-side, zero client JS, and
// gives search engines a rich, machine-readable profile.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Delhi Technological University",
  },
  knowsAbout: skills.map((s) => s.name),
  sameAs: socialLinks.map((s) => s.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
