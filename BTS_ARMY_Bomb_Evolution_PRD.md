# BTS ARMY Bomb Evolution — React Application PRD

**Product:** BTS Light Stick Evolution Interactive Infographic  
**Version:** 1.0  
**Platform:** React SPA → GitHub Pages  
**IDE:** Google Antigravity  
**Last Updated:** May 2026

---

## 1. Product Overview

### 1.1 Summary

A visually immersive single-page React application documenting the evolution of BTS's official light sticks (ARMY Bombs) from 2014 to 2026. The application features cinematic scroll-driven animations, large editorial-style photography, and fluid motion design inspired by HYBE/BigHit's official web aesthetic — full-bleed imagery, dramatic typography, smooth parallax transitions, and a refined black-and-white editorial palette with red accent.

### 1.2 Core Experience Goals

- **Cinematic first impression:** Hero section with full-viewport animated reveal, evoking the drama of a BTS concert open
- **Scroll-driven storytelling:** Each light stick version revealed through scroll-triggered animations — no traditional "page load and see all" layout
- **Editorial precision:** Clean black/white/red palette with bold typographic hierarchy, matching the BTS official brand
- **Fans feel something:** Motion, scale, and pacing that matches the emotional weight of BTS's concert legacy
- **Accessible and performant:** WCAG AA contrast, responsive from 375px mobile to 2560px desktop, fast load even on mobile data

### 1.3 Target Audience

- BTS fans (ARMY) globally — mobile-first, emotionally engaged
- K-pop culture enthusiasts
- Design-focused users who appreciate editorial web experiences

---

## 2. Tech Stack & Deployment

### 2.1 Framework & Libraries

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | React 18 (Vite) | Fast HMR in Antigravity, tree-shaking for GH Pages |
| **Animation** | Framer Motion | Scroll-linked animations, layout transitions, gesture support |
| **Scroll Detection** | `framer-motion` `useScroll` + `useTransform` | Native integration, no extra dep |
| **Routing** | React Router v6 (hash mode) | Required for GitHub Pages (`HashRouter`) |
| **Styling** | CSS Modules + CSS custom properties | Scoped styles, design token system |
| **Icons** | Lucide React | Lightweight, consistent |
| **Fonts** | Google Fonts (preconnect) | Cormorant Garamond (display) + Work Sans (body) |
| **Build** | Vite | Fast build for GH Pages deploy |
| **Deploy** | `gh-pages` npm package | Standard GitHub Pages workflow |

### 2.2 GitHub Pages Configuration

```json
// package.json additions
{
  "homepage": "https://<username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

```js
// vite.config.js
export default {
  base: '/<repo-name>/',
  build: { outDir: 'dist' }
}
```

**Router:** Use `HashRouter` (not `BrowserRouter`) — GitHub Pages does not support server-side route handling.

### 2.3 Project Structure

```
bts-army-bomb-evolution/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── lightsticks/
│       │   ├── red-bullet-2014.jpg
│       │   ├── ver1-2015.jpg
│       │   ├── ver2-2017.jpg
│       │   ├── ver3-2018.jpg
│       │   ├── mots-special-2020.jpg
│       │   └── ver4-2026.jpg
│       └── hero/
│           └── concert-hero.jpg
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Timeline/
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.module.css
│   │   ├── LightStickCard/
│   │   │   ├── LightStickCard.jsx
│   │   │   └── LightStickCard.module.css
│   │   ├── TourDetail/
│   │   │   ├── TourDetail.jsx
│   │   │   └── TourDetail.module.css
│   │   ├── Stats/
│   │   │   ├── Stats.jsx
│   │   │   └── Stats.module.css
│   │   └── Nav/
│   │       ├── Nav.jsx
│   │       └── Nav.module.css
│   ├── data/
│   │   └── lightsticks.js        ← All light stick + tour data
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   ├── tokens.css            ← Design tokens (CSS custom properties)
│   │   └── global.css            ← Base reset + typography
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

---

## 3. Design System

### 3.1 Color Palette

```css
:root {
  /* Surfaces */
  --color-bg: #ffffff;
  --color-bg-dark: #0a0a0a;
  --color-surface: #f5f5f5;
  --color-surface-dark: #111111;

  /* Text */
  --color-text: #0a0a0a;
  --color-text-muted: #666666;
  --color-text-inverse: #ffffff;

  /* Brand Accent */
  --color-red: #e30613;
  --color-red-dark: #b30510;

  /* Borders */
  --color-border: rgba(0, 0, 0, 0.12);
  --color-border-dark: rgba(255, 255, 255, 0.12);
}
```

**Philosophy:** Predominantly black and white with red used exclusively for emphasis — year numbers, progress indicators, hover states. Inspired by BigHit/HYBE's high-contrast editorial brand identity.

### 3.2 Typography

```css
/* Load via Google Fonts */
/* Cormorant Garamond: display headings (editorial drama at large sizes) */
/* Work Sans: body, UI, labels */

:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Work Sans', 'Helvetica Neue', sans-serif;

  /* Type scale (fluid clamp) */
  --text-xs:   clamp(0.75rem,  0.7rem + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl:   clamp(1.5rem,   1.2rem + 1.25vw, 2.25rem);
  --text-2xl:  clamp(2rem,     1.2rem + 2.5vw, 3.5rem);
  --text-3xl:  clamp(2.5rem,   1rem + 4vw, 5rem);
  --text-hero: clamp(3rem,     0.5rem + 7vw, 8rem);
}
```

### 3.3 Spacing (4px base unit)

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### 3.4 Motion Tokens

```css
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
  --duration-fast: 300ms;
  --duration-base: 600ms;
  --duration-slow: 1000ms;
  --duration-cinematic: 1400ms;
}
```

---

## 4. Application Sections

### 4.1 Sticky Navigation

**Behavior:** Fixed top navbar, transparent on hero, transitions to opaque black on scroll past hero.

**Content:**
- Left: BTS logo / wordmark (SVG inline)
- Right: Section anchors — Timeline · Tours · Stats
- Hamburger menu on mobile

**Animation:** `framer-motion` `AnimatePresence` for background opacity transition on scroll.

---

### 4.2 Hero Section

**Layout:** Full-viewport (100dvh), full-bleed dark background.

**Content:**
- Centered editorial layout
- Large background image (concert crowd with ARMY Bombs lit up) with subtle parallax on scroll
- Overlaid text:
  - Eyebrow label: `OFFICIAL LIGHT STICK EVOLUTION` (Work Sans, tracked uppercase, red)
  - Main headline: `ARMY BOMB` (Cormorant Garamond, `--text-hero`, white)
  - Sub-headline: `2014 — 2026` (Work Sans light, `--text-2xl`, white 60% opacity)
  - Descriptor: `12 Years · 6 Versions · 300+ Concerts` (Work Sans, `--text-sm`, red)
- Bottom scroll indicator: animated downward chevron with `looping` opacity animation

**Animations:**
- On mount: headline clips in from bottom using `clipPath: "inset(100% 0 0 0)"` → `inset(0% 0 0 0)`, staggered per line (0ms, 200ms, 400ms)
- Background image: `scale` starts at `1.05`, eases to `1.0` on mount (1400ms ease-out-expo)
- Parallax: `useScroll` + `useTransform` — background image translateY `0px` → `150px` as hero scrolls out

---

### 4.3 Timeline Section — Horizontal Scroll Carousel

**Layout:** Full-width pinned horizontal scroll section. The section is "sticky" — it pins while the user scrolls vertically, and the internal carousel translates horizontally in sync with vertical scroll progress.

**Behavior:**
- Section height: `600vh` (6x viewport) — creates the scroll "room" for the pinned animation
- Inner container: `position: sticky; top: 0; height: 100vh; overflow: hidden`
- Cards container: `display: flex` row, translates from `0%` to `-83.33%` (5 steps for 6 cards) as `scrollYProgress` goes `0 → 1`

**Card Anatomy (each of the 6 light stick versions):**

```
┌──────────────────────────────────────┐
│  [YEAR — large red display number]   │
│  [VERSION NAME — uppercase tracked]  │
│                                      │
│  [LIGHT STICK IMAGE — 320px tall]    │
│  (framer-motion scale on active)     │
│                                      │
│  [RELEASE DATE — small muted]        │
│  [TIME GAP PILL — red bg, white text]│
│                                      │
│  [TOUR NAMES — small list]           │
└──────────────────────────────────────┘
```

**Active Card Logic:**
- As each card scrolls to center viewport, it becomes "active": image scales `1.0 → 1.08`, year number color transitions to red at full intensity, card border animates in
- Adjacent cards are slightly `opacity: 0.5` scaled `0.95`

**Progress Indicator:**
- Fixed bottom bar while section is pinned: 6 dots, active dot expands to a pill with version label
- Red fill line animates left-to-right tracking scroll progress

---

### 4.4 Detail Cards Section — Tour History

**Layout:** Vertical stacked section (normal scroll), 2-column grid on desktop, 1-column on mobile.

**Content:** One card per light stick version. Each card expands on click to show full tour history.

**Card Collapsed State:**
- Large version year + name
- Light stick image (thumbnail)
- Primary tour name
- "View Tours →" CTA

**Card Expanded State (accordion, framer-motion layout animation):**
- Full tour list with dates, venues, attendance numbers
- Timeline line connecting tour entries
- Collapse button

**Animation:**
- Scroll reveal: each card enters with `opacity: 0, y: 60px` → `opacity: 1, y: 0` (staggered 150ms per card)
- Expand/collapse: framer-motion `AnimatePresence` + `height: auto` layout animation
- Red left border draws down via `scaleY: 0 → 1` on scroll reveal

---

### 4.5 Stats Counter Section

**Layout:** Full-width black background section, 4 stats in a row (2x2 on mobile).

**Stats:**
- 6 — Light Stick Versions
- 12 — Years of Evolution
- 300+ — Total Concerts
- 79+ — Arirang Tour Shows

**Animation:** Numbers count up from 0 when section enters viewport. Uses `framer-motion` + a custom `useCountUp` hook:
- Duration: 1200ms ease-out
- Each stat staggered 200ms
- Entry: `opacity: 0, y: 40` → `opacity: 1, y: 0`

---

### 4.6 Footer

**Layout:** Black background, centered. Minimal.

**Content:**
- 💜 `BTS LIGHT STICK EVOLUTION`
- Data accurate as of February 2026
- Sources: HYBE Official · Weverse · BTS Wiki
- Disclaimer note about RM, Jimin, V solo albums without full tours

---

## 5. Data Model

All content lives in `src/data/lightsticks.js`:

```js
export const LIGHT_STICKS = [
  {
    id: "red-bullet-2014",
    version: "Light Stick",
    versionShort: "Original",
    year: 2014,
    releaseDate: "October 2014",
    gapLabel: "First Edition",
    image: "/images/lightsticks/red-bullet-2014.jpg",
    imageAlt: "BTS Red Bullet light stick — yellow tube with red cap",
    tours: [
      {
        name: "BTS Live Trilogy Episode II: The Red Bullet",
        dates: "October 17 – December 20, 2014",
        venues: "Seoul, Kobe, Tokyo, Manila, Singapore, Bangkok",
        attendance: null
      }
    ]
  },
  {
    id: "ver1-2015",
    version: "Ver. 1",
    versionShort: "ARMY Bomb",
    year: 2015,
    releaseDate: "March 28, 2015",
    gapLabel: "5 months later",
    image: "/images/lightsticks/ver1-2015.jpg",
    imageAlt: "ARMY Bomb Version 1 — globe design with ARMY text",
    tours: [
      {
        name: "BTS Live Trilogy Episode I: BTS Begins",
        dates: "March 28–29, 2015",
        venues: "Olympic Hall, Seoul",
        attendance: null
      },
      {
        name: "The Red Bullet Tour (Second Half)",
        dates: "June 6 – August 29, 2015",
        venues: "Kuala Lumpur, Sydney, Melbourne, New York, Dallas, Chicago",
        attendance: null
      },
      {
        name: "The Most Beautiful Moment in Life On Stage",
        dates: "November 27, 2015 – August 14, 2016",
        venues: "Asia",
        attendance: "182,500"
      }
    ]
  },
  {
    id: "ver2-2017",
    version: "Ver. 2",
    versionShort: "ARMY Bomb",
    year: 2017,
    releaseDate: "February 10, 2017",
    gapLabel: "1 year 10 months later",
    image: "/images/lightsticks/ver2-2017.jpg",
    imageAlt: "ARMY Bomb Version 2 — first Bluetooth-enabled version",
    tours: [
      {
        name: "BTS Live Trilogy Episode III: The Wings Tour",
        dates: "February 18 – December 10, 2017",
        venues: "40 shows across 4 continents",
        attendance: "550,000"
      }
    ]
  },
  {
    id: "ver3-2018",
    version: "Ver. 3",
    versionShort: "ARMY Bomb",
    year: 2018,
    releaseDate: "August 9, 2018",
    gapLabel: "1 year 6 months later",
    image: "/images/lightsticks/ver3-2018.jpg",
    imageAlt: "ARMY Bomb Version 3 — with official app support",
    tours: [
      {
        name: "BTS World Tour: Love Yourself",
        dates: "August 25, 2018 – October 29, 2019",
        venues: "62 shows worldwide",
        attendance: "2,019,800"
      },
      {
        name: "Permission to Dance on Stage",
        dates: "October 2021 – April 2022",
        venues: "Seoul, Los Angeles, Las Vegas",
        attendance: null
      },
      {
        name: "Suga | Agust D Tour 'D-Day'",
        dates: "April 26 – August 6, 2023",
        venues: "US, Indonesia, Japan, Thailand, Singapore, Seoul",
        attendance: null
      },
      {
        name: "J-Hope 'HOPE ON THE STAGE' Tour",
        dates: "February 28 – June 14, 2025",
        venues: "Seoul, US, Mexico, Asia • 31 shows",
        attendance: null
      },
      {
        name: "Jin 'RUN SEOKJIN_EP.TOUR'",
        dates: "June – August 2025",
        venues: "South Korea, Japan, US, UK, Netherlands • 18 shows",
        attendance: null
      }
    ]
  },
  {
    id: "mots-special-2020",
    version: "Special Edition",
    versionShort: "Map of the Soul",
    year: 2020,
    releaseDate: "April 14, 2020",
    gapLabel: "1 year 8 months later",
    image: "/images/lightsticks/mots-special-2020.jpg",
    imageAlt: "Map of the Soul Special Edition ARMY Bomb",
    tours: [
      {
        name: "Map of the Soul Tour",
        dates: "Planned April 2020",
        venues: "Cancelled — COVID-19 pandemic",
        attendance: null
      },
      {
        name: "Permission to Dance on Stage",
        dates: "October 2021 – April 2022",
        venues: "Compatible alongside Ver. 3",
        attendance: null
      }
    ]
  },
  {
    id: "ver4-2026",
    version: "Ver. 4",
    versionShort: "ARMY Bomb",
    year: 2026,
    releaseDate: "February 5, 2026",
    gapLabel: "5 years 10 months later",
    image: "/images/lightsticks/ver4-2026.jpg",
    imageAlt: "ARMY Bomb Version 4 — for the Arirang World Tour",
    tours: [
      {
        name: "BTS World Tour "ARIRANG"",
        dates: "April 9, 2026 – March 2027",
        venues: "79+ shows across 5 continents",
        attendance: null
      }
    ]
  }
];

export const STATS = [
  { value: 6,    suffix: "",  label: "Light Stick Versions" },
  { value: 12,   suffix: "",  label: "Years of Evolution"   },
  { value: 300,  suffix: "+", label: "Total Concerts"       },
  { value: 79,   suffix: "+", label: "Arirang Tour Shows"   }
];
```

---

## 6. Animation Specifications

### 6.1 Framer Motion Setup

Install: `npm install framer-motion`

All scroll animations use `useScroll` + `useTransform` from `framer-motion`. No GSAP required — keeping the dependency tree lean for GitHub Pages.

### 6.2 Hero Cinematic Reveal

```jsx
// Hero.jsx — staggered line reveal
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const line = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  show:   { clipPath: "inset(0% 0 0 0)",   opacity: 1,
            transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
};

// Background scale-in
const bgVariants = {
  hidden: { scale: 1.08 },
  show:   { scale: 1.0, transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } }
};
```

### 6.3 Pinned Horizontal Scroll (Timeline)

```jsx
// Timeline.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Timeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // 6 cards, translate from 0 to -83.33% of container width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    <section ref={sectionRef} style={{ height: "600vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ x, display: "flex", width: "600%" }}>
          {LIGHT_STICKS.map((ls) => (
            <LightStickCard key={ls.id} data={ls} scrollProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

### 6.4 Scroll Reveal (Detail Cards)

```jsx
// useScrollReveal.js
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

// Usage in component:
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
  })
};
```

### 6.5 Count-Up Animation (Stats)

```jsx
// useCountUp.js
import { useState, useEffect } from "react";

export function useCountUp(target, duration = 1200, isActive = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, isActive]);

  return count;
}
```

### 6.6 Cursor — None Required

No custom cursor — keeping accessibility and mobile-first in mind. Subtle hover states on interactive elements use CSS transitions only.

---

## 7. Responsive Behavior

| Breakpoint | Layout Changes |
|---|---|
| `375px` (mobile) | Single-column everything; horizontal scroll section uses touch-swipe (overflow-x: auto with snap); Stats 2×2 grid; Nav → hamburger |
| `768px` (tablet) | Detail cards 2-column; Timeline card width narrows |
| `1024px` (desktop) | Full horizontal scroll section activated; all features enabled |
| `1440px+` | Max-width container (1400px) for detail/stats sections |

**Mobile Timeline fallback:** On touch devices, disable the pinned horizontal scroll (which is awkward on mobile). Replace with a vertical swipeable carousel using `overflow-x: scroll; scroll-snap-type: x mandatory` with CSS snap points on each card.

```css
/* Mobile timeline swap */
@media (max-width: 1023px) {
  .timelineScroller {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .timelineCard {
    flex: 0 0 85vw;
    scroll-snap-align: center;
  }
}
```

---

## 8. Image Assets

### 8.1 Required Images

All images go in `public/images/` and are referenced by absolute path from the base URL.

| File | Description | Source |
|---|---|---|
| `lightsticks/red-bullet-2014.jpg` | Yellow tube Red Bullet stick | User-provided |
| `lightsticks/ver1-2015.jpg` | ARMY Bomb Ver. 1 with ARMY handle | User-provided |
| `lightsticks/ver2-2017.jpg` | ARMY Bomb Ver. 2 silver handle | User-provided |
| `lightsticks/ver3-2018.jpg` | ARMY Bomb Ver. 3 BTS logo handle | User-provided |
| `lightsticks/mots-special-2020.jpg` | Map of the Soul Special Edition | User-provided |
| `lightsticks/ver4-2026.jpg` | ARMY Bomb Ver. 4 Arirang tour | User-provided |
| `hero/concert-hero.jpg` | Concert crowd with ARMY Bombs | Sourced/licensed |

### 8.2 Image Optimization

```html
<!-- All images use lazy loading and explicit dimensions -->
<img
  src="/images/lightsticks/ver3-2018.jpg"
  alt="ARMY Bomb Version 3"
  width="320"
  height="480"
  loading="lazy"
  decoding="async"
/>
```

Recommended: run all images through `sharp` or Squoosh before placing in `public/` — target under 150KB per light stick image (WebP preferred).

---

## 9. Accessibility Requirements

- **WCAG AA compliance:** 4.5:1 contrast for body text, 3:1 for large headings
- **Keyboard navigation:** Tab order follows visual DOM order; all interactive elements reachable
- **Focus indicators:** Visible red outline on focus-visible
- **Alt text:** Descriptive alt on every `<img>`; decorative images use `alt=""`
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all scroll animations and transitions; content is visible immediately
- **Semantic HTML:** `<header>`, `<main>`, `<section aria-label="...">`, `<footer>`; heading hierarchy H1 → H2 → H3 strictly maintained
- **Skip link:** `<a href="#main-content" class="skip-link">Skip to content</a>` as first focusable element

```css
/* Reduced motion — MUST be implemented */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Performance Budget

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s on 4G |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Total initial JS (gzipped) | < 200KB |
| Total initial page weight | < 1.0MB |
| Lighthouse Performance score | ≥ 85 |

**Strategies:**
- React + Framer Motion are the heaviest deps — lazy-load Framer Motion where possible
- All light stick images: WebP, max 150KB each
- Hero background image: 800KB max, preloaded with `<link rel="preload">`
- Fonts: only load 2 weights per family (400 + 700)

---

## 11. GitHub Pages Deployment Checklist

- [ ] `vite.config.js` — `base` set to `/<repo-name>/`
- [ ] `package.json` — `homepage`, `predeploy`, and `deploy` scripts added
- [ ] All image paths use `/` root-relative (will resolve to `/<repo-name>/images/...` with Vite base)
- [ ] `HashRouter` used (not `BrowserRouter`)
- [ ] `.github/workflows/deploy.yml` optional — can automate via GitHub Actions on push to `main`
- [ ] `gh-pages` branch created on first `npm run deploy`
- [ ] GitHub repo Settings → Pages → Source set to `gh-pages` branch

---

## 12. Out of Scope (v1.0)

- User login / favorites system
- BTS API / live data feeds
- Weverse / social media embeds
- Video backgrounds
- Sound design / audio
- i18n / Korean language support (future v2)

---

## 13. Success Metrics

- Loads fully under 3 seconds on mobile (4G)
- All 6 light stick versions displayed with correct images and tour data
- Horizontal scroll timeline functions on desktop
- Touch carousel works on iOS Safari and Android Chrome
- No WCAG AA accessibility failures (verified with axe DevTools)
- Deploys successfully to GitHub Pages with correct base path

---

*PRD v1.0 — BTS ARMY Bomb Evolution React App*  
*For use as Antigravity IDE context document*
