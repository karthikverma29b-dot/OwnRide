import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { val: 1000, suffix: '+', label: 'Happy Riders', emoji: '😊', color: '#00d4ff' },
  { val: 50, suffix: '+', label: 'Tourist Routes', emoji: '🗺️', color: '#7c3aed' },
  { val: 24, suffix: '/7', label: 'Hours Support', emoji: '🛡️', color: '#ec4899' },
  { val: 4, suffix: '+', label: 'Years Experience', emoji: '⭐', color: '#10b981' },
];

const quotes = [
  {
    text: "The mountains are calling and I must go.",
    author: "— John Muir",
  },
  {
    text: "Life is a journey. Make it a great ride.",
    author: "— Anonymous",
  },
  {
    text: "Not all those who wander are lost.",
    author: "— J.R.R. Tolkien",
  },
];

function StatCounter({ stat, inView }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-6 rounded-2xl glass text-center"
      style={{ border: `1px solid ${stat.color}20` }}
    >
      <motion.div
        className="text-3xl mb-2"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
      >
        {stat.emoji}
      </motion.div>
      <div className="text-4xl font-bold font-display" style={{ color: stat.color }}>
        {inView && (
          <CountUp end={stat.val} duration={2.5} separator="," />
        )}
        {!inView && '0'}
        <span>{stat.suffix}</span>
      </div>
      <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
    </motion.div>
  );
}

export default function TouristExperience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx(i => (i + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" style={{ zIndex: 2 }}>
      {/* Big scenic background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.06) 0%, transparent 50%),
              linear-gradient(180deg, #040d21 0%, #070f2b 50%, #040d21 100%)
            `
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Quote rotator */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)' }}>
            Tourist Experience
          </span>

          {/* Animated quotes */}
          <div className="h-28 flex flex-col items-center justify-center mb-8">
            <motion.div
              key={quoteIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-white italic mb-3 max-w-2xl mx-auto leading-relaxed">
                "{quotes[quoteIdx].text}"
              </p>
              <p className="text-gray-500 text-sm">{quotes[quoteIdx].author}</p>
            </motion.div>
          </div>

          {/* Quote dots */}
          <div className="flex justify-center gap-2 mb-12">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setQuoteIdx(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === quoteIdx ? '#00d4ff' : 'rgba(255,255,255,0.2)',
                  transform: i === quoteIdx ? 'scale(1.5)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          <h2 className="section-heading text-white mb-4">
            Numbers That{' '}
            <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every number here represents a real rider, a real adventure, a real memory.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <StatCounter stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>

        {/* Scenic mountain card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))',
            border: '1px solid rgba(255,255,255,0.08)',
            minHeight: '280px',
          }}
        >
          {/* Background scene */}
          <div className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `
                radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.1) 0%, transparent 60%),
                linear-gradient(180deg, #040d21 0%, #0a1628 100%)
              `
            }}>
            {/* Mountain shapes */}
            <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 200" style={{ opacity: 0.3 }}>
              <polygon points="0,200 200,60 400,200" fill="rgba(124,58,237,0.4)" />
              <polygon points="200,200 500,20 800,200" fill="rgba(0,212,255,0.3)" />
              <polygon points="600,200 900,50 1200,200" fill="rgba(124,58,237,0.35)" />
              <polygon points="800,200 1100,80 1200,200" fill="rgba(16,185,129,0.2)" />
            </svg>

            {/* Stars */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  background: 'white',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 60 + '%',
                }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
            <div>
              <div className="text-5xl mb-4">🌄</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                Your Next Adventure Awaits
              </h3>
              <p className="text-gray-400 max-w-md">
                From the snowy peaks of Manali to the serene valleys of Spiti — every route is better on two wheels.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary whitespace-nowrap shrink-0"
            >
              Start Your Journey 🚀
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
