import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen flex-col gap-8"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated logo */}
      <div className="relative flex items-center justify-center">
        {/* Outer orbit ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{ border: '1px solid rgba(0, 212, 255, 0.2)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{ background: '#00d4ff', boxShadow: '0 0 15px #00d4ff' }}
          />
        </motion.div>

        {/* Inner ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full"
          style={{ border: '1px solid rgba(124, 58, 237, 0.3)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: '#7c3aed', boxShadow: '0 0 10px #7c3aed' }}
          />
        </motion.div>

        {/* Center logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="relative z-10 flex items-center justify-center w-16 h-16"
        >
          <span className="text-3xl">🏍️</span>
        </motion.div>
      </div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold font-display gradient-text">OwnRide</h1>
        <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">Loading Experience...</p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
