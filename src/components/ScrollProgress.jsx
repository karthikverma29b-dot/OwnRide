import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => setWidth(v * 100));
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="scroll-progress" style={{ width: `${width}%` }} />
  );
}
