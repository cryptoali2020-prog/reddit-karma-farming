import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp } from 'lucide-react';

import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Payment from './components/Payment';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { PRICING_PLANS } from './data';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrder = (planId?: string) => {
    if (planId) {
      const plan = PRICING_PLANS.find(p => p.id === planId);
      setSelectedPlan(plan);
    } else {
      setSelectedPlan(PRICING_PLANS[1]); // Default to Premium
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-brand-orange/30">
      <TopBar />
      
      <main>
        {/* Pass order handlers to functional sections */}
        <div onClick={() => handleOrder()}>
          <Hero />
        </div>
        
        <Services />
        
        <div onClick={(e: any) => {
          const btn = e.target.closest('button');
          if (btn) {
            const planIdx = Array.from(btn.closest('section')?.querySelectorAll('button') || []).indexOf(btn);
            handleOrder(PRICING_PLANS[planIdx]?.id);
          }
        }}>
          <Pricing />
        </div>
        
        <HowItWorks />
        <Payment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-all shadow-xl"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/923029626015"
          className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] animate-float transition-shadow hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]"
        >
          <Phone className="w-8 h-8 fill-current" />
        </motion.a>
      </div>

      {/* Simplified Global Checker */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <CheckoutModal 
            isOpen={isCheckoutOpen} 
            onClose={() => setIsCheckoutOpen(false)} 
            plan={selectedPlan} 
          />
        )}
      </AnimatePresence>

      {/* Custom Styles Injection */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #05070A;
        }
        ::-webkit-scrollbar-thumb {
          background: #1F2228;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2D3139;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
