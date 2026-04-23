import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Skyline Invisible Grills",
  description:
    "Learn about Skyline Invisible Grills, our premium 316-grade safety systems, and our mission to deliver modern balcony and window protection in Bengaluru.",
  keywords: [
    "about skyline invisible grills",
    "invisible grills company bengaluru",
    "balcony safety experts",
    "window safety grill specialists",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Skyline Invisible Grills",
    description:
      "Discover Skyline's quality-first approach to invisible grills and smart cloth hanger installations.",
    url: "https://www.skylineinvisiblegrills.in/about",
    type: "website",
  },
  twitter: {
    title: "About Skyline Invisible Grills",
    description:
      "Know the team and mission behind Skyline's premium safety solutions.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
