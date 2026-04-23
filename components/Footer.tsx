import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-neutral-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white block">SKYLINE</span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">Invisible Grills</span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed">
              Premium invisible grills and smart cloth hangers for modern homes. Combining uncompromised safety with unhindered views, engineered for durability and designed for elegance.
            </p>
            <p className="max-w-md text-sm leading-relaxed mt-4 text-neutral-300">
              Invisible Grills & Smart Cloth Hangers services in Bengaluru at affordable cost with free site visit.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white/50 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9008739365" className="hover:text-white transition-colors">+91 90087 39365</a>
                  <a href="tel:9008603980" className="hover:text-white transition-colors">+91 90086 03980</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/50 shrink-0" />
                <a href="mailto:info@skylineinvisiblegrills.in" className="hover:text-white transition-colors">info@skylineinvisiblegrills.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                <span>Serving premium homes worldwide.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs mb-8">
          <p>&copy; {new Date().getFullYear()} Skyline Invisible Grills. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
}
