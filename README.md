# Bata Learner - Sovereign Academic Infrastructure

Bata Learner delivers LMS, Bataverse, and Handout for bata learners: a global open-source learning platform aligned with Apereo Foundation standards, NUC/CCMAS compliant for Nigeria's educational institutions.

## 🏗️ Project Structure

```
batalearner/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── about/                   # About page
│   ├── bata/                    # Bataverse showcase page
│   ├── contact/                 # Partnership portal page
│   ├── faqs/                    # FAQs page
│   ├── info/                    # Community/Developer Hub page
│   └── reviews/                 # Success Stories page
│
├── components/                   # React components
│   ├── shared/                  # Shared components
│   │   ├── Navbar.tsx          # Main navigation with mobile bottom sheet
│   │   └── Footer.tsx          # Footer with Apereo badge & compliance
│   ├── ui/                      # Reusable UI components
│   ├── sections/                # Page-specific sections
│   └── animations/              # Animation components
│
├── lib/                          # Utilities & helpers
│   └── utils.ts                 # Common utility functions
│
├── public/                       # Static assets
│   ├── images/                  # Image assets
│   └── svg/                     # SVG illustrations
│
├── styles/                       # Additional styles (if needed)
│
└── [config files]               # Next.js, TypeScript, Tailwind configs
```

## 🎨 Design System

### Color Palette
- **Primary**: `#682f63` (Bata Purple)
- **Primary Dark**: `#712c6a` (Deep Purple)
- **Primary Light**: `#8a3d7f` (Light Purple)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, authoritative
- **Body**: Clean, readable

### Design Principles
1. **Institutional Trust**: Clean, minimalist, authoritative
2. **Mobile-First**: App-like feel with bottom navigation
3. **Bataverse X-Factor**: 3D-style CSS/SVG elements for AR/VR components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Mobile Responsiveness

- Minimum touch target: 48px
- Bottom-sheet menus for mobile navigation
- Skeleton loaders for perceived performance
- Card-based layouts optimized for mobile

## 🏛️ Compliance & Standards

- **Apereo Foundation**: In Incubation status
- **NUC Compliance**: Nigerian Universities Commission standards
- **CCMAS Alignment**: Core Curriculum Minimum Academic Standards

## 📄 License

Open Source under Apereo Foundation

## 🤝 Contributing

See the Developer Hub (`/info`) for contribution guidelines and GitHub links.
