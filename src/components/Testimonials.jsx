import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Sharma',
    location: 'Delhi → Manali',
    rating: 5,
    text: 'OwnRide made my Manali trip absolutely epic! The Royal Enfield was in perfect condition, full tank as promised, and the helmet was clean. The booking process was super smooth. Will definitely use again!',
    emoji: '🏔️',
    avatar: 'AS',
    color: '#00d4ff',
  },
  {
    name: 'Priya Mehta',
    location: 'Pune → Shimla',
    rating: 5,
    text: 'First time riding in the hills and OwnRide made it stress-free! Got 24/7 support and they even recommended the best routes. The scooty was so easy to handle. Amazing experience overall.',
    emoji: '🌄',
    avatar: 'PM',
    color: '#7c3aed',
  },
  {
    name: 'Rahul Verma',
    location: 'Mumbai → Spiti',
    rating: 5,
    text: 'Rented a Himalayan for the Spiti Valley trip and it was PERFECT for off-road! The bike handled everything flawlessly. Affordable price, verified vehicle. 10/10 would recommend to every biker!',
    emoji: '🏕️',
    avatar: 'RV',
    color: '#10b981',
  },
  {
    name: 'Sneha Patel',
    location: 'Ahmedabad → Kasol',
    rating: 5,
    text: 'Kasol on a scooty was the dream! The digital booking was so easy and the pickup location was exactly where they said. No hidden charges, transparent pricing. OwnRide is the real deal.',
    emoji: '🌿',
    avatar: 'SP',
    color: '#ec4899',
  },
  {
    name: 'Karan Singh',
    location: 'Chandigarh → Dharamshala',
    rating: 5,
    text: 'Rode a Pulsar to McLeod Ganj. Bike was in mint condition and very well maintained. Customer support answered all my queries instantly. This is the future of tourist travel!',
    emoji: '⛩️',
    avatar: 'KS',
    color: '#f59e0b',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const getVisible = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + testimonials.length) % testimonials.length;
      items.push({ ...testimonials[idx], offset: i });
    }
    return items;
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ zIndex: 2 }}>
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.2)' }}>
            Rider Stories
          </span>
          <h2 className="section-heading text-white mb-4">
            What Our{' '}
            <span className="gradient-text">Riders Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real reviews from real adventurers who've trusted OwnRide for their journeys.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Cards */}
          <div className="flex gap-6 justify-center items-center overflow-hidden py-8">
            {getVisible().map(({ offset, ...t }) => (
              <motion.div
                key={`${t.name}-${offset}`}
                initial={false}
                animate={{
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: offset === 0 ? 1 : 0.4,
                  x: offset * 30,
                  zIndex: offset === 0 ? 10 : 0,
                }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
                className="relative p-6 rounded-3xl glass flex-shrink-0 w-full max-w-sm"
                style={{
                  border: `1px solid ${offset === 0 ? t.color + '40' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: offset === 0 ? `0 0 50px ${t.color}20` : 'none',
                }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 mb-4 opacity-30" style={{ color: t.color }} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location} {t.emoji}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? 'linear-gradient(90deg, #00d4ff, #7c3aed)' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
