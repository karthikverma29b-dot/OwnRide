import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Fuel, Gauge, Calendar } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Activa Scooty',
    emoji: '🛵',
    price: 399,
    category: 'Scooty',
    fuel: 'Petrol / Full Tank',
    seats: '2 Persons',
    mileage: '55 kmpl',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
    features: ['Automatic', 'City Friendly', 'Easy to Ride', 'Helmet Incl.'],
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Royal Enfield Classic',
    emoji: '🏍️',
    price: 999,
    category: 'Cruiser',
    fuel: 'Petrol / Full Tank',
    seats: '2 Persons',
    mileage: '35 kmpl',
    color: '#00d4ff',
    glow: 'rgba(0,212,255,0.3)',
    features: ['350cc Engine', 'Touring Ready', 'Thunderbird Vibes', 'GPS Mount'],
    badge: 'Tourist Fav',
  },
  {
    id: 3,
    name: 'Bajaj Pulsar 150',
    emoji: '🏎️',
    price: 599,
    category: 'Sport',
    fuel: 'Petrol / Full Tank',
    seats: '2 Persons',
    mileage: '45 kmpl',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    features: ['150cc Engine', 'Sport Look', 'Great Mileage', 'Crash Guard'],
    badge: 'Budget Pick',
  },
  {
    id: 4,
    name: 'RE Himalayan',
    emoji: '🏔️',
    price: 1299,
    category: 'Adventure',
    fuel: 'Petrol / Full Tank',
    seats: '2 Persons',
    mileage: '30 kmpl',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.3)',
    features: ['411cc Engine', 'Off-Road Ready', 'All Terrain', 'Tank Bag Incl.'],
    badge: 'Adventure Pro',
  },
];

function VehicleCard({ vehicle, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="vehicle-card relative group"
      style={{
        boxShadow: hovered ? `0 0 60px ${vehicle.glow}, 0 30px 60px rgba(0,0,0,0.5)` : 'none',
        border: hovered ? `1px solid ${vehicle.color}40` : '1px solid rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Badge */}
      <div
        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-10"
        style={{ background: `${vehicle.color}20`, color: vehicle.color, border: `1px solid ${vehicle.color}40` }}
      >
        {vehicle.badge}
      </div>

      {/* Vehicle visual */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `radial-gradient(circle at 50% 60%, ${vehicle.color}10 0%, transparent 70%)` }}
      >
        <motion.div
          className="text-8xl"
          animate={hovered ? { scale: 1.15, y: -5, rotate: [-2, 2] } : { scale: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {vehicle.emoji}
        </motion.div>

        {/* Glow bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: `linear-gradient(transparent, ${vehicle.color}08)` }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-white font-display">{vehicle.name}</h3>
            <span className="text-xs text-gray-500 uppercase tracking-wide">{vehicle.category}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: vehicle.color }}>₹{vehicle.price}</div>
            <div className="text-xs text-gray-500">per day</div>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: Fuel, val: vehicle.fuel.split('/')[0].trim() },
            { icon: Users, val: vehicle.seats },
            { icon: Gauge, val: vehicle.mileage },
          ].map((spec, i) => (
            <div key={i} className="flex flex-col items-center p-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <spec.icon className="w-3.5 h-3.5 text-gray-400 mb-1" />
              <span className="text-xs text-gray-300 text-center">{spec.val}</span>
            </div>
          ))}
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.features.map(f => (
            <span key={f} className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: `${vehicle.color}10`, color: vehicle.color, border: `1px solid ${vehicle.color}20` }}>
              {f}
            </span>
          ))}
        </div>

        {/* Book button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToBooking}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300"
          style={{
            background: hovered ? `linear-gradient(135deg, ${vehicle.color}, ${vehicle.color}aa)` : 'rgba(255,255,255,0.05)',
            color: hovered ? '#fff' : vehicle.color,
            border: `1px solid ${vehicle.color}40`,
            boxShadow: hovered ? `0 0 20px ${vehicle.glow}` : 'none',
          }}
        >
          Book Now — ₹{vehicle.price}/day
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function VehicleShowcase() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="vehicles" className="py-24 relative" style={{ zIndex: 2 }}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed', border: '1px solid rgba(124,58,237,0.2)' }}>
            Our Fleet
          </span>
          <h2 className="section-heading text-white mb-4">
            Choose Your{' '}
            <span className="gradient-text">Perfect Ride</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From city scoots to mountain adventures — we have the perfect two-wheeler for every journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
