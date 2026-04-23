import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Cloth Hangers in Bangalore | Skyline",
  description:
    "Get smart cloth hangers in Bangalore with premium ceiling and pull-and-dry systems. Space-saving designs, expert installation, and free quote from Skyline.",
  keywords: [
    "smart cloth hangers bangalore",
    "ceiling cloth hanger bangalore",
    "pull and dry system bangalore",
    "balcony cloth drying system",
  ],
  alternates: {
    canonical: "/smart-cloth-hangers-bangalore",
  },
  openGraph: {
    title: "Smart Cloth Hangers in Bangalore | Skyline",
    description:
      "Premium ceiling cloth hangers and pull-and-dry systems with expert installation in Bangalore.",
    url: "https://www.skylineinvisiblegrills.in/smart-cloth-hangers-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Cloth Hangers in Bangalore | Skyline",
    description:
      "Space-saving cloth drying systems with smooth operation and premium finish.",
  },
};

const features = [
  "Ceiling-mounted space-saving design",
  "Smooth pulley and pull-down mechanism",
  "Rust-resistant rods and components",
  "Suitable for apartments, balconies, and utility spaces",
  "Professional measurement and installation",
];

const areaLinks = [
  { href: "/smart-cloth-hangers-bangalore/whitefield", label: "Whitefield" },
  { href: "/smart-cloth-hangers-bangalore/electronic-city", label: "Electronic City" },
  { href: "/smart-cloth-hangers-bangalore/sarjapur-road", label: "Sarjapur Road" },
  { href: "/smart-cloth-hangers-bangalore/hsr-layout", label: "HSR Layout" },
  { href: "/smart-cloth-hangers-bangalore/jp-nagar", label: "JP Nagar" },
  { href: "/smart-cloth-hangers-bangalore/marathahalli", label: "Marathahalli" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Cloth Hangers Installation in Bangalore",
  serviceType: "Smart Cloth Hangers",
  areaServed: "Bangalore",
  provider: {
    "@type": "LocalBusiness",
    name: "Skyline Invisible Grills",
    url: "https://www.skylineinvisiblegrills.in",
    telephone: "+919008603980",
  },
  url: "https://www.skylineinvisiblegrills.in/smart-cloth-hangers-bangalore",
};

export default function SmartClothHangersBangalorePage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Smart Cloth Hangers in Bangalore
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10">
          Upgrade your utility area with smart cloth hanger systems from Skyline.
          Choose ceiling hangers or pull-and-dry systems built for smooth daily use and long life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-900/50 p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
              <p className="text-neutral-300">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="tel:9008739365"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-colors"
          >
            <PhoneCall className="w-5 h-5" />
            Call for Free Quote
          </Link>
          <Link
            href="https://wa.me/919008603980?text=Hello%20Skyline,%20I%20need%20a%20quote%20for%20smart%20cloth%20hangers%20in%20Bangalore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp for Fast Response
          </Link>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold text-white mb-3">Explore related services</h2>
          <p className="text-neutral-300 mb-4">
            Looking for balcony safety too? Combine cloth hangers with invisible grills for a cleaner, safer utility space.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="text-white underline">
              View All Services
            </Link>
            <Link href="/invisible-grills-bangalore" className="text-white underline">
              Invisible Grills Bangalore
            </Link>
          </div>
        </div>

        <div className="mt-10 border border-white/10 rounded-2xl p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Area-specific pages in Bangalore
          </h2>
          <div className="flex flex-wrap gap-4">
            {areaLinks.map((area) => (
              <Link key={area.href} href={area.href} className="text-white underline">
                Smart Cloth Hangers in {area.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
