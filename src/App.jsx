import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import VehicleShowcase from './components/VehicleShowcase';
import HowItWorks from './components/HowItWorks';
import BookingSystem from './components/BookingSystem';
import TouristExperience from './components/TouristExperience';
import Testimonials from './components/Testimonials';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen bg-dark-900 overflow-x-hidden"
        >
          <ParticleBackground />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <FeaturesSection />
            <VehicleShowcase />
            <HowItWorks />
            <BookingSystem />
            <TouristExperience />
            <Testimonials />
            <PartnerSection />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </>
  );
}

export default App;
