import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Vouched by the <span className="text-brand-orange">Reddit Elite</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Join hundreds of successful brands and individuals dominating their niche.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 glass rounded-[2.5rem] relative group hover:border-brand-orange/30 transition-all"
            >
              <div className="absolute -top-6 -right-6 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors">
                <MessageSquareQuote className="w-24 h-24" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 flex items-center justify-center font-bold text-lg border border-white/5">
                  {review.username[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm">u/{review.username}</h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
