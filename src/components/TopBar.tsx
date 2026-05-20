import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-xs font-medium tracking-wide">
          <span className="flex items-center gap-1 text-brand-orange animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            24/7 Reddit Marketing Services
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">Fast Delivery</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">Trusted Service</span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden sm:inline text-white/60">Secure Payments</span>
        </div>
        
        <a 
          href="https://wa.me/#" 
          className="flex items-center gap-2 px-3 py-1 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-3 h-3 fill-current" />
          WhatsApp Support
        </a>
      </div>
    </div>
  );
}
