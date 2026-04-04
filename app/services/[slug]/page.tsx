import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { notFound } from "next/navigation";

const allServicesData = {
  "invisible-grills-for-balconies": {
    title: "Invisible Grills for Balconies",
    subtitle: "Absolute Safety meets Unobstructed Views.",
    desc: "Transform your balcony into a perfectly secure haven for your family to enjoy without ruining your architectural facade. Our balcony installations withstand massive impact while remaining completely concealed from a distance.",
    image: "/images/invisible_grills_balcony.png",
    features: ["400kg Impact Resistance", "Marine Grade 316 Steel", "Anti-Rust Nano Coating", "Customizable Gap Sizing"],
  },
  "invisible-grills-for-windows": {
    title: "Invisible Grills for Windows",
    subtitle: "Modern Protection for High-Rise Living.",
    desc: "Replace bulky, oppressive iron window bars with sleek, barely-there tensioned cables. Perfect for modern villas and high-rise apartments seeking to maintain a bright, airy aesthetic indoors.",
    image: "/images/invisible_grills_window.png",
    features: ["Zero Light Blockage", "Seamless Integration", "Fire Safety Compliant", "Easy to Clean"],
  },
  "invisible-grills-manufacturer": {
    title: "Invisible Grills Manufacturer",
    subtitle: "Precision Engineered at the Source.",
    desc: "As a direct manufacturer, we eliminate the middleman to provide premium grade tensioning components, tracks, and cables produced in our advanced facility with strict quality control.",
    image: "/images/grills_manufacturer.png",
    features: ["Direct Factory Pricing", "Custom Specifications", "Bulk Supply Available", "Quality Assured Production"],
  },
  "stainless-steel-invisible-grills": {
    title: "Stainless Steel Invisible Grills",
    subtitle: "The Ultimate Strength Core.",
    desc: "Built exclusively using 316 marine-grade stainless steel cables layered with a highly advanced nano nylon coating for unparalleled strength and sheer endurance against environmental decay.",
    image: "/images/grills_stainless_steel.png",
    features: ["316 Marine Grade", "High-Carbon Tension", "All-Weather Resistance", "Nylon Bonded"],
  },
  "invisible-grills-dealers": {
    title: "Invisible Grills Dealers",
    subtitle: "Nationwide Trust & Supply.",
    desc: "Connect with our certified dealers networks across India. We provide showcase setups, comprehensive supply chains, and dedicated territory support for premium home safety solutions.",
    image: "/images/grills_dealers.png",
    features: ["Pan-India Network", "Showroom Displays", "Certified Installers", "B2B Support"],
  },
  "invisible-grills-fixing-charges": {
    title: "Invisible Grills Fixing Charges",
    subtitle: "Transparent & Competitive.",
    desc: "We believe in clear, upfront pricing. Our fixing charges reflect the expertise of our installers, the precision tools utilized, and our dedication to delivering a completely flawless final result.",
    image: "/images/grills_fixing_charges.png",
    features: ["No Hidden Costs", "Expert Installation", "Standardized Pricing", "Warranty Included"],
  },
  "invisible-grills-for-child-safety": {
    title: "Invisible Grills for Child Safety",
    subtitle: "Peace of Mind for Parents.",
    desc: "Designed with tight grid spacing to ensure absolute prevention of falls while providing your kids with a bright, unrestricted view of the world outside their playroom or bedroom.",
    image: "/images/grills_child_safety.png",
    features: ["Narrow 2-inch Gaps", "Soft Coated Cables", "Tamper-Proof Anchors", "Certified Safe"],
  },
  "pets-protection-safety-grills": {
    title: "Pets Protection Safety Grills",
    subtitle: "Keep Your Furry Friends Safe.",
    desc: "Cats love heights, and dogs love views. Give them the freedom to roam your balcony or peer out of windows without the lingering fear of catastrophic accidents.",
    image: "/images/grills_pets_protection.png",
    features: ["Chew-Resistant Coating", "Narrow Spacing Options", "High Tension Bounce", "Stress-Free Environment"],
  },
  "pigeon-control-safety-grill": {
    title: "Pigeon Control Safety Grill",
    subtitle: "Aesthetic Anti-Bird Defense.",
    desc: "Say goodbye to unhygienic pigeon droppings and ugly plastic bird nets. Our invisible grills safely deter birds while maintaining the absolute luxury look of your property.",
    image: "/images/grills_pigeon_control.png",
    features: ["100% Bird Exclusion", "Aesthetic Alternative to Nets", "Hygienic Balconies", "Durable Tension"],
  },
  "invisible-grills-for-staircases": {
    title: "Invisible Grills for Staircases",
    subtitle: "Elevated Interior Architecture.",
    desc: "Incorporate safety directly into your interior design. Our floor-to-ceiling invisible cables secure high-end staircases flawlessly, acting as a stunning architectural centerpiece.",
    image: "/images/grills_staircase.png",
    features: ["Floor-to-Ceiling", "Floating Illusion", "Structural Integrity", "Luxury Indoor Safe"],
  },
  "ceiling-cloth-hangers": {
    title: "Ceiling Cloth Hangers",
    subtitle: "Space Optimization Upward.",
    desc: "Maximize your utility balcony's floor space. Our smart ceiling hangers offer robust, rust-proof finishing with an incredibly simple operating mechanism that keeps clothes out of the way.",
    image: "/images/cloth_hangers_ceiling.png",
    features: ["Zero Floor Footprint", "Heavy Load Capacity", "Smooth Pulley Action", "Rust-proof Rods"],
  },
  "pull-and-dry-systems": {
    title: "Pull & Dry Systems",
    subtitle: "Individual Rod Convenience.",
    desc: "Easily pull down individual rods to hang heavy wet laundry, and hoist them back to the ceiling. Made complete with friction-less nylon ropes and smooth pulley components.",
    image: "/images/cloth_hangers_pulley.png",
    features: ["Individual Rod Control", "Low Physical Effort", "High-Quality Nylon", "Aesthetic Utility"],
  }
};

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const service = allServicesData[slug as keyof typeof allServicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Back Link */}
        <Link href="/services" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to all services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Featured Image Block (First on Mobile/Left on Desktop) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent rounded-3xl transform -rotate-3 scale-105 opacity-50 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden glass border border-white/20 shadow-2xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5]">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="flex items-center gap-1 mb-3">
                   {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                   ))}
                 </div>
                 <p className="text-white font-medium text-lg">&quot;Extremely aesthetic and tough. Totally unnoticeable from afar!&quot;</p>
              </div>
            </div>
          </div>

          {/* Main Content (Second on Mobile/Right on Desktop) */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-neutral-300 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" />
              Premium Safety Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            
            <h3 className="text-xl md:text-2xl text-neutral-300 font-medium mb-8">
              {service.subtitle}
            </h3>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              {service.desc}
            </p>
            
            <div className="mb-12">
              <h4 className="text-white font-semibold text-xl mb-6">Key Advantages</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-white/50 shrink-0" />
                    <span className="text-neutral-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a 
                 href={`https://wa.me/9008603980?text=Hello%20Skyline,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}.`} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[#25d366]/20 w-full sm:w-auto"
               >
                 Enquire via WhatsApp
               </a>
               <Link
                  href="tel:9008739365"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all w-full sm:w-auto"
                >
                  Call Directly
               </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
