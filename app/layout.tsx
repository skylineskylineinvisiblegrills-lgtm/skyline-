import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.skylineinvisiblegrills.in'),
  title: {
    default: "Invisible Grills & Smart Cloth Hangers Services in Bengaluru | Skyline",
    template: "%s | Skyline Invisible Grills"
  },
  description: "Invisible grills and smart cloth hangers services in Bengaluru at affordable cost with free site visit. Premium safety for balconies, windows, and high-rise apartments.",
  keywords: ["invisible grills", "smart cloth hangers", "invisible grills services in bengaluru", "affordable invisible grills", "free site visit invisible grills", "balcony safety grills", "stainless steel invisible grills", "child safety grills", "pets protection grills", "bengaluru invisible grills"],
  authors: [{ name: "Skyline" }],
  creator: "Skyline Invisible Grills",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.skylineinvisiblegrills.in/", 
    title: "Skyline Invisible Grills | Premium Balcony & Window Safety",
    description: "Protect your loved ones with our 316 marine-grade stainless steel invisible grills. Seamless aesthetics, 400kg impact resistance, and complete peace of mind.",
    siteName: "Skyline Invisible Grills",
    images: [
      {
        url: "/images/hero_balcony.png",
        width: 1200,
        height: 630,
        alt: "Skyline Invisible Grills premium installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Invisible Grills | Smart Safety Solutions",
    description: "Uncompromised safety without blocking your view. Premium invisible grills and smart hangers.",
    images: ["/images/hero_balcony.png"],
  },
  icons: {
    icon: [{ url: "/icon", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Skyline Invisible Grills",
  "image": "https://www.skylineinvisiblegrills.in/icon",
  "url": "https://www.skylineinvisiblegrills.in",
  "telephone": "+919008603980",
  "email": "info@skylineinvisiblegrills.in",
  "areaServed": ["Bengaluru", "Bangalore", "Karnataka"],
  "priceRange": "₹₹",
  "sameAs": [
    "https://www.skylineinvisiblegrills.in"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "description": "Premium invisible grills and smart cloth hangers for balconies, windows, and high-rise apartments."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18064784526"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18064784526');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
