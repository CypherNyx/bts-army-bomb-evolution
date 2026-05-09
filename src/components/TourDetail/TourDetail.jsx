import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LIGHT_STICKS } from '../../data/lightsticks';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './TourDetail.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
  })
};

function TourCard({ data, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className={styles.cardHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.headerInfo}>
          <h3>{data.year} — {data.version}</h3>
          <p>{data.tours[0]?.name}</p>
        </div>
        <button className={styles.expandBtn}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={styles.expandedContent}
          >
            <div className={styles.timeline}>
              {data.tours.map((tour, i) => (
                <div key={i} className={styles.tourItem}>
                  <div className={styles.tourDot}></div>
                  <div className={styles.tourContent}>
                    <h4>{tour.name}</h4>
                    <p className={styles.dates}>{tour.dates}</p>
                    <p className={styles.venues}>{tour.venues}</p>
                    {tour.attendance && (
                      <p className={styles.attendance}>Attendance: {tour.attendance}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TourDetail() {
  return (
    <section id="tours" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Tour History</h2>
        <div className={styles.grid}>
          {LIGHT_STICKS.map((ls, i) => (
            <TourCard key={ls.id} data={ls} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
