"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="tel:9008739365"
          className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform relative group"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg hidden md:block">
            Call Us
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Link
          href="https://wa.me/919008603980?text=Hello%20Skyline,%20I%20would%20like%20to%20enquire%20about%20your%20Premium%20Invisible%20Grills%20and%20Smart%20Cloth%20Hangers."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform relative group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg hidden md:block">
            WhatsApp
          </span>
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></span>
        </Link>
      </motion.div>
    </div>
  );
}
