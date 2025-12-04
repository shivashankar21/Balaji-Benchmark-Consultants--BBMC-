# BBMC Landing Page Design Guidelines

## Design Approach
**Reference-Based:** Drawing from premium architecture/construction firm websites, combining modern minimalism with professional credibility. The design should feel established, trustworthy, and sophisticated.

## Brand Colors (Strict)
- **Primary Blue:** #009FE3 (CTAs, accents, highlights)
- **Grey:** #B8B8B8 (background patterns, secondary elements)
- **Black:** #111111 (primary text, headings)
- **White:** #FFFFFF (backgrounds, contrast elements)

## Typography
- **Headings:** Montserrat or Poppins (Bold/Semibold, sizes: 48px hero, 36px section titles, 24px subsections)
- **Body Text:** Inter or Roboto (Regular 16px, Medium for emphasis)
- **Spacing Units:** Tailwind units of 4, 8, 12, 16, 24 for consistent rhythm

## Layout Structure (8 Sections)

### 1. Hero Section
- Full-width architecture-themed background image (modern building/blueprint aesthetic with grey overlay)
- Centered content with logo at top
- Headline: "Designing Dreams. Building Excellence." (White, 48px, bold)
- Subheading: "Professional Architects, Engineers, Interior Designers, Vaasthu Experts, and Builders" (White, 18px)
- Three CTAs in horizontal layout with blurred backgrounds:
  - "Call Now (+91 93910 36765)" (Blue button)
  - "Get a Consultation" (White outline button)
  - WhatsApp icon + text (Green accent #25D366)
- Height: 85vh on desktop, natural on mobile

### 2. About BBMC
- Two-column layout (desktop): Left text, Right image/icon
- Highlight badges: "30+ Years", "Vaasthu Compliant", "Trusted by 1000s"
- Short professional paragraph (3-4 sentences)
- Grey background (#F8F8F8)

### 3. Services Section
- White background
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- 7 service cards with:
  - Icon (Heroicons - architectural/engineering themed)
  - Service title (20px, Montserrat Semibold)
  - Brief 1-line description
- Card hover: Subtle blue border, slight lift

### 4. Project Portfolio
- Masonry grid layout (Pinterest-style)
- Filter tabs: All | Residential | Commercial (Blue active state)
- Categories as badges on images
- Images with overlay on hover showing project type
- 8-12 placeholder image slots

### 5. Why Choose BBMC (USP)
- Grey background pattern (subtle architectural shapes)
- 5 USP cards in grid (3 cols desktop, 2 tablet, 1 mobile)
- Minimal line icons (not filled)
- Short impactful statements

### 6. Testimonials
- White background
- 3-5 review cards in horizontal scroll/grid
- Each card: Quote, star rating (5 stars in blue), "Google Review" badge
- Professional avatar placeholders (grey circles with initials)

### 7. Contact Section
- Split layout: Left (contact form), Right (map + details)
- Embedded Google Maps iframe
- Contact details with icons:
  - Phone (clickable tel: link)
  - Email (clickable mailto:)
  - Address with landmark emphasized
- Large WhatsApp floating button (bottom right, sticky)

### 8. Footer
- Dark background (#111111)
- Three columns: Logo + tagline | Quick Links | Social Media
- Social icons: Instagram, YouTube, Google Maps, Justdial (white with blue hover)
- Copyright: "© BBMC 2025" centered below

## Images
- **Hero:** Large architecture/blueprint aesthetic background (modern building exterior or blueprint overlay)
- **About:** Professional team photo or signature project
- **Portfolio:** 8-12 project images (residential homes, commercial buildings, interior shots)
- **Services:** Minimal line icons for each service (architectural, engineering themed)

## Component Specifications
- **Buttons:** Rounded corners (8px), padding 12px 32px, blue background with white text, white outline variant
- **Cards:** White background, subtle shadow (0 2px 8px rgba(0,0,0,0.1)), 12px border radius
- **Spacing:** Section padding py-20 desktop, py-12 mobile
- **Containers:** max-w-7xl for full sections, max-w-4xl for text-heavy content

## Accessibility
- All images with alt text
- Contrast ratio minimum 4.5:1
- Focus states visible on all interactive elements
- Semantic HTML structure

## Mobile Responsiveness
- Hamburger menu for navigation
- Stack all multi-column layouts to single column
- CTAs full-width on mobile
- Tap targets minimum 44px
- WhatsApp button remains visible (sticky)