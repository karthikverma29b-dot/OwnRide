import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi!%20I%20want%20to%20book%20a%20bike%20from%20OwnRide%20🏍️', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="glass rounded-2xl p-4 max-w-xs"
            style={{ border: '1px solid rgba(37,211,102,0.3)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-semibold">OwnRide Support</span>
              <button onClick={() => setShowTooltip(false)} className="ml-auto text-gray-400 hover:text-white">
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              👋 Hey! Need help booking a bike? Chat with us on WhatsApp — we typically reply in 2 mins!
            </p>
            <button
              onClick={openWhatsApp}
              className="mt-3 w-full py-2 rounded-xl text-xs font-semibold text-white"
              style={{ background: '#25D366' }}
            >
              Start Chat →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
        style={{
          background: '#25D366',
          boxShadow: '0 0 30px rgba(37,211,102,0.5)',
        }}
        aria-label="WhatsApp Support"
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(37,211,102,0.3)' }}
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.7, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <MessageCircle className="w-7 h-7" />

        {/* Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </motion.button>
    </div>
  );
}
