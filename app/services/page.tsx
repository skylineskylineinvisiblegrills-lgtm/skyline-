"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Tilt from "react-parallax-tilt";

const grillsServices = [
  { title: "Invisible Grills for Balconies", desc: "Enjoy completely unobstructed views from your balcony while ensuring absolute safety for kids and pets.", image: "/images/invisible_grills_balcony.png" },
  { title: "Invisible Grills for Windows", desc: "Secure your windows seamlessly. Perfect for high-rise apartments and modern villas with uncompromised aesthetics.", image: "/images/invisible_grills_window.png" },
  { title: "Invisible Grills Manufacturer", desc: "We manufacture premium grade tensioning components and high-quality invisible grills in our advanced facility.", image: "/images/grills_manufacturer.png" },
  { title: "Stainless Steel Invisible Grills", desc: "Utilizing 316 marine-grade stainless steel cables with nano nylon coating for unparalleled anti-rust strength.", image: "/images/grills_stainless_steel.png" },
  { title: "Invisible Grills Dealers", desc: "Visit our state-of-the-art showrooms or connect with our certified dealers to explore safety display setups.", image: "/images/grills_dealers.png" },
  { title: "Invisible Grills Fixing Charges", desc: "Transparent, competitive fixing charges with expert installers securing your premises using precision tools.", image: "/images/grills_fixing_charges.png" },
  { title: "Invisible Grills for Child Safety", desc: "Provide a safe haven for your children without blocking their view of the beautiful world outside.", image: "/images/grills_child_safety.png" },
  { title: "Pets Protection Safety Grills", desc: "Keep your playful cats and dogs 100% safe on high floors without making them feel caged in.", image: "/images/grills_pets_protection.png" },
  { title: "Pigeon Control Safety Grill", desc: "Effectively keep pigeons and birds away without the need for traditional, ugly bird nets.", image: "/images/grills_pigeon_control.png" },
  { title: "Invisible Grills for Staircases", desc: "Secure your high-end wooden or modern staircases with seamless, floor-to-ceiling tensioned cables.", image: "/images/grills_staircase.png" },
];

const hangersServices = [
  { title: "Ceiling Cloth Hangers", desc: "Smart vertical space utilization. Robust and rust-proof finish with elegant design.", image: "/images/cloth_hangers_ceiling.png" },
  { title: "Pull & Dry Systems", desc: "Individual rod control with high-quality nylon ropes and smooth pulley mechanisms.", image: "/images/cloth_hangers_pulley.png" },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 cursor-default">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            Explore our state-of-the-art product range designed specifically for luxury living and safety.
          </motion.p>
        </div>

        {/* Section: Invisible Grills */}
        <section id="grills" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Invisible Grills</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grillsServices.map((service, idx) => (
              <Tilt key={idx} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10"
                >
                  <div className="relative w-full aspect-video">
                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-neutral-400 shrink-0 mt-1" />
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-6 md:mt-8 pt-6 border-t border-white/10">
                       <a 
                         href={`https://wa.me/9008603980?text=Hello%20Skyline,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}.`} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300 w-full"
                       >
                         <MessageCircle className="w-4 h-4" /> Enquire via WhatsApp
                       </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Section: Cloth Hangers */}
        <section id="hangers">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-white">Smart Cloth Hangers</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hangersServices.map((service, idx) => (
              <Tilt key={idx} tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10"
                >
                  <div className="relative w-full aspect-video">
                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-neutral-400 leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-6 md:mt-8 pt-6 border-t border-white/10">
                       <a 
                         href={`https://wa.me/9008603980?text=Hello%20Skyline,%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}.`} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-3 rounded-full text-sm md:text-base font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300 w-full"
                       >
                         <MessageCircle className="w-4 h-4" /> Enquire via WhatsApp
                       </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
