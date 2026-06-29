import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

const description =
  "Ashish  — B.Tech Software Engineering student at DTU. Full-stack developer (React, Next.js, Express) and data analyst, building polished web products and data-driven experiences.";

export const metadata: Metadata = {
  title: "Ashish — Software Engineer | DTU",
  description,
  keywords: [
    "Ashish",
    "Software Engineer",
    "Full Stack Developer",
    "DTU",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Ashish" }],
  openGraph: {
    title: "Ashish — Software Engineer | DTU",
    description,
    type: "website",
    siteName: "Ashish ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish — Software Engineer | DTU",
    description,
  },
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
      <body>{children}</body>
    </html>
  );
}
