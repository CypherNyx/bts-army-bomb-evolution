import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.heroBackground}
        style={{ y, backgroundImage: 'url(/bts-army-bomb-evolution/images/hero/red_ocean.jpeg)' }}
      />
      <div className={styles.heroOverlay} />
      
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          OFFICIAL LIGHT STICK EVOLUTION
        </motion.div>
        <motion.h1 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          ARMY BOMB
        </motion.h1>
        <motion.div 
          className={styles.dates}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          2014 — 2026
        </motion.div>
        <motion.div 
          className={styles.descriptor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          6 Versions · 12 Years · 300+ Concerts
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
