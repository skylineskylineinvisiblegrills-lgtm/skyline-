import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisible Grills & Smart Cloth Hangers Services",
  description:
    "Explore Skyline's invisible grill solutions for balconies, windows, staircases, child and pet safety, plus premium smart cloth hanger systems.",
  keywords: [
    "invisible grills services",
    "balcony invisible grills bengaluru",
    "window invisible grills",
    "smart cloth hangers",
    "child safety grills",
    "pets safety grills",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Skyline Services: Invisible Grills & Hangers",
    description:
      "Find premium safety and utility solutions tailored for modern homes and apartments.",
    url: "https://www.skylinegrills.com/services",
    type: "website",
  },
  twitter: {
    title: "Skyline Services: Invisible Grills & Hangers",
    description:
      "Premium installations for balcony safety, windows, staircases, and utility spaces.",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
