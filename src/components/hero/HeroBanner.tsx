import { motion } from 'motion/react';
import Container from '../global/Container';
import HeroInfo from './HeroInfo';
import HeroIntro from './HeroIntro';

const HeroBanner = () => {
  return (
    <Container className="grid grid-cols-1 items-center gap-12 py-12 md:py-20 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroIntro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroInfo />
      </motion.div>
    </Container>
  );
};

export default HeroBanner;
