import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-950/50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Reddit <span className="text-brand-orange">Expertise</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">High-performance solutions designed to maximize your impact on the Worlds most influential community platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 glass rounded-3xl hover:border-brand-orange/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform group-hover:glow-orange">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm mb-6 flex-grow">{service.description}</p>
                <button className="w-full py-3 px-4 rounded-xl border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-brand-orange hover:border-brand-orange transition-all active:scale-95">
                  Order Service
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
