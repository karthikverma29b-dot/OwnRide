import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bike, Instagram, Twitter, Youtube, Facebook, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Services: ['Bike Rental', 'Scooty Rental', 'Corporate Plans', 'Group Booking'],
  Support: ['Help Center', 'Safety', 'Cancellation Policy', 'Terms of Service'],
  Destinations: ['Manali', 'Shimla', 'Kasol', 'Spiti Valley', 'Dharamshala'],
};

const socials = [
  { icon: Instagram, href: '#', color: '#ec4899', label: 'Instagram' },
  { icon: Twitter, href: '#', color: '#00d4ff', label: 'Twitter' },
  { icon: Youtube, href: '#', color: '#ff0000', label: 'YouTube' },
  { icon: Facebook, href: '#', color: '#1877f2', label: 'Facebook' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="footer" className="relative pt-20 pb-8 overflow-hidden" style={{ zIndex: 2 }}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.4), transparent)' }} />

      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #040d21 0%, #020a18 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}>
                <Bike className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display gradient-text">OwnRide</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium tourist bike and scooty rentals. Explore the mountains, valleys, 
              and everything in between — at affordable prices.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: MapPin, text: 'Manali, Himachal Pradesh, India' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: Mail, text: 'hello@ownride.in' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{c.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#"
                      className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-cyan-400">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-6 mb-12"
          style={{ border: '1px solid rgba(0,212,255,0.15)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Stay in the Loop 🏍️
              </h3>
              <p className="text-gray-400 text-sm">Get exclusive deals, route guides, and travel tips.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              {!subscribed ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-glass px-4 py-2.5 text-sm flex-1 md:w-56"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)' }}
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </motion.button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-emerald-400 font-semibold text-sm flex items-center gap-2"
                >
                  ✓ You're in! Welcome to the OwnRide community 🎉
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-gray-500 text-sm">
            © 2026 OwnRide. All rights reserved. Made with ❤️ for adventurers.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map(s => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  aria-label={s.label}
                >
                  <Icon className="w-4 h-4" style={{ color: s.color }} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
