# Hashware Website

## Overview

Hashware is a modern, dark-mode-first marketing website for a software development company specializing in innovative web and mobile applications. The site features:

- **Tagline**: "Unlocking smart software."
- **Bilingual**: English and Dutch language support with localStorage persistence
- **Sections**: Hero (animated), Services, Portfolio, Contact Form
- **Company Info**: Postbus 67025, 1060JA Amsterdam | info@hashware.app

Built as a single-page application with smooth scrolling between sections and Framer Motion animations.

## Recent Changes (January 2026)
- Created complete website with dark mode theme
- Implemented EN/NL language switching with localStorage persistence
- Added animated hero section with floating elements and rotating orbits
- Built contact form with backend API endpoint
- Added proper aria-labels for accessibility

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (single-page app with hash navigation)
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state, React Context for language switching
- **Animations**: Framer Motion for scroll animations and interactive effects
- **Typography**: Inter (primary), JetBrains Mono (code/technical elements) via Google Fonts

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Design**: RESTful endpoints under `/api/` prefix
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Static files served from `dist/public`, built with esbuild for server bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` with Zod validation via drizzle-zod
- **Current Implementation**: MemStorage class (in-memory) for development, ready for PostgreSQL migration
- **Database Config**: `drizzle.config.ts` expects `DATABASE_URL` environment variable

### Design System
- Follows design guidelines in `design_guidelines.md` inspired by Linear, Vercel, and Stripe
- Deep dark backgrounds with strategic accent lighting
- HSL color system with CSS variables for consistent theming
- Responsive design with mobile-first approach

## External Dependencies

### Core Services
- **Database**: PostgreSQL (configured via `DATABASE_URL` environment variable)
- **Fonts**: Google Fonts API (Inter, JetBrains Mono)

### Key NPM Packages
- **UI**: Radix UI primitives, Lucide React icons, Embla Carousel
- **Forms**: React Hook Form with Zod resolver
- **HTTP**: Native fetch with TanStack Query for caching
- **Session**: connect-pg-simple for PostgreSQL session storage (available but not currently active)

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner
- **Build**: esbuild for server, Vite for client
- **Database Tools**: drizzle-kit for migrations (`npm run db:push`)