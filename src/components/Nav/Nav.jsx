import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>BTS</div>
      <div className={styles.links}>
        <a href="#timeline">TIMELINE</a>
        <a href="#tours">TOURS</a>
        <a href="#stats">STATS</a>
      </div>
    </nav>
  );
}
