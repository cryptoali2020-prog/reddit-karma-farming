import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { PRICING_PLANS } from '../data';

export default function Pricing() {
  return (
    <section className="py-24 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Transparent <span className="text-brand-blue">Pricing</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Choose the plan that fits your growth ambitions. From personal brands to global startups.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[2.5rem] flex flex-col ${
                plan.recommended 
                  ? 'bg-slate-900 border-2 border-brand-orange/50 glow-orange scale-105 z-10' 
                  : 'glass'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 py-2 px-6 bg-brand-orange rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="mb-10 text-center">
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest block mb-2">{plan.name}</span>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-display font-extrabold">{plan.price}</span>
                  {plan.id !== 'enterprise' && <span className="text-white/40 mb-2">/pkg</span>}
                </div>
                <div className="text-xs text-brand-blue font-bold mt-4 px-4 py-1 rounded-full bg-brand-blue/10 inline-block">
                  Delivery: {plan.delivery}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-brand-orange/20 text-brand-orange">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                  plan.recommended 
                    ? 'bg-brand-orange hover:bg-[#FF571C] text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
