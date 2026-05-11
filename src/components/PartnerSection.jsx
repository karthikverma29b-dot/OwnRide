import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Bike, Star, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn Daily Income',
    desc: 'List your bike and earn ₹500–₹1500 per day without any effort.',
    color: '#10b981',
  },
  {
    icon: Bike,
    title: 'Simple Onboarding',
    desc: 'Register in under 5 minutes. We handle all bookings and payments for you.',
    color: '#00d4ff',
  },
  {
    icon: Star,
    title: 'Premium Exposure',
    desc: 'Your vehicle featured on our platform seen by thousands of tourists daily.',
    color: '#f59e0b',
  },
];

export default function PartnerSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="partner" className="py-24 relative overflow-hidden" style={{ zIndex: 2 }}>
      <div className="absolute inset-0">
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 50%, rgba(0,212,255,0.05) 0%, transparent 60%)
            `
          }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>
              Partner Program
            </span>
            <h2 className="section-heading text-white mb-6">
              Own a Bike?{' '}
              <span className="gradient-text">Start Earning</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Join hundreds of local bike owners who are making passive income by listing their vehicles on OwnRide. 
              We handle marketing, bookings, and payments — you just hand over the keys.
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-10">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15 + 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}>
                      <Icon className="w-6 h-6" style={{ color: b.color }} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{b.title}</h4>
                      <p className="text-gray-400 text-sm">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 group"
              style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}
            >
              List Your Bike Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl p-8 glass"
              style={{
                border: '1px solid rgba(16,185,129,0.2)',
                boxShadow: '0 0 60px rgba(16,185,129,0.1)',
              }}>
              {/* Earn card */}
              <div className="text-center mb-8">
                <motion.div
                  className="text-7xl mb-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🤝
                </motion.div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">Become a Partner</h3>
                <p className="text-gray-400 text-sm">Join our growing fleet of 200+ partners</p>
              </div>

              {/* Earnings breakdown */}
              <div className="space-y-3">
                {[
                  { label: 'Scooty earnings/month', val: '₹8,000–₹15,000', color: '#10b981' },
                  { label: 'Bike earnings/month', val: '₹15,000–₹30,000', color: '#00d4ff' },
                  { label: 'Adventure bike/month', val: '₹25,000–₹45,000', color: '#7c3aed' },
                ].map(item => (
                  <div key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="font-bold text-sm" style={{ color: item.color }}>{item.val}</span>
                  </div>
                ))}
              </div>

              {/* Steps */}
              <div className="mt-6 p-4 rounded-2xl"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
                <p className="text-xs text-gray-400 text-center mb-3 font-semibold uppercase tracking-wide">
                  Quick Onboarding
                </p>
                <div className="flex items-center justify-between text-center">
                  {['Register', '→', 'List Bike', '→', 'Earn'].map((s, i) => (
                    <span key={i} className={`text-sm ${s === '→' ? 'text-gray-600' : 'text-emerald-400 font-semibold'}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass"
              style={{ border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', fontSize: '12px', fontWeight: 'bold' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              200+ Active Partners ⭐
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass"
              style={{ border: '1px solid rgba(16,185,129,0.3)', color: '#10b981', fontSize: '12px', fontWeight: 'bold' }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              ₹2.5Cr+ Paid Out 💰
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
