import { motion } from 'motion/react';
import { Send, Phone, MessageSquare, Rocket, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-950/50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">Let's Fuel Your <span className="text-brand-orange">Takeover</span></h2>
            <p className="text-white/50 mb-12 max-w-lg leading-relaxed">Ready for professional growth? Reach out for custom quotes, bulk orders, or long-term brand strategy. Our team responds in less than 4 hours.</p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/923029626015"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 glass rounded-[2rem] group hover:border-brand-orange/30 transition-all block"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp Support</h4>
                  <p className="text-xs text-white/40">24/7 Priority Channel</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 glass rounded-[2rem] group hover:border-brand-orange/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#0088CC]/10 flex items-center justify-center text-[#0088CC] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold">Telegram Official</h4>
                  <p className="text-xs text-white/40">u/RedditGrowthOfficial</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 glass rounded-[2rem] group hover:border-brand-orange/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center text-[#5865F2] group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Discord Server</h4>
                  <p className="text-xs text-white/40">Join the Community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-[3rem] blur-3xl -z-10"></div>
            <div className="glass p-10 md:p-12 rounded-[3rem] border-white/5">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2 mb-2 block">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2 mb-2 block">Email Address</label>
                  <input type="email" placeholder="example@growth.com" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2 mb-2 block">Service Type</label>
                  <select className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/10 outline-none transition-all text-white/50">
                    <option>Reddit Karma Farming</option>
                    <option>Account Purchase</option>
                    <option>Brand Promotion</option>
                    <option>Custom Campaign</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2 mb-2 block">Your Message</label>
                  <textarea rows={4} placeholder="Describe your goals..." className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20 resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-brand-orange hover:bg-[#FF571C] text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all glow-orange active:scale-95">
                  Send Command
                  <Rocket className="w-5 h-5" />
                </button>
                <p className="text-center text-[10px] font-bold text-brand-orange animate-pulse">FAST RESPONSE NOTICE: ONLINE NOW</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
