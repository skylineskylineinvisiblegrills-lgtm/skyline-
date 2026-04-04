"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/hero_balcony.png", alt: "Balcony Sunset View" },
  { src: "/images/invisible_grills_balcony.png", alt: "Balcony Invisible Grills Close-up" },
  { src: "/images/invisible_grills_window.png", alt: "Window Grills Setup" },
  { src: "/images/cloth_hangers_ceiling.png", alt: "Ceiling Cloth Hangers" },
  { src: "/images/cloth_hangers_pulley.png", alt: "Pulley Cloth Hangers" },
  { src: "/images/gallery_patio.png", alt: "Luxury Patio Secured" },
  { src: "/images/gallery_villa.png", alt: "Modern Villa Exterior Grills" },
  { src: "/images/grills_staircase.png", alt: "Staircase Invisible Grills" },
  { src: "/images/grills_child_safety.png", alt: "Child Safety Grills" },
  { src: "/images/grills_dealers.png", alt: "Premium Showroom" },
  { src: "/images/grills_pigeon_control.png", alt: "Pigeon Control Setup" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [...galleryImages, ...galleryImages]; // duplicating for masonry grid effect

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 cursor-default">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg"
          >
            A visual showcase of our premium installations across modern homes and luxury apartments.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer inline-block w-full border border-white/10"
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
