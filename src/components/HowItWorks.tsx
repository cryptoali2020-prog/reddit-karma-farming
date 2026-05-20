import { motion } from 'motion/react';
import { Search, CreditCard, Send, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Choose Service', desc: 'Select the marketing package that fits your needs.' },
  { icon: CreditCard, title: 'Make Payment', desc: 'Complete anonymous transaction via crypto gateway.' },
  { icon: Send, title: 'Send Details', desc: 'Provide Reddit link and requirements via secure form.' },
  { icon: Rocket, title: 'Start Campaign', desc: 'Our team initiates growth sequence within 24 hours.' },
  { icon: CheckCircle2, title: 'Receive Results', desc: 'Watch your presence grow with real-time tracking.' }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">The Growth <span className="text-brand-orange">Pipeline</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Five simple steps to dominance. Fully automated and optimized for conversion.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-[2rem] glass flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 relative">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
