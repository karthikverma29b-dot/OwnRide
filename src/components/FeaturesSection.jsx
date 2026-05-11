import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fuel, Shield, Headphones, MapPin, Smartphone, HardHat } from 'lucide-react';

const features = [
  {
    icon: Fuel,
    title: 'Full Tank Delivery',
    desc: 'Every vehicle delivered with a full tank. Ride without any refueling worries.',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.1)',
  },
  {
    icon: Shield,
    title: 'Verified Vehicles',
    desc: 'All bikes undergo rigorous safety checks before every rental.',
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.1)',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance. We\'re always here when you need us.',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
  },
  {
    icon: MapPin,
    title: 'Tourist Friendly',
    desc: 'Expert route recommendations and local knowledge for the best experience.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: Smartphone,
    title: 'Digital Booking',
    desc: 'Book, pay, and manage your ride entirely online. No paperwork.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    icon: HardHat,
    title: 'Helmet Included',
    desc: 'ISI certified helmets provided with every rental at no extra cost.',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
  },
];

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative p-6 rounded-2xl glass cursor-default"
      style={{ border: `1px solid ${feature.color}20` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${feature.color}10 0%, transparent 70%)` }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: feature.bg }}
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Icon className="w-7 h-7" style={{ color: feature.color }} />
      </motion.div>

      <h3 className="text-lg font-bold text-white mb-2 font-display">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 relative" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>
            Why Choose OwnRide
          </span>
          <h2 className="section-heading text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Ride</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We've designed every touchpoint of your rental experience to be smooth, safe, and unforgettable.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
