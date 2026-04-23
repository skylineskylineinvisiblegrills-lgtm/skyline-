import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { notFound } from "next/navigation";

const areas = [
  { slug: "whitefield", name: "Whitefield" },
  { slug: "electronic-city", name: "Electronic City" },
  { slug: "sarjapur-road", name: "Sarjapur Road" },
  { slug: "hsr-layout", name: "HSR Layout" },
  { slug: "jp-nagar", name: "JP Nagar" },
  { slug: "marathahalli", name: "Marathahalli" },
] as const;

type Params = {
  params: Promise<{ area: string }>;
};

function getArea(areaSlug: string) {
  return areas.find((item) => item.slug === areaSlug);
}

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { area } = await params;
  const selectedArea = getArea(area);

  if (!selectedArea) {
    return {
      title: "Service Area Not Found",
      description: "The requested area page could not be found.",
    };
  }

  return {
    title: `Invisible Grills in ${selectedArea.name}, Bangalore | Skyline`,
    description: `Get premium invisible grills in ${selectedArea.name}, Bangalore with free site visit, expert installation, and transparent pricing from Skyline.`,
    keywords: [
      `invisible grills ${selectedArea.name}`,
      `${selectedArea.name} balcony safety grills`,
      `window grills ${selectedArea.name}`,
      "invisible grills bangalore",
    ],
    alternates: {
      canonical: `/invisible-grills-bangalore/${selectedArea.slug}`,
    },
    openGraph: {
      title: `Invisible Grills in ${selectedArea.name}, Bangalore`,
      description: `Premium balcony and window invisible grill installation in ${selectedArea.name}.`,
      url: `https://www.skylineinvisiblegrills.in/invisible-grills-bangalore/${selectedArea.slug}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }: Params) {
  const { area } = await params;
  const selectedArea = getArea(area);

  if (!selectedArea) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Invisible Grills Installation in ${selectedArea.name}, Bangalore`,
    serviceType: "Invisible Grills",
    areaServed: {
      "@type": "Place",
      name: selectedArea.name,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Skyline Invisible Grills",
      url: "https://www.skylineinvisiblegrills.in",
      telephone: "+919008603980",
    },
    url: `https://www.skylineinvisiblegrills.in/invisible-grills-bangalore/${selectedArea.slug}`,
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Invisible Grills in {selectedArea.name}, Bangalore
        </h1>
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          Skyline provides premium invisible grills in {selectedArea.name} for balconies, windows, and staircases.
          Get safe, modern protection without blocking natural light or your view.
        </p>
        <p className="text-neutral-300 text-lg leading-relaxed mb-12">
          We offer free site visit, expert measurement, and transparent pricing for apartments and villas in{" "}
          {selectedArea.name}, Bangalore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="tel:9008739365"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-colors"
          >
            <PhoneCall className="w-5 h-5" />
            Call for Free Quote
          </Link>
          <Link
            href={`https://wa.me/919008603980?text=Hello%20Skyline,%20I%20need%20a%20quote%20for%20invisible%20grills%20in%20${encodeURIComponent(selectedArea.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </Link>
        </div>

        <div className="border border-white/10 rounded-2xl p-6 bg-neutral-900/40">
          <h2 className="text-2xl font-semibold text-white mb-3">Explore more locations and services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/invisible-grills-bangalore" className="text-white underline">
              Bangalore Main Page
            </Link>
            <Link href="/services" className="text-white underline">
              All Services
            </Link>
            <Link href="/contact" className="text-white underline">
              Contact Skyline
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
