import { motion, useTransform } from 'framer-motion';
import styles from './LightStickCard.module.css';

export function LightStickCard({ data, scrollProgress, index, isActive }) {
  // For 6 cards, there are 5 transition steps across the full scroll distance
  // The center points for the cards correspond to 0.0, 0.2, 0.4, 0.6, 0.8, 1.0
  const step = 0.2;
  const centerPoint = index * step;
  
  let scale = 1;
  let opacity = 1;

  if (scrollProgress) {
    // Transition from 0.95 -> 1.0 -> 0.95 for a subtle magazine feel
    scale = useTransform(
      scrollProgress,
      [centerPoint - step, centerPoint, centerPoint + step],
      [0.95, 1.0, 0.95]
    );

    opacity = useTransform(
      scrollProgress,
      [centerPoint - step, centerPoint, centerPoint + step],
      [0.5, 1.0, 0.5]
    );
  } else if (isActive) {
    scale = 1.0;
    opacity = 1;
  }

  return (
    <motion.div 
      className={styles.card}
      style={{ scale: scale, opacity: opacity }}
    >
      <div className={styles.yearNumber}>{data.year}</div>
      <div className={styles.versionName}>{data.version}</div>
      
      <div className={styles.imageContainer}>
        <img 
          src={`/bts-army-bomb-evolution${data.image}`} 
          alt={data.imageAlt}
          width="320"
          height="480"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.details}>
        <div className={styles.releaseDate}>{data.releaseDate}</div>
        <div className={styles.gapPill}>{data.gapLabel}</div>
        
        <ul className={styles.tourList}>
          {data.tours.slice(0, 2).map((tour, i) => (
            <li key={i}>{tour.name}</li>
          ))}
          {data.tours.length > 2 && (
            <li className={styles.moreTours}>+{data.tours.length - 2} more tours</li>
          )}
        </ul>
      </div>
    </motion.div>
  );
}
