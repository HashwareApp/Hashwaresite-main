# Hashware Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear (modern tech aesthetic), Vercel (clean sophistication), and Stripe (restrained elegance) to create a cutting-edge dark mode experience that showcases Hashware's innovative capabilities.

## Core Design Principles
- **Modern Tech Aesthetic**: Bold, confident typography with generous spacing
- **Dark-First Design**: Deep backgrounds with strategic accent lighting
- **Innovation Through Motion**: Purposeful animation that demonstrates technical prowess
- **Bilingual Excellence**: Seamless EN/NL language switching without layout disruption

## Typography System
- **Primary Font**: Inter or Manrope (Google Fonts) - clean, modern, technical
- **Headings**: 
  - Hero (h1): 4xl-6xl, font-bold, tracking-tight
  - Section (h2): 3xl-4xl, font-semibold
  - Subsection (h3): xl-2xl, font-medium
- **Body**: base-lg, font-normal, tracking-normal
- **Accent Text**: Monospace font (JetBrains Mono) for technical details, code snippets

## Layout System
**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 24, 32
- Consistent section padding: py-24 (desktop), py-16 (mobile)
- Component spacing: gap-8 to gap-16
- Container: max-w-7xl with px-8

## Component Library

### Navigation
- Floating/glass morphism header with blur backdrop
- Logo (white version) on left
- Main nav items: Home, Services, Portfolio, Contact
- Language toggle (EN/NL) with smooth transition
- Sticky on scroll with subtle shadow

### Hero Section (Full Viewport Impact)
- **Layout**: Asymmetric split - 60% content, 40% visual element
- **Content**: 
  - Large heading with "Unlocking smart software" tagline
  - Brief value proposition (2-3 lines)
  - Dual CTAs: "View Our Work" + "Get In Touch"
- **Visual Element**: Animated 3D mockup showcase or interactive grid pattern
- **Animation**: Subtle parallax scroll, floating elements, or morphing geometric shapes
- **Height**: 90vh to maintain impact while allowing scroll indication

### Services Section
- 2-column grid (desktop) showcasing Web Development and Mobile Development
- Each service card features:
  - Icon/graphic representation
  - Service title
  - 3-4 key capabilities
  - Subtle hover elevation effect

### Portfolio/Work Showcase
- Masonry or bento-box grid layout (2-3 columns)
- Project cards with:
  - App screenshots/mockups
  - Project title and category
  - Brief description
  - Tech stack badges
- Hover reveals more details with smooth transitions

### Contact Section
- 2-column layout:
  - Left: Contact form (Name, Email, Project Type, Message)
  - Right: Company details (Address, Email) + Map placeholder or decorative element
- Form styling: Outlined inputs with focus states, no background fill

### Footer
- 3-column layout:
  - Company info + logo
  - Quick links (Services, Portfolio, Contact)
  - Language selector + Social links placeholder
- Copyright and address details
- Maintains dark theme consistency

## Animation Strategy
**Hero Animation** (Primary Focus):
- Implement one signature animation: rotating 3D device mockups, particle grid system, or morphing code blocks
- Smooth entrance transitions for text elements (stagger effect)
- Subtle continuous motion (floating, pulsing glows)

**Secondary Animations**:
- Scroll-triggered fade-ins for sections (intersection observer)
- Service card hover lifts
- Button hover glows
- Smooth page transitions for language switching

## Icons
**Heroicons** (outline style for dark mode) via CDN
- Navigation icons
- Service category icons
- Social media icons
- Form input icons

## Images
**Required Images**:
1. **Hero Background/Element**: Abstract tech visualization, 3D rendered devices, or geometric patterns - serves as visual anchor (right side of hero)
2. **Portfolio Projects**: 4-6 app screenshots/mockups showcasing mobile and web applications
3. **Service Section Graphics**: Subtle illustrations or diagrams representing web/mobile development

**Image Treatment**: 
- Subtle gradient overlays for depth
- Slight blur/glow effects for atmospheric quality
- High contrast to work with dark backgrounds

## Accessibility
- Minimum contrast ratio 4.5:1 for text (use light grays on dark backgrounds)
- Focus indicators with visible outlines
- Aria labels for language switcher
- Alt text for all images
- Keyboard navigation support throughout

## Responsive Behavior
- Mobile: Stack all multi-column layouts to single column
- Tablet: 2-column max for services/portfolio
- Desktop: Full multi-column layouts with generous spacing
- Hero: Maintain impact on mobile with adjusted proportions (stacked layout)

This design creates a sophisticated, modern tech presence that positions Hashware as an innovative leader in app development while maintaining usability and professional polish.