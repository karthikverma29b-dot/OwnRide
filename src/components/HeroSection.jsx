import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Star, Shield, Clock } from 'lucide-react';

const badges = [
  { icon: Star, label: '4.9★ Rated', color: '#f59e0b' },
  { icon: Shield, label: 'Verified Fleet', color: '#10b981' },
  { icon: Clock, label: '24/7 Support', color: '#00d4ff' },
];

export default function HeroSection() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative h-screen max-h-[900px] min-h-[600px] flex items-center overflow-hidden grid-bg"
    >
      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.25, 1], x: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass neon-border mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-400 font-semibold tracking-wide">
                🏆 &nbsp;#1 Tourist Bike Rental Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="font-display font-bold text-white leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
            >
              Explore{' '}
              <span className="gradient-text">Freedom</span>
              <br />
              with{' '}
              <span className="neon-text">OwnRide</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="text-gray-400 text-base md:text-lg mb-7 max-w-lg leading-relaxed"
            >
              Premium tourist bike and scooty rentals at affordable prices —
              verified vehicles, full tank delivery &amp; 24/7 roadside support.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 45px rgba(0,212,255,0.55)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#booking')}
                className="btn-primary flex items-center gap-2 group text-sm"
              >
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#partner')}
                className="btn-outline text-sm"
              >
                Partner With Us
              </motion.button>
            </motion.div>

            {/* Mini-stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              {[
                { val: '1000+', label: 'Happy Riders' },
                { val: '50+', label: 'Tourist Routes' },
                { val: '24/7', label: 'Support' },
              ].map((s, i) => (
                <div key={s.label} className="text-center">
                  <div className="text-lg font-bold neon-text">{s.val}</div>
                  <div className="text-[11px] text-gray-500">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Scooty visual ── */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Glow halo behind image */}
            <motion.div
              className="absolute w-72 h-72 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Scooty image — inside a dark glassmorphism frame */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 50% 80%, rgba(0,212,255,0.08) 0%, rgba(4,13,33,0.95) 60%)',
                border: '1px solid rgba(0,212,255,0.2)',
                boxShadow: '0 0 80px rgba(0,212,255,0.15), 0 0 40px rgba(124,58,237,0.1)',
                padding: '20px 24px 8px',
              }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.8, type: 'spring', stiffness: 70 }}
            >
              <motion.img
                src="/scooty.png"
                alt="Premium white Honda Activa scooty available for rent"
                className="w-full max-w-[380px] lg:max-w-[460px] object-contain select-none"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.5)) brightness(1.05)',
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                draggable={false}
              />

              {/* Neon floor reflection */}
              <div
                className="w-3/4 mx-auto h-4 rounded-full blur-xl opacity-40"
                style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.8) 0%, transparent 70%)' }}
              />
            </motion.div>

            {/* Floating price badges */}
            {[
              { label: 'Scooty', price: '₹399/day', color: '#10b981', top: '8%', right: '0%' },
              { label: 'RE Classic', price: '₹999/day', color: '#00d4ff', bottom: '18%', left: '-4%' },
              { label: 'Himalayan', price: '₹1299/day', color: '#7c3aed', bottom: '4%', right: '4%' },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                className="absolute glass rounded-xl px-3 py-2 text-center"
                style={{
                  border: `1px solid ${b.color}40`,
                  boxShadow: `0 0 20px ${b.color}20`,
                  top: b.top,
                  bottom: b.bottom,
                  left: b.left,
                  right: b.right,
                  minWidth: '110px',
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                transition={{
                  opacity: { delay: 0.7 + i * 0.15, duration: 0.4 },
                  scale: { delay: 0.7 + i * 0.15, duration: 0.4 },
                  y: { delay: i * 0.4, duration: 3.5 + i, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <div className="text-gray-300 text-[10px] font-medium">{b.label}</div>
                <div className="font-bold text-sm" style={{ color: b.color }}>{b.price}</div>
              </motion.div>
            ))}

            {/* Trust micro-badges */}
            <div className="absolute top-0 left-0 flex flex-col gap-2">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.12 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass"
                    style={{ border: `1px solid ${b.color}30` }}
                  >
                    <Icon className="w-3 h-3" style={{ color: b.color }} />
                    <span className="text-[11px] text-gray-300 font-medium">{b.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.button
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollTo('#vehicles')}
        aria-label="Scroll down"
      >
        <span className="text-gray-500 text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </motion.button>
    </section>
  );
}
