# PRD — BLVD Nashik Luxury Hotel Website

## Original Problem Statement
Build a breathtakingly luxurious, immersive, mobile-first, multi-page website for BLVD Nashik — a premium boutique hotel & lifestyle destination on Trimbak Road, Satpur, Nashik (Aures Hospitality Group). Complete rebuild replacing a basic Wix template. Design concept: "Midnight Luxe" — deep midnight/charcoal backgrounds, champagne gold accents, warm ivory text, rose-gold highlights. Award-worthy (Awwwards-level) motion and craft. Purely static frontend (no backend/CMS).

## User Choices
- Existing React (CRA) setup instead of Vite (functionally identical)
- Forms show elegant success confirmation (static/demo behavior — NO backend submission)
- All ~22 images AI-generated

## Architecture
- **Frontend only**: React 19 (CRA + craco), React Router v7, Framer Motion 11, Lenis smooth scroll, Lucide icons, vanilla CSS design tokens (no Tailwind usage in components)
- Backend (FastAPI/Mongo) untouched — site is purely static
- Fonts: Cormorant Garamond (display), Playfair Display (accent), Inter (body), Outfit (nav/UI)
- Images: 22 AI-generated cinematic photos hosted on emergent CDN, referenced in `src/data/site.js`

## Key Files
- `src/data/site.js` — ALL content: images, contact, rooms, venues, dining, club, testimonials, gallery, hours, distances
- `src/index.css` — full "Midnight Luxe" design token system + shared components (nav, footer, buttons, forms, lightbox, marquee)
- `src/styles/home.css`, `src/styles/pages.css` — section styles
- `src/components/Shared.jsx` — SectionHead, ImageReveal (clip-path wipe), Reveal, AnimatedCounter, CTAButton, GoldDivider, WhatsAppIcon, usePageMeta
- `src/components/` — Navbar (glass on scroll + full-screen mobile menu), Footer (mandatory credits: Dragosaurabh / Ready2UP / Secured badge), PageHero (parallax), FloatingButtons (WhatsApp + scroll-top), Lightbox, Marquee
- `src/components/home/` — HeroSection (Ken Burns + particles + masked line reveal), Sections (pillars, rooms teaser, banquet parallax + counters), Showcase (dining scroll, club teaser, gallery masonry), Closing (testimonials carousel, map, gold CTA)
- `src/pages/` — Home, Rooms, Banquet, Dining, ClubLaFair, Gallery, Contact, NotFound
- `public/index.html` — SEO meta, OG tags, JSON-LD Hotel schema, fonts; `public/favicon.svg` — gold B monogram

## What's Implemented (June 2026)
- All 7 pages + branded 404, page transitions, Lenis smooth scrolling
- **Menus page (/menus)**: 3 venue tabs (Panorama/Foundry/Turmeric), chef's signature cards, category pill nav with lenis jump, dotted-leader price rows, PDF menu downloads (customer artifact URLs), ?venue= deep links from Dining page & home dining cards. Data: `src/data/menus.js` (extracted from uploaded PDFs; Sidewalk kitchen menu mapped to Turmeric)
- **Offers page (/offers)**: 6 packages (Wine Country Weekend, Royal Wedding Bundle, Celebration Staycation, Corporate Conclave, Wellness Reset, Private Premiere) with inclusions + prefilled WhatsApp enquiry links (`src/data/offers.js`); home OffersTeaser shows 3 featured
- **Reviews Wall (home)**: replaced testimonial carousel with 3 auto-scrolling review columns (pause on hover, masked fade), 4.2★ Google badge w/ 2,300+ count (`src/data/reviews.js`, `home/ReviewsWall.jsx`, styles in `extras.css`). Quotes are curated from real Google/TripAdvisor praise themes (cleanliness, rooftop pool, Turmeric 24h, staff Roopali/Pooja, gym, ambient design)
- **Experiences page (/experiences)**: 6 destinations (Sula, Soma/York, Trimbakeshwar, Ramkund/Panchavati, Pandavleni, Gangapur Dam) with AI imagery, drive times from BLVD, Google Maps direction links + "BLVD Wine Trail" one-day timeline + WhatsApp concierge CTA. Nav now 10 links ("Banquet & Lawn"→"Banquets", mobile breakpoint 1420px); home Location section links to it
- **Announcement Bar**: season-aware dismissible gold strip fixed above nav (`AnnouncementBar.jsx`, styles in `tour.css`); picks message by current month (monsoon Jun–Sep, festive Oct–Nov, NYE Dec–Jan, summer Feb–May); dismissal persisted per-announcement in localStorage; nav offsets via `--announce-h` CSS var. Monsoon Staycation offer added to offers.js (featured; home teaser shows first 3 featured)
- **Virtual Tour (/tour)**: cinematic 12-stop guided walkthrough (arrival → lobby → rooms → dining → Hera → Club LaFair → rooftop pool finale w/ Book CTA); crossfade transitions, dots + prev/next + keyboard arrows + progress bar. Entry points: hero "Take the Virtual Tour" link, Gallery invite strip, footer link
- Footer year is dynamic (new Date().getFullYear()); nav has 10 links
- Home: 12 sections incl. editorial marquee, count-up stats, parallax sections, offers teaser, testimonial auto-carousel, dark-styled Google Map
- Rooms: alternating showcases, 12-amenity grid, booking CTAs (external staah booking engine)
- Banquet: Hera/Apollo/Zeus showcases, 7 event-type cards, enquiry form (validation + success state)
- Dining: 3 venue showcases (View Menu → /menus?venue=x) + entertainment (cinema/golf/games/kids)
- Club LaFair: pool feature + 6 facility editorial rows, membership CTA
- Gallery: 7 filter categories, masonry, lightbox w/ keyboard nav (Esc/arrows), counter
- Contact: validated form w/ success confirmation, info panels, hours, map, quick-action bar
- Floating WhatsApp (wa.me/918380039333) + scroll-to-top on all pages
- Per-page SEO titles/descriptions via usePageMeta

## Known Notes
- lucide-react MUST stay at 0.516.0 (v1 removed Instagram/Facebook brand icons)
- Framer `whileInView` nested inside motion parents proved unreliable → all reveals use `useInView` + `animate` pattern
- useInView margins must be vertical-only (`0px 0px -Npx 0px`) — all-side negative margins break IO near screen edges on mobile
- Very tall blocks can't reach `amount: 0.15` in-view threshold → Menus body uses animate-on-mount instead
- Playwright testing: use `page.mouse.wheel` (Lenis ignores window.scrollTo); screenshot_tool scripts must be top-level statements
- Forms are MOCKED (client-side success only, no data persisted); offer enquiries go via prefilled WhatsApp
- Instagram/Facebook links point to assumed handles (@blvdnashik)

## Backlog / P1-P2
- P1: Wire contact/enquiry forms to backend or email service (Resend)
- P1: Real property photography swap-in when available
- P2: Virtual tour; multi-language (Marathi/Hindi)
- P2: Lighthouse fine-tuning (preload hero image, font-display swap already via Google Fonts)
