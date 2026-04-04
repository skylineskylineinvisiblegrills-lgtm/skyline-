"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Award, Users } from "lucide-react";
import Tilt from "react-parallax-tilt";

const stats = [
  { label: "Projects Completed", value: "2,500+", icon: Award },
  { label: "Happy Customers", value: "2,000+", icon: Users },
  { label: "Years of Experience", value: "10+", icon: Wrench },
  { label: "Safety Rating", value: "100%", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Skyline</span>
            </h1>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Skyline Invisible Grills was founded with a singular mission: to provide uncompromising safety without disrupting the aesthetic appeal of modern homes. We believe that your home should be a safe haven, and you shouldn't have to choose between a beautiful view and peace of mind.
              </p>
              <p>
                We use only the highest grade materials—premium 316 marine-grade stainless steel cables coated in durable nano nylon. This ensures anti-dust, anti-rust, and high-tensile strength that lasts for decades.
              </p>
            </div>
          </motion.div>
          
          <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} transitionSpeed={2000}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden glass border border-white/20"
            >
              <Image 
                src="/images/hero_balcony.png" 
                alt="About Skyline" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-2xl font-bold text-white mb-2">Quality Materials</div>
                <div className="text-neutral-300">Expert Installation & Safety Focus</div>
              </div>
            </motion.div>
          </Tilt>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 relative z-10">{stat.value}</div>
              <div className="text-sm text-neutral-400 uppercase tracking-widest relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
