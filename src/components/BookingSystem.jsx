import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Clock, ChevronDown, CheckCircle, CreditCard, Phone } from 'lucide-react';

const vehicles = [
  { id: 'activa', name: 'Activa Scooty', price: 399, emoji: '🛵' },
  { id: 're-classic', name: 'Royal Enfield Classic', price: 999, emoji: '🏍️' },
  { id: 'pulsar', name: 'Bajaj Pulsar 150', price: 599, emoji: '🏎️' },
  { id: 'himalayan', name: 'RE Himalayan', price: 1299, emoji: '🏔️' },
];

const locations = [
  'Manali Bus Stand', 'Shimla Mall Road', 'Kasol Campsite',
  'Spiti Valley Entry', 'Dharamshala McLeod Ganj', 'Kullu Market'
];

export default function BookingSystem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({
    vehicle: '',
    pickup: '',
    returnDate: '',
    pickupTime: '10:00',
    location: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);

  const selectedVehicle = vehicles.find(v => v.id === form.vehicle);

  useEffect(() => {
    if (form.pickup && form.returnDate) {
      const d1 = new Date(form.pickup);
      const d2 = new Date(form.returnDate);
      const diff = Math.max(1, Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24)));
      setDays(diff);
      if (selectedVehicle) setTotal(diff * selectedVehicle.price);
    }
  }, [form.pickup, form.returnDate, form.vehicle]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const sendWhatsAppConfirmation = (phoneNumber) => {
    // Clean phone number — strip spaces, dashes, and leading 0
    let cleaned = phoneNumber.replace(/[\s\-()]/g, '');
    // If it starts with 0, replace with 91 (India)
    if (cleaned.startsWith('0')) cleaned = '91' + cleaned.slice(1);
    // If it doesn't start with country code, assume India (+91)
    if (!cleaned.startsWith('+') && !cleaned.startsWith('91')) cleaned = '91' + cleaned;
    // Remove leading +
    cleaned = cleaned.replace(/^\+/, '');

    const vehicleName = selectedVehicle?.name || 'N/A';
    const pickupDate = form.pickup || 'N/A';
    const returnDate = form.returnDate || 'N/A';
    const pickupTime = form.pickupTime || 'N/A';
    const location = form.location || 'N/A';
    const duration = days > 0 ? `${days} day${days > 1 ? 's' : ''}` : 'N/A';
    const totalAmount = total > 0 ? `₹${total.toLocaleString()}` : 'N/A';

    const message = `✅ *Thank you for booking with OwnRide!*

Your vehicle has been successfully reserved.

🏍️ *Booking Details:*
━━━━━━━━━━━━━━━
🚗 *Vehicle:* ${vehicleName}
📅 *Pickup Date:* ${pickupDate}
⏰ *Pickup Time:* ${pickupTime}
📅 *Return Date:* ${returnDate}
⏳ *Duration:* ${duration}
📍 *Location:* ${location}
💰 *Total Amount:* ${totalAmount}
━━━━━━━━━━━━━━━

🪖 Helmet included • ⛽ Full tank delivery
❌ Free cancellation up to 24h before pickup

For any queries, contact us anytime!
— Team OwnRide 🏍️`;

    const whatsappUrl = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.vehicle || !form.pickup || !form.returnDate || !form.location || !form.phone) return;
    sendWhatsAppConfirmation(form.phone);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = "input-glass w-full px-4 py-3.5 text-sm";

  return (
    <section id="booking" className="py-24 relative" style={{ zIndex: 2 }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>
            Instant Booking
          </span>
          <h2 className="section-heading text-white mb-4">
            Book Your{' '}
            <span className="gradient-text">Ride Now</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fill in the details and get your dream ride confirmed in minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8"
              style={{ border: '1px solid rgba(0,212,255,0.15)', boxShadow: '0 0 60px rgba(0,212,255,0.05)' }}>
              <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Booking Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Vehicle select */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Select Vehicle
                  </label>
                  <select name="vehicle" value={form.vehicle} onChange={handleChange} className={inputClass} required>
                    <option value="">Choose a vehicle...</option>
                    {vehicles.map(v => (
                      <option key={v.id} value={v.id}>{v.emoji} {v.name} — ₹{v.price}/day</option>
                    ))}
                  </select>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={form.returnDate}
                      onChange={handleChange}
                      min={form.pickup || new Date().toISOString().split('T')[0]}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                {/* Time + Location */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={form.pickupTime}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                      Pickup Location
                    </label>
                    <select name="location" value={form.location} onChange={handleChange} className={inputClass} required>
                      <option value="">Select location...</option>
                      {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                      style={{ paddingLeft: '2.5rem' }}
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <span style={{ color: '#25D366' }}>●</span> Booking confirmation will be sent to this number
                  </p>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,212,255,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                  style={{ borderRadius: '12px', padding: '14px' }}
                >
                  <CreditCard className="w-5 h-5" />
                  Confirm & Pay {total > 0 && `— ₹${total.toLocaleString()}`}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-6 h-full"
              style={{ border: '1px solid rgba(124,58,237,0.2)', boxShadow: '0 0 40px rgba(124,58,237,0.05)' }}>
              <h3 className="text-lg font-bold text-white font-display mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                Booking Summary
              </h3>

              <AnimatePresence mode="wait">
                {selectedVehicle ? (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Vehicle */}
                    <div className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: 'rgba(124,58,237,0.1)' }}>
                      <span className="text-3xl">{selectedVehicle.emoji}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{selectedVehicle.name}</div>
                        <div className="text-purple-400 text-xs">₹{selectedVehicle.price}/day</div>
                      </div>
                    </div>

                    {/* Details */}
                    {[
                      { label: 'Duration', val: days > 0 ? `${days} day${days > 1 ? 's' : ''}` : '—' },
                      { label: 'Pickup', val: form.pickup ? `${form.pickup} at ${form.pickupTime}` : '—' },
                      { label: 'Return', val: form.returnDate || '—' },
                      { label: 'Location', val: form.location || '—' },
                    ].map(item => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-medium">{item.val}</span>
                      </div>
                    ))}

                    <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)' }} />

                    {/* Total */}
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-semibold">Total Amount</span>
                      <motion.span
                        key={total}
                        initial={{ scale: 1.3, color: '#7c3aed' }}
                        animate={{ scale: 1, color: '#a78bfa' }}
                        className="text-2xl font-bold"
                      >
                        {total > 0 ? `₹${total.toLocaleString()}` : '—'}
                      </motion.span>
                    </div>

                    <div className="text-xs text-gray-500 text-center pt-2">
                      ✓ Free cancellation up to 24h before pickup<br />
                      ✓ Helmet included • ✓ Full tank delivery
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-48 text-center"
                  >
                    <div className="text-5xl mb-3 opacity-30">🏍️</div>
                    <p className="text-gray-500 text-sm">Select a vehicle to see your booking summary</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 60, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 60, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 40px rgba(16,185,129,0.5)' }}
          >
            <CheckCircle className="w-5 h-5 text-white" />
            <div>
              <div className="text-white font-bold text-sm">Booking Confirmed! 🎉</div>
              <div className="text-green-100 text-xs">Check your WhatsApp for details</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
