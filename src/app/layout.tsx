import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import CustomCursor from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://ausafulislam.vercel.app"),
  title: {
    default: "Ausaf ul Islam | FullStack Developer",
    template: "%s | Ausaf ul Islam"
  },
  description: "Ausaf ul Islam is a FullStack Developer and Assistant builder using Python, Next.js, and TypeScript.",
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
  authors: [{ name: "Ausaf ul Islam", url: "https://ausafulislam.vercel.app" }],
  creator: "Ausaf ul Islam",
  publisher: "Ausaf ul Islam",
  alternates: {
    canonical: "https://ausafulislam.vercel.app",
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
    description: "Ausaf ul Islam is a FullStack Developer and Assistant builder using Python, Next.js, and TypeScript.",
    url: "https://ausafulislam.vercel.app",
    siteName: "Ausaf ul Islam Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ausaf ul Islam - FullStack Developer",
      },
      {
        url: "/images/twitter-card.gif",
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
    description: "Ausaf ul Islam is a FullStack Developer and Assistant builder using Python, Next.js, and TypeScript.",
    creator: "@ausafulislam_h",
    site: "@ausafulislam_h",
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
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        {/* this meta tag use for the google search console verificattion */}
        <meta name="google-site-verification" content="NaUf690lfIuTZBJkyF-I68rIiX-t0HiZe5xWgUQwNm0" />
        <meta name="HandheldFriendly" content="true" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ausaf ul Islam",
            "jobTitle": "FullStack Developer",
            "url": "https://ausafulislam.vercel.app/",
            "sameAs": [
              "https://github.com/ausafulislam",
              "https://linkedin.com/in/ausafulislam",
              "https://twitter.com/ausafulislam_h"
            ],
            "skills": ["React", "Next.js", "TypeScript", "Node.js", "Python"],
            "description": "FullStack Developer specializing in modern JavaScript frameworks."
          })}
        </script>
      </head>
      <body>
        <ScrollProgress />
        <ChatWidget />
        <CustomCursor />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
