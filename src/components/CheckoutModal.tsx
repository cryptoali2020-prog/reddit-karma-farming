import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, Phone, ShoppingCart, Bitcoin } from 'lucide-react';
import { CRYPTO_PAYMENTS } from '../data';

export default function CheckoutModal({ isOpen, onClose, plan }: { isOpen: boolean, onClose: () => void, plan: any }) {
  const [step, setStep] = useState(1);
  const [selectedCrypto, setSelectedCrypto] = useState(CRYPTO_PAYMENTS[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors text-white/40"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Order Summary</h3>
                <p className="text-white/40 text-sm">Secure Checkout for {plan?.name || 'Selected Service'}</p>
              </div>

              <div className="glass p-6 rounded-3xl border-brand-orange/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60">Service Plan</span>
                  <span className="font-bold">{plan?.name || 'Premium Service'}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60">Delivery Time</span>
                  <span className="text-brand-blue font-bold">{plan?.delivery || '24-48h'}</span>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                  <span className="text-white font-bold">Total Amount</span>
                  <span className="text-2xl font-extrabold text-brand-orange">{plan?.price || '$99.00'}</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-2">Choose Crypto Asset</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CRYPTO_PAYMENTS.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => setSelectedCrypto(crypto)}
                      className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        selectedCrypto.symbol === crypto.symbol 
                          ? 'border-brand-orange bg-brand-orange/10' 
                          : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Bitcoin className="w-5 h-5 text-brand-orange" />
                      <span className="text-xs font-bold">{crypto.symbol}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full py-5 bg-brand-orange hover:bg-[#FF571C] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all glow-orange"
              >
                Continue to Payment
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Send Payment</h3>
                <p className="text-white/40 text-sm">Transfer {plan?.price || '$99'} worth of {selectedCrypto.symbol}</p>
              </div>

              <div className="glass p-8 rounded-3xl border-brand-orange/20 text-center">
                <div className="inline-block p-4 rounded-2xl bg-white mb-6">
                  <div className="w-32 h-32 bg-slate-200 border-4 border-white flex items-center justify-center text-slate-800 text-xs font-bold">QR CODE</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs break-all text-white/70">
                    {selectedCrypto.address}
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest">Network: {selectedCrypto.network}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-brand-orange/30 hover:bg-white/5 transition-all">
                  <Upload className="w-6 h-6 text-white/40" />
                  <span className="text-sm font-bold text-white/40">Upload Payment Screenshot</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 glass text-white font-bold rounded-2xl transition-all"
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 bg-brand-orange hover:bg-[#FF571C] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all glow-orange"
                >
                  Confirm Payment
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12 space-y-8 animate-in zoom-in duration-500">
              <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.3)] border-2 border-green-500/50">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-4 italic">ORDER UNDER REVIEW</h3>
                <p className="text-white/50 max-w-sm mx-auto leading-relaxed">
                  Your transaction has been submitted. Our team will verify and initiate your campaign in <span className="text-brand-orange">less than 2 hours</span>.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/923029626015?text=I've%20just%20placed%20an%20order%20for%20${plan?.name}%20for%20${plan?.price}`}
                  className="w-full py-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  Confirm on WhatsApp
                  <Phone className="w-5 h-5 fill-current" />
                </a>
                <button 
                  onClick={onClose}
                  className="w-full py-4 text-white/30 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
