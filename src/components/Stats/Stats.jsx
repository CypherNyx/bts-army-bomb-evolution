import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Stats.module.css';

function StatItem({ endValue, suffix, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(endValue, 2000, isInView);

  return (
    <motion.div 
      ref={ref}
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <StatItem endValue={6} suffix="" label="Light Stick Versions" delay={0} />
        <StatItem endValue={12} suffix="" label="Years of Evolution" delay={0.1} />
        <StatItem endValue={300} suffix="+" label="Total Concerts" delay={0.2} />
        <StatItem endValue={79} suffix="+" label="Arirang Tour Shows" delay={0.3} />
      </div>
    </section>
  );
}
