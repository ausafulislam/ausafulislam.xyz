import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import CustomCursor from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://ausafulislam-xyz.vercel.app"),
  title: {
    default: "Ausaf ul Islam | FullStack Developer",
    template: "%s | Ausaf ul Islam"
  },
  description: "Professional FullStack Developer specializing in React, Next.js, and TypeScript. Building fast, scalable web applications with modern JavaScript frameworks. View my portfolio and let's collaborate!",
  keywords: [
    "FullStack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "JavaScript Expert",
    "Modern Web Development"
  ],
  authors: [{ name: "Ausaf ul Islam", url: "https://ausafulislam-xyz.vercel.app" }],
  creator: "Ausaf ul Islam",
  publisher: "Ausaf ul Islam",
  alternates: {
    canonical: "https://ausafulislam-xyz.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/apple-icon-precomposed.png"
    }
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    title: "Ausaf ul Islam | FullStack Developer",
    description: "Professional FullStack Developer building modern web applications with React, Next.js, and TypeScript. Explore my portfolio projects.",
    url: "https://ausafulislam-xyz.vercel.app",
    siteName: "Ausaf ul Islam Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ausaf ul Islam - FullStack Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ausaf ul Islam | FullStack Developer",
    description: "Building modern web apps with React, Next.js, and TypeScript. Check out my portfolio!",
    creator: "@ausafulislam_h",
    images: ["/images/twitter-card.gif"],
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Mobile viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="HandheldFriendly" content="true" />

        {/* Legacy Apple Touch Icons (for maximum compatibility) */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />

        {/* Legacy Favicons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />

        {/* MS Application */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured data / Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ausaf ul Islam",
            "jobTitle": "FullStack Developer",
            "url": "https://ausafulislam-xyz.vercel.app/",
            "sameAs": [
              "https://github.com/ausafulislam",
              "https://linkedin.com/in/ausafulislam",
              "https://twitter.com/ausafulislam_h"
            ],
            "skills": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
            "description": "Professional FullStack Developer specializing in modern JavaScript frameworks."
          })}
        </script>
      </head>
      <body>
        {/* Scroll Progress at Top */}
        <ScrollProgress />
        <CustomCursor />
        <ChatWidget />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}