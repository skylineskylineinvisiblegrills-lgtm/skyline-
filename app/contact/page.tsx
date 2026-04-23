"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const leadMessage = `Hello Skyline, I would like a free quote.%0A%0AName: ${encodeURIComponent(
      name
    )}%0APhone: ${encodeURIComponent(phone)}%0ARequirement: ${encodeURIComponent(
      message
    )}`;
    window.open(`https://wa.me/919008603980?text=${leadMessage}`, "_blank");
  };

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20 cursor-default">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 mx-auto text-lg max-w-2xl"
          >
            Invisible Grills & Smart Cloth Hangers services in Bengaluru at affordable cost with free site visit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white transition-colors duration-500">
                <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-neutral-400 mb-2">We are available Mon-Sat, 9AM to 8PM.</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:9008739365" className="text-white hover:text-neutral-300 font-medium">+91 90087 39365</a>
                  <a href="tel:9008603980" className="text-white hover:text-neutral-300 font-medium">+91 90086 03980</a>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[#25D366] transition-colors duration-500">
                <Send className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Us</h3>
                <p className="text-neutral-400 mb-2">Get instant replies and quote estimates via WhatsApp.</p>
                <a href="https://wa.me/919008603980?text=Hello%20Skyline,%20I%20would%20like%20to%20enquire%20about%20your%20Premium%20Invisible%20Grills%20and%20Smart%20Cloth%20Hangers." target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium inline-flex items-center gap-2 hover:underline">
                  Message Now 
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white transition-colors duration-500">
                <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-neutral-400 mb-2">For business inquiries and partnership opportunities.</p>
                <a href="mailto:info@skylinegrills.com" className="text-white hover:text-neutral-300 font-medium">info@skylinegrills.com</a>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white transition-colors duration-500">
                <MapPin className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Headquarters</h3>
                <p className="text-neutral-400">Serving Premium Homes<br/>Bangalore & Surrounding Areas, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl p-8 lg:p-10 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-neutral-400 font-medium">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-neutral-400 font-medium">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-neutral-400 font-medium">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                  placeholder="I am interested in invisible grills for my balcony..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-neutral-200 transition-colors mt-4 flex items-center justify-center gap-2"
              >
                Request Free Quote on WhatsApp
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
        
        {/* Map Placeholder */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-24 rounded-3xl overflow-hidden glass h-96 border border-white/10 flex items-center justify-center relative"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bangalore,India&zoom=10&size=1000x400&sensor=false')] bg-cover bg-center"></div>
          <div className="relative z-10 text-center">
            <MapPin className="w-12 h-12 text-white/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Map Area</h3>
            <p className="text-neutral-400">Integrate Google Maps snippet here for production.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
