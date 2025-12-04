# Balaji Benchmark Consultants (BBMC) Landing Page

## Overview

This is a professional landing page for Balaji Benchmark Consultants (BBMC), a Hyderabad-based architecture, engineering, and construction consultancy firm with 30+ years of expertise. The website showcases their comprehensive services including architectural design, structural engineering, interior design, Vaasthu consultation, and construction services.

The application is built as a single-page React application with a modern, premium aesthetic inspired by high-end architecture and construction firm websites. It features multiple sections including hero carousel, service offerings, project portfolio, testimonials, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter (lightweight client-side routing library) with two routes:
- `/` - Main landing page
- `*` - 404 Not Found page

**Component Structure**:
- **Landing Components** (`client/src/components/landing/`): Modular sections that compose the homepage
  - Header: Fixed navigation with smooth scrolling
  - Hero: Multi-slide carousel showcasing different service areas
  - About: Company overview with highlight statistics
  - Services: Grid of service offerings
  - Portfolio: Image galleries with filtering (Architecture & Interior Design)
  - WhyChoose: USPs and differentiators
  - Founder: Profile section with image and quote
  - Testimonials: Customer reviews
  - Contact: Contact information with map integration
  - Footer: Links and social media
  - WhatsAppButton: Floating action button

- **UI Components** (`client/src/components/ui/`): Shadcn/ui component library for consistent design system
- **Example Components** (`client/src/components/examples/`): Individual component showcases

**State Management**: React hooks (useState, useEffect, useCallback) for local component state. No global state management solution implemented.

**Styling Approach**:
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Design System**: Based on shadcn/ui "New York" style with custom theme
- **Color Palette**: Brand colors defined in CSS variables
  - Primary Blue: `#009FE3` (hsl(195 100% 44%))
  - Grey: `#B8B8B8`
  - Black: `#111111` (hsl(0 0% 9%))
  - White: `#FFFFFF` (hsl(0 0% 100%))
- **Typography**: 
  - Headings: Montserrat/Poppins (serif/mono font stacks)
  - Body: Inter (sans-serif font stack)
  - Loaded via Google Fonts

**Animation & Interactions**:
- Framer Motion for advanced animations
- Tailwind CSS Animate for standard transitions
- Custom hover states with elevation effects
- Smooth scrolling navigation
- Carousel functionality using Embla Carousel

### Design Guidelines

The application follows specific design guidelines documented in `design_guidelines.md`:
- 8-section layout structure
- Premium, minimal aesthetic
- Mobile-responsive grid layouts
- Consistent spacing using Tailwind units (4, 8, 12, 16, 24)
- Architecture-themed imagery
- Professional credibility focus

### Asset Management

**Static Assets**: Stored in `attached_assets/` directory with alias `@assets` configured in Vite
- Logo images
- Project portfolio images (12 architecture, 15 interior design)
- Generated hero/service images
- Founder profile image

### Build Configuration

**Vite Configuration** (`vite.config.ts`):
- React plugin for JSX/TSX support
- Development server on port 5000, host `0.0.0.0`, allowedHosts enabled
- Path aliases: `@/` → `client/src/`, `@assets` → `attached_assets/`
- Build output: `dist/public`
- Replit-specific plugins for development environment

**Scripts** (`package.json`):
- `npm run dev` - Start development server
- `npm run build` - Build static production site
- `npm run preview` - Preview production build

**Deployment**: Configured for static hosting, serves `dist/public` directory

## External Dependencies

### UI Component Library
- **Radix UI Primitives**: Minimal set for UI components (accordion, dialog, label, scroll-area, separator, slot, tabs, tooltip, avatar)

### Icon Libraries
- **Lucide React**: Primary icon set for UI elements
- **React Icons**: Social media icons via `react-icons/si`

### Styling Dependencies
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Class Variance Authority**: Component variant management
- **clsx & tailwind-merge**: Conditional className composition

### Animation Libraries
- **Framer Motion**: Declarative animations
- **Embla Carousel React**: Touch-friendly carousel

### Third-Party Integrations
- **Google Fonts**: Montserrat, Poppins, Inter font families
- **WhatsApp**: Direct messaging via `wa.me` links
- **Google Maps**: Location integration via embedded links
- **Social Media**: Instagram, YouTube, Facebook, Google Business links

### Contact Information
- Phone: +91 93910 36765, +91 96429 81899
- Email: bbmcconsultants@gmail.com
- Working Hours: Mon - Sun: 9:00 AM - 10:00 PM
- Location: Boduppal, Hyderabad, Telangana - 500092

**Architecture Note**: This is a purely static React application with no backend. All content is hardcoded in components. Configured for static site deployment.