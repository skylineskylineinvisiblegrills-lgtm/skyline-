import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skyline Invisible Grills & Smart Cloth Hangers | Premium Safety",
    template: "%s | Skyline Invisible Grills"
  },
  description: "Premium invisible grills and smart cloth hangers for balconies, windows, and high-rise apartments. Uncompromised safety for kids and pets without blocking your view.",
  keywords: ["invisible grills", "balcony safety grills", "smart cloth hangers", "invisible grills manufacturer", "stainless steel invisible grills", "pigeon control safety grill", "child safety grills", "pets protection grills", "Bengaluru invisible grills", "Hyderabad invisible grills"],
  authors: [{ name: "Skyline" }],
  creator: "Skyline Invisible Grills",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.skylinegrills.com/", 
    title: "Skyline Invisible Grills | Premium Balcony & Window Safety",
    description: "Protect your loved ones with our 316 marine-grade stainless steel invisible grills. Seamless aesthetics, 400kg impact resistance, and complete peace of mind.",
    siteName: "Skyline Invisible Grills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Invisible Grills | Smart Safety Solutions",
    description: "Uncompromised safety without blocking your view. Premium invisible grills and smart hangers.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
