import { motion } from 'motion/react';
import { ArrowRight, Phone, Shield, Zap, Bitcoin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        {/* Particle effect simulation */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random()
              }}
              animate={{ 
                y: [null, '-20px', '0px'],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Boost Your <span className="text-brand-orange text-glow-orange">Reddit Presence</span> & Brand Authority
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional Reddit Marketing, Karma Farming & Promotion Services. 
            Scale your engagement, build authority, and drive targeted traffic with 
            our secure anonymity-focused solutions.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button className="group relative px-8 py-4 bg-brand-orange hover:bg-[#FF571C] text-white font-bold rounded-2xl flex items-center gap-2 transition-all glow-orange">
            Order Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => window.open('https://wa.me/923029626015', '_blank')}
            className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-2xl flex items-center gap-2 transition-all"
          >
            <Phone className="w-5 h-5" />
            Contact on WhatsApp
          </button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">Fast Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Bitcoin className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">Secure Crypto Payments</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">Premium Reddit Growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
