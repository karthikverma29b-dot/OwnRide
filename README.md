# 🏍️ OwnRide — Explore Freedom on Two Wheels

**Premium tourist bike and scooty rental platform** built with React, Vite, Tailwind CSS & Framer Motion.

![OwnRide Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-yellow) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

---

## ✨ Features

- 🎨 **Premium Dark UI** — Glassmorphism, neon accents, and smooth gradient effects
- 🏍️ **Vehicle Showcase** — Browse scooties, cruisers, sport bikes & adventure bikes with specs
- 📅 **Instant Booking System** — Book a ride with date, time, and location — confirmed via WhatsApp
- 💬 **WhatsApp Integration** — Booking confirmation sent directly to customer's WhatsApp
- 🌟 **Animated Testimonials** — Rotating carousel of real rider stories
- 📊 **Live Stats Counter** — Animated number counters for social proof
- 🤝 **Partner Program** — Bike owners can list vehicles and earn passive income
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎬 **Loading Screen** — Animated intro with orbital rings and progress bar
- 🎯 **Scroll Progress** — Top progress indicator showing page scroll position
- ✨ **Particle Effects** — Subtle floating particles in the background

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **react-countup** | Animated number counters |
| **react-intersection-observer** | Scroll-triggered animations |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/ownride-react.git
cd ownride-react

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — just click **Deploy**
4. Your site will be live in ~30 seconds!

The included `vercel.json` handles:
- ✅ SPA routing (all routes → `index.html`)
- ✅ Asset caching (1-year cache for `/assets/`)
- ✅ Security headers (XSS protection, frame options, etc.)

## 📁 Project Structure

```
ownride-react/
├── public/
│   └── scooty.png            # Hero section scooty image
├── src/
│   ├── components/
│   │   ├── BookingSystem.jsx    # Full booking form + WhatsApp integration
│   │   ├── FeaturesSection.jsx  # Why choose OwnRide
│   │   ├── Footer.jsx           # Footer with newsletter + links
│   │   ├── HeroSection.jsx      # Hero with CTA + floating badges
│   │   ├── HowItWorks.jsx       # 3-step process section
│   │   ├── LoadingScreen.jsx    # Animated loading intro
│   │   ├── Navbar.jsx           # Sticky navbar with mobile menu
│   │   ├── ParticleBackground.jsx # Floating particle effects
│   │   ├── PartnerSection.jsx   # Partner program for bike owners
│   │   ├── ScrollProgress.jsx   # Top scroll progress bar
│   │   ├── Testimonials.jsx     # Rider reviews carousel
│   │   ├── TouristExperience.jsx # Stats + scenic adventure CTA
│   │   ├── VehicleShowcase.jsx  # Vehicle cards grid
│   │   └── WhatsAppButton.jsx   # Floating WhatsApp chat button
│   ├── App.jsx                  # Main app with sections
│   ├── index.css                # Global styles + Tailwind directives
│   └── main.jsx                 # React entry point
├── index.html                   # HTML entry with SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                  # Vercel deployment config
└── .gitignore
```

## 📞 Contact

- **Email:** hello@ownride.in
- **WhatsApp:** +91 98765 43210
- **Location:** Manali, Himachal Pradesh, India

---

Built with ❤️ by [OwnRide](https://ownride.in) • © 2026
