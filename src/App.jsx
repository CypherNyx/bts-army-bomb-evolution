import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { Timeline } from './components/Timeline/Timeline';
import { TourDetail } from './components/TourDetail/TourDetail';
import { Stats } from './components/Stats/Stats';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Timeline />
        <TourDetail />
        <Stats />
      </main>
      <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', padding: 'var(--space-12) 0', textAlign: 'center' }}>
        <p style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>💜 BTS LIGHT STICK EVOLUTION</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)' }}>Data accurate as of February 2026</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-2)' }}>Sources: HYBE Official · Weverse · BTS Wiki</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-2)', opacity: 0.8 }}>Note: RM, Jimin, and V solo projects did not have full tours.</p>
      </footer>
    </>
  );
}

export default App;
