"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, View, Wind, Home, Star, Quote } from "lucide-react";
import Tilt from "react-parallax-tilt";

const heroImages = [
  "/images/grills_staircase.png",
  "/images/grills_child_safety.png",
  "/images/grills_dealers.png",
  "/images/invisible_grills_window.png",
  "/images/grills_pigeon_control.png",
];

const features = [
  { icon: ShieldCheck, title: "Uncompromised Safety", desc: "High-tensile marine-grade stainless steel cables supporting up to 400kg impact." },
  { icon: View, title: "Unhindered Views", desc: "Enjoy your balcony view perfectly without thick iron bars blocking the scenery." },
  { icon: Home, title: "Modern Design", desc: "Seamless premium aesthetics blending perfectly into luxury architectural designs." },
  { icon: Wind, title: "Anti-Rust Coating", desc: "Nano-nylon coating ensures complete protection against dust, rust, and harsh weather." },
];

const testimonials = [
  { name: "Rahul S.", city: "Bengaluru", text: "The invisible grills are a game changer! I can finally let my kids play on the balcony safely without ruining the view of the city skyline." },
  { name: "Priya M.", city: "Bengaluru", text: "Extremely professional installation. The team was quick, and the smart cloth hanger system fits my utility room perfectly. Highly recommended!" },
  { name: "Vikram R.", city: "Bengaluru", text: "Living near the coast, I was worried about rust. But Skyline's 316-grade steel has held up brilliantly." },
  { name: "Ananya D.", city: "Bengaluru", text: "The best investment for our new apartment. Keeps the pigeons away and looks incredibly premium. You honestly can't even see the cables from afar." },
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
        text: "The cost depends on area size, cable spacing, and installation requirements. Contact Skyline for a free site inspection and accurate quote.",
      },
    },
    {
      "@type": "Question",
      name: "Are invisible grills safe for kids and pets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Skyline uses high-tensile 316 marine-grade stainless steel cables with secure tensioning and child-safe spacing options.",
      },
    },
    {
      "@type": "Question",
      name: "Do invisible grills rust in rain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skyline systems are made with anti-rust 316 marine-grade steel and nano nylon coating designed for long-term weather resistance.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can installation be completed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most installations are completed quickly after measurement and confirmation. Timelines vary by project size and site conditions.",
      },
    },
  ],
};

export default function HomePage() {
  const [currentHeroBlock, setCurrentHeroBlock] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBlock((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Slow auto scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mobileScrollInterval = setInterval(() => {
      if (sliderRef.current && window.innerWidth < 768) {
         const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
         if (scrollLeft + clientWidth >= scrollWidth - 10) {
            sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
         } else {
            sliderRef.current.scrollBy({ left: clientWidth * 0.75, behavior: 'smooth' });
         }
      }
    }, 3500); // Auto side scroll every 3.5 seconds
    return () => clearInterval(mobileScrollInterval);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section with Auto Slider */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentHeroBlock}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentHeroBlock]}
              alt="Luxury Balcony Setup"
              fill
              className="object-cover opacity-65"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-0"></div>

        <div className="container relative z-10 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-6">
                <span className="text-sm font-medium tracking-wider text-white uppercase">Premium Safety Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">Invisible Grills</span> <br />& Smart Cloth Hangers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md"
            >
              Premium services in Bengaluru at affordable cost with free site visit. Protect your loved ones without compromising your view.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/services"
                className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:9008739365"
                className="flex items-center justify-center gap-3 bg-neutral-900/40 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroBlock(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${currentHeroBlock === idx ? "bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,1)]" : "bg-white/40 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Us Preview (25% white implementation -> neutral-900 bg) */}
      <section className="py-24 bg-neutral-900 relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Skyline</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                Skyline Invisible Grills was founded with a singular mission: to provide uncompromising safety without disrupting the aesthetic appeal of modern homes. We believe that your home should be a safe haven, and you shouldn&apos;t have to choose between a beautiful view and peace of mind.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all border-b border-white pb-1">
                Read our full story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image src="/images/grills_manufacturer.png" alt="Skyline Manufacturing" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section (25% white implemention via styling) */}
      <section className="py-28 bg-neutral-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Solutions</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
              We specialize in state-of-the-art balcony safety and smart utility systems, designed exclusively for high-end apartments and villas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2500} className="w-full">
              <div className="group relative rounded-3xl overflow-hidden glass aspect-square md:aspect-[4/3] flex flex-col justify-end p-10 border border-white/10 shadow-2xl">
                <Image
                  src="/images/invisible_grills_balcony.png"
                  alt="Invisible Grills"
                  fill
                  className="object-cover z-0 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <h3 className="text-3xl font-bold text-white mb-4">Invisible Grills</h3>
                  <p className="text-neutral-300 mb-6 max-w-md text-lg">
                    Seamless safety that doesn&apos;t block your view. Available for balconies, windows, and custom installations. Perfect for pet and child safety.
                  </p>
                  <Link href="/services#grills" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all shadow-lg">
                    View Systems <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2500} className="w-full">
              <div className="group relative rounded-3xl overflow-hidden glass aspect-square md:aspect-[4/3] flex flex-col justify-end p-10 border border-white/10 shadow-2xl">
                <Image
                  src="/images/cloth_hangers_ceiling.png"
                  alt="Smart Cloth Hangers"
                  fill
                  className="object-cover z-0 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <h3 className="text-3xl font-bold text-white mb-4">Smart Cloth Hangers</h3>
                  <p className="text-neutral-300 mb-6 max-w-md text-lg">
                    Space-saving elegant drying solutions. Choose from automated ceiling hangers or classic pull & dry manual systems.
                  </p>
                  <Link href="/services#hangers" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all shadow-lg">
                    View Solutions <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* See Our Work in Action */}
      <section className="py-24 bg-neutral-950 relative border-t border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See Our Work in Action</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A glimpse of Skyline Invisible Grills installations across Bangalore — safety meets style.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-4 md:gap-6 w-full max-w-full">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className="w-full relative rounded-3xl overflow-hidden glass border border-white/10 shadow-xl aspect-[4/5] md:aspect-[9/16]"
              >
                <video 
                  src={`/videos/invisible-grill-${num}.mp4`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              We deliver premium quality materials and expert installations to ensure your home is protected with elegance.
            </p>
          </div>
          <div 
            ref={sliderRef}
            onScroll={(e) => {
               if (window.innerWidth < 768) {
                 const index = Math.round(e.currentTarget.scrollLeft / window.innerWidth);
                 setCurrentFeature(Math.min(index, features.length - 1));
               }
            }}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-2 md:pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide w-full max-w-full smooth-scroll"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group w-[85vw] min-w-[85vw] sm:w-[320px] sm:min-w-[320px] md:w-auto md:min-w-0 min-h-[280px] md:min-h-0 snap-center shrink-0 flex flex-col justify-center relative overflow-hidden"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-white transition-colors duration-500 shrink-0">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl text-white font-semibold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Dot Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-4">
            {features.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to feature ${idx + 1}`}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({ left: idx * (window.innerWidth * 0.85), behavior: 'smooth' });
                    setCurrentFeature(idx);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentFeature === idx ? "bg-white scale-125" : "bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-black relative z-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Hear what our satisfied customers from across major cities have to say about our professional installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5 relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-neutral-300 text-lg leading-relaxed mb-8 italic relative z-10">
                  &quot;{testi.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="text-white font-bold">{testi.name}</h4>
                    <span className="text-neutral-500 text-sm tracking-wide uppercase">{testi.city}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Invisible Grills in Bangalore: Quick Answers
          </h2>
          <div className="space-y-6 text-neutral-300">
            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-white text-xl font-semibold mb-2">What is the cost of invisible grills?</h3>
              <p>Pricing depends on balcony/window dimensions, cable spacing, and site complexity. For accurate pricing, request a free quote from our team.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-white text-xl font-semibold mb-2">Do you provide child and pet safety options?</h3>
              <p>Yes. We provide narrow-gap, high-tension configurations designed for child and pet safety without blocking your view.</p>
            </div>
            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-white text-xl font-semibold mb-2">How can I book installation?</h3>
              <p>
                Use our <Link href="/contact" className="text-white underline">contact page</Link>, call us directly, or WhatsApp us for a faster response and free site visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
