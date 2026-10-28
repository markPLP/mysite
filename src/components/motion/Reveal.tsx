import { motion } from 'motion/react';
import type { ReactNode } from 'react';

// Fade/slide-in once when scrolled into view. MotionConfig in App.tsx
// (reducedMotion="user") strips the movement for people who ask for less motion.
const Reveal = ({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
