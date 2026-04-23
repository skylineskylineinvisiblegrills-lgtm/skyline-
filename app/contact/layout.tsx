import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Skyline | Free Quote & Site Visit",
  description:
    "Contact Skyline Invisible Grills for a free quote, on-site measurement, and expert guidance on invisible grills and smart cloth hanger installations.",
  keywords: [
    "contact skyline invisible grills",
    "invisible grills quote",
    "balcony safety grill installation bengaluru",
    "smart cloth hanger enquiry",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Skyline Invisible Grills",
    description:
      "Call, WhatsApp, or email Skyline for quick support, quotes, and installation planning.",
    url: "https://www.skylineinvisiblegrills.in/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Skyline Invisible Grills",
    description:
      "Get a fast quote and expert help for your home safety installation.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
