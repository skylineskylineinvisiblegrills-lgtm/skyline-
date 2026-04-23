import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Skyline Installations",
  description:
    "View real Skyline project photos for invisible grills and smart cloth hangers installed across apartments, balconies, windows, and villas.",
  keywords: [
    "invisible grills gallery",
    "balcony safety grill photos",
    "skyline project gallery",
    "smart cloth hanger installation images",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Skyline Project Gallery",
    description:
      "Browse finished installations and design outcomes from Skyline Invisible Grills.",
    url: "https://www.skylinegrills.com/gallery",
    type: "website",
  },
  twitter: {
    title: "Skyline Project Gallery",
    description:
      "A visual portfolio of premium invisible grill and cloth hanger installations.",
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
