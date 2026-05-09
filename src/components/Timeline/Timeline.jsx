import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LIGHT_STICKS } from "../../data/lightsticks";
import styles from "./Timeline.module.css";

function TimelineCard({ data, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const delay = (index % 2) * 0.1;

  return (
    <motion.div 
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <div className={styles.year}>{data.year}</div>
      <div className={styles.version}>{data.version}</div>
      
      <div className={styles.imageContainer}>
        <img 
          src={`/bts-army-bomb-evolution${data.image}`} 
          alt={data.imageAlt}
          className={styles.image} 
        />
      </div>

      <div className={styles.releaseDate}>{data.releaseDate}</div>
      <div className={styles.gapPill}>{data.gapLabel}</div>
      <div className={styles.tourName}>{data.tours[0]?.name}</div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>TIMELINE</h2>
          <div className={styles.headerLine} />
        </div>
        
        <div className={styles.grid}>
          {LIGHT_STICKS.map((ls, i) => (
            <TimelineCard key={ls.id} data={ls} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
