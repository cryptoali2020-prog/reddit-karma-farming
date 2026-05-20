import { motion } from 'motion/react';
import { CRYPTO_PAYMENTS } from '../data';
import * as Icons from 'lucide-react';
import { ShieldCheck, Copy, QrCode } from 'lucide-react';

export default function Payment() {
  return (
    <section className="py-24 px-6 bg-slate-950/50" id="payments">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 italic tracking-tight">SECURE <span className="text-brand-orange">ANONYMOUS</span> PAYMENTS</h2>
          <p className="text-white/50 max-w-2xl mx-auto">We prioritize your privacy. All transactions are handled through secure decentralized gateways with instant confirmation.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[3rem] border-brand-orange/20 relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Crypto Checkout</h3>
                <p className="text-white/40 text-sm">Select your preferred asset</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-2 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10">No KYC Required</div>
              <div className="px-4 py-2 rounded-full bg-green-500/10 text-[10px] font-bold uppercase tracking-widest text-green-400 border border-green-500/20">Instant Confirm</div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {CRYPTO_PAYMENTS.map((payment) => {
              const IconComponent = (Icons as any)[payment.icon] || Icons.Coins;
              return (
                <button
                  key={payment.symbol}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/50 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-brand-orange transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold">{payment.symbol}</span>
                </button>
              );
            })}
          </div>

          {/* Checkout Interface Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-3xl bg-black/40 border border-white/5">
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-lg font-bold">Payment Details</h4>
              <div className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">Wallet Address</label>
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white/60">
                    <span className="truncate flex-grow">TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
                    <button className="text-brand-orange hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-0.5">Network</span>
                    <span className="text-xs font-bold">TRON (TRC20)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-0.5">Estimated Time</span>
                    <span className="text-xs font-bold text-green-400">~2 Mins</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-orange/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-6 rounded-3xl bg-white flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-black" />
                </div>
              </div>
              <p className="text-white/40 text-[10px] font-medium max-w-[200px] text-center">Scan the QR code to complete your secure crypto transaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
