import { Mail, Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight">REDDIT<span className="text-brand-orange">GROWTH</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The premier anonymous marketing agency for brand dominance on the world's most influential social platform. Secure, fast, and professional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-brand-orange hover:border-brand-orange transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-brand-orange hover:border-brand-orange transition-all"><Github className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-brand-orange hover:border-brand-orange transition-all"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-brand-orange hover:border-brand-orange transition-all"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Karma Farming</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Aged Accounts</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">AEO Ranking</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Traffic Growth</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Upvote Campaigns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Company</h4>
            <ul className="space-y-4">
              <li><a href="#pricing" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Pricing Plans</a></li>
              <li><a href="#how-it-works" className="text-sm text-white/50 hover:text-brand-orange transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-sm text-white/50 hover:text-brand-orange transition-colors">FAQ Support</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-brand-orange transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase text-xs tracking-widest text-white/30">Payment Methods</h4>
            <div className="grid grid-cols-4 gap-3">
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">USDT</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">BTC</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">ETH</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">SOL</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">LTC</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">BNB</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">TRX</div>
              <div className="aspect-square glass rounded-lg flex items-center justify-center text-[10px] font-bold text-white/30">POL</div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">© 2026 REDDIT GROWTH PRO • ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-green-500/50 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
