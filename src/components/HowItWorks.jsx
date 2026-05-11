import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, CreditCard, Navigation } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Choose Vehicle',
    desc: 'Browse our fleet and pick the perfect ride for your adventure. Filter by type, budget, or mileage.',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.4)',
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Make Payment',
    desc: 'Secure digital payment via UPI, cards, or wallet. Instant confirmation sent to your phone.',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.4)',
  },
  {
    icon: Navigation,
    step: '03',
    title: 'Ride Freely',
    desc: 'Your verified bike gets delivered with a full tank and helmet. Hit the road and explore!',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.4)',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ zIndex: 2 }}>
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>
            Simple Process
          </span>
          <h2 className="section-heading text-white mb-4">
            Ready in{' '}
            <span className="gradient-text">3 Easy Steps</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Getting your dream ride is quicker than you think.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-1/6 right-1/6 h-px"
            style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed, #10b981)', opacity: 0.3 }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.7, type: 'spring' }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-8">
                    {/* Outer ring animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${step.color}30` }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ border: `2px solid ${step.color}20` }}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 + 0.5 }}
                    />

                    {/* Icon container */}
                    <motion.div
                      className="relative w-24 h-24 rounded-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(circle, ${step.color}20 0%, ${step.color}05 100%)`,
                        border: `2px solid ${step.color}40`,
                        boxShadow: `0 0 30px ${step.glow}`,
                      }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 50px ${step.glow}` }}
                    >
                      <Icon className="w-10 h-10" style={{ color: step.color }} />
                    </motion.div>

                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: step.color, color: '#040d21' }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>

                  {/* Arrow (between steps on mobile) */}
                  {i < steps.length - 1 && (
                    <motion.div
                      className="mt-8 lg:hidden text-3xl"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
