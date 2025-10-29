import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptomedia.example"),
  title: {
    default: "CryptoMedia",
    template: "%s | CryptoMedia",
  },
  description:
    "CryptoMedia: Modern crypto marketing and media services. Strategy, content, growth.",
  keywords: [
    "CryptoMedia",
    "crypto marketing",
    "web3",
    "blockchain",
    "growth",
  ],
  authors: [{ name: "CryptoMedia" }],
  applicationName: "CryptoMedia",
  openGraph: {
    title: "CryptoMedia",
    description:
      "Modern crypto marketing and media services for web3 companies.",
    url: "https://cryptomedia.example",
    siteName: "CryptoMedia",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 300, height: 300, alt: "CryptoMedia" }],
  },
  twitter: {
    card: "summary",
    title: "CryptoMedia",
    description:
      "Modern crypto marketing and media services for web3 companies.",
    images: ["/logo.png"],
    creator: "@cryptomedia",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
