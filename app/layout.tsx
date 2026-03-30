import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageLoadAnimation } from "@/components/PageLoadAnimation";
import Loading from "./loading";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ppEiko = localFont({
  src: [
    {
      path: "../assets/fonts/PPEiko-Thin.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPEiko-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPEiko-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPEiko-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPEiko-Heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PP Eiko Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/PP Eiko Italic Light.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PP Eiko Italic Light.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-pp-eiko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ladd & Co.",
  description:
    "Advisory and execution for families, principals, and private institutions.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
      className={`${ppEiko.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <PageLoadAnimation />
        <SmoothScroll>
          <div className="page-content">
            <Navbar />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
