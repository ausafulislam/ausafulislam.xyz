import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Ausaf ul Islam | Full Stack Developer",
  description:
    "Full-Stack Developer skilled in React, Next.js, JavaScript, TypeScript, TailwindCSS, and Backend (Python, Agentic AI). Builds fast, scalable, polished apps.",
  keywords: [
    "ausaf ul islam",
    "ausaf",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
    "web portfolio",
    "frontend developer",
    "backend developer"
  ],
  authors: [
    {
      name: "Ausaf Ul Islam",
      url: "https://www.ausafulislam.xyz"
    }
  ],
  creator: "Ausaf",
  publisher: "Ausaf",
  metadataBase: new URL("https://www.ausafulislam.xyz"),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ausafulislam.xyz",
    siteName: "Ausaf ul Islam Portfolio",
    title: "Ausaf Ul Islam | Full Stack Developer",
    description:
      "Full-Stack Developer skilled in React, Next.js, TypeScript, and Python. Builds modern, fast and optimized applications.",
    images: [
      {
        url: "https://www.ausafulislam.xyz/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ausaf Ul Islam - Full Stack Developer",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ausafulislam_h",
    creator: "@ausafulislam",
    title: "Ausaf Ul Islam | Full Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, TypeScript & Python. Building elegant and fast web experiences.",
    images: ["https://www.ausafulislam.xyz/images/og-image.jpg"]
  },
  verification: {
    google: "",
    yandex: "",
    other: {
      me: ["mailto:ausafdev@gmail.com"]
    }
  },
  category: "technology",
  other: {
    "theme-color": "#0f172a",  // dark navy or any color you want
    "msapplication-TileColor": "#0f172a"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="NaUf690lfIuTZBJkyF-I68rIiX-t0HiZe5xWgUQwNm0" />
      </head>
      <body>
        <CustomCursor />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
