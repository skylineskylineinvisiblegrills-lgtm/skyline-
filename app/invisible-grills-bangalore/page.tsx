import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Invisible Grills in Bangalore | Free Site Visit",
  description:
    "Looking for invisible grills in Bangalore? Get premium 316-grade stainless steel safety grills with expert installation, transparent pricing, and fast support.",
  keywords: [
    "invisible grills in bangalore",
    "balcony invisible grills bangalore",
    "window invisible grills bangalore",
    "child safety grills bangalore",
    "pets safety grills bangalore",
  ],
  alternates: {
    canonical: "/invisible-grills-bangalore",
  },
  openGraph: {
    title: "Invisible Grills in Bangalore | Skyline",
    description:
      "Premium invisible grills for balconies and windows in Bangalore. Book a free quote and expert installation.",
    url: "https://www.skylineinvisiblegrills.in/invisible-grills-bangalore",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invisible Grills in Bangalore | Skyline",
    description:
      "Book premium balcony and window safety grills with fast support.",
  },
};

const benefits = [
  "316 marine-grade stainless steel cables",
  "Custom spacing for child and pet safety",
  "Anti-rust coating for long life",
  "Minimal visual obstruction and modern finish",
  "Professional installation with transparent pricing",
];

const areaLinks = [
  { href: "/invisible-grills-bangalore/whitefield", label: "Whitefield" },
  { href: "/invisible-grills-bangalore/electronic-city", label: "Electronic City" },
  { href: "/invisible-grills-bangalore/sarjapur-road", label: "Sarjapur Road" },
  { href: "/invisible-grills-bangalore/hsr-layout", label: "HSR Layout" },
  { href: "/invisible-grills-bangalore/jp-nagar", label: "JP Nagar" },
  { href: "/invisible-grills-bangalore/marathahalli", label: "Marathahalli" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost of invisible grills in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost depends on balcony or window dimensions, cable spacing, and installation details. Skyline provides a free site visit and quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are invisible grills safe for kids and pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Skyline offers high-tension, narrow-gap options designed for child and pet safety.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Invisible Grills Installation in Bangalore",
  serviceType: "Invisible Grills",
  areaServed: "Bangalore",
  provider: {
    "@type": "LocalBusiness",
    name: "Skyline Invisible Grills",
    url: "https://www.skylineinvisiblegrills.in",
    telephone: "+919008603980",
  },
  url: "https://www.skylineinvisiblegrills.in/invisible-grills-bangalore",
};

export default function InvisibleGrillsBangalorePage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Invisible Grills in Bangalore
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-10">
          Skyline provides premium invisible grill installation for balconies, windows, and staircases in Bangalore.
          Protect your family without blocking your view.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-900/50 p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-white/80 mt-0.5 shrink-0" />
              <p className="text-neutral-300">{benefit}</p>
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
            href="https://wa.me/919008603980?text=Hello%20Skyline,%20I%20need%20a%20quote%20for%20invisible%20grills%20in%20Bangalore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp for Fast Response
          </Link>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold text-white mb-3">Need more options?</h2>
          <p className="text-neutral-300 mb-4">
            Explore all grill and hanger solutions or contact our team for a site-specific recommendation.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="text-white underline">
              View All Services
            </Link>
            <Link href="/contact" className="text-white underline">
              Contact Skyline
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
                Invisible Grills in {area.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
