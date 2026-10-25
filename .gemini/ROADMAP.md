# Muhammed Faiz Seitz — Portfolio Platform Roadmap

> **Master Engineering & Delivery Roadmap**
> Target Project: Resume Next.js Platform for Muhammed Faiz Seitz
> Current Status: Foundation & Scaffolding Phase
> Last Updated: 2026-10-24

---

## Strategic Vision

Construct an industry-leading, interactive **Resume & Systems Engineering Showcase** for **Muhammed Faiz Seitz** (AI Engineer & Lead Architect, Durban South Africa). The application delivers an immersive, fast, and responsive digital resume experience that showcases full-stack web applications, game network simulations, civic intelligence architectures, and cloud automation actors.

---

## Milestones & Implementation Phases

```mermaid
flowchart LR
    P0["Phase 0: Architecture & Data Ingestion"] --> P1["Phase 1: Next.js Platform Initialization"]
    P1 --> P2["Phase 2: Hero & Profile Core"]
    P2 --> P3["Phase 3: Featured Projects Matrix"]
    P3 --> P4["Phase 4: Apify Actors Interactive Catalog"]
    P4 --> P5["Phase 5: Technical Details & Modal Views"]
    P5 --> P6["Phase 6: Polish, Performance & Production Deployment"]
```

---

### Phase 0: Project Specs & Data Extraction (COMPLETED ✅)
- [x] Ingest and catalog all 15 targeted workspace projects across `C:\Users\Faiz\Documents\workspaces\`.
- [x] Extract remote GitHub repository URLs for projects without public domains.
- [x] Discover and catalog logos, brand assets, and favicons from source directories.
- [x] Enumerate the complete suite of 37 Apify actors from `C:\Users\Faiz\Documents\workspaces\apify\`.
- [x] Sourced resume document from `\.gemini\Muhammed Faiz Seitz - Full-Stack AI Resume.pdf`.
- [x] LinkedIn profile integration established: [https://www.linkedin.com/in/muhammed-faiz-seitz/](https://www.linkedin.com/in/muhammed-faiz-seitz/).
- [x] Sourced generative AI API credentials in `.env.local` (`FAL_API_KEY` and `GEMINI_API_KEY`) for on-demand media generation.
- [x] Establish profile identity parameters (Location: Durban South Africa, Email: `byseitz.agency@gmail.com`, Avatar: `C:\Users\Faiz\Pictures\AI Engineer.png`).
- [x] Establish project source of truth in [.gemini/GEMINI.md](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/.gemini/GEMINI.md).

---

### Phase 1: Next.js Platform Initialization & Design System (COMPLETED ✅)
- [x] Initialize Next.js 15+ App Router application with TypeScript and Tailwind CSS.
- [x] Configure unified Design Tokens in `src/app/globals.css`:
  - Deep obsidian dark background palette (`#090a0f`) with glassmorphism overlays.
  - Accent neon cyan / emerald / electric violet gradients and glowing highlights.
  - Modern typography system using Geist / Inter.
- [x] Set up static data structures in [src/data/projects.ts](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/data/projects.ts) and [src/data/apify-actors.ts](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/data/apify-actors.ts) with TypeScript interfaces.
- [x] Copy and optimize avatar asset from `C:\Users\Faiz\Pictures\AI Engineer.png` into `public/images/profile.png`.
- [x] Copy and organize project logo SVGs/PNGs into `public/images/projects/`.
- [x] Mount downloadable CV asset from `\.gemini\Muhammed Faiz Seitz - Full-Stack AI Resume.pdf` into `public/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf`.

---

### Phase 2: Hero Section, Personal Identity & Media Assets (COMPLETED ✅)
- [x] **Hero Presentation**:
  - High-res avatar display with animated ambient glow border.
  - Name: **Muhammed Faiz Seitz**.
  - Professional Title: *AI Engineer & Full-Stack Systems Architect*.
  - Location badge: `Durban, South Africa 🇿🇦` with SAST (UTC+2) timezone indicator.
  - Interactive "Contact Direct" email CTA and one-click copy-to-clipboard button.
  - **LinkedIn Profile Link**: Direct connection to [https://www.linkedin.com/in/muhammed-faiz-seitz/](https://www.linkedin.com/in/muhammed-faiz-seitz/).
  - **Download CV Button**: Downloadable PDF link connecting to `/Muhammed-Faiz-Seitz-Full-Stack-AI-Resume.pdf`.
- [x] **Engineering Philosophy & Bio**:
  - Metric counters: `15+ Production Systems`, `37 Apify Cloud Actors`, `11,900+ DBE Papers Ingested`, `11 SA Official Languages`.
  - Key technical stack badges (Next.js, TypeScript, Supabase, PostGIS, Apify).
- [x] **Dynamic Media Generation Engine**:
  - Integrated `FAL_API_KEY` (fal.ai FLUX / Recraft) and `GEMINI_API_KEY` (Gemini 2.5 / Imagen 3) in [scripts/generate-media.mjs](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/scripts/generate-media.mjs) to synthesize custom project hero banners and high-resolution visuals.

---

### Phase 3: Featured Projects Matrix (15 Core Projects) (COMPLETED ✅)
- [x] **Filterable Project Navigation**:
  - Category filters: `All`, `Civic & GovTech`, `FinTech & SaaS`, `AI & Media`, `Games & Simulations`.
  - Real-time search bar with instant filtering over project titles, tech tags, and descriptions.
- [x] **Project Cards Implementation**:
  - All 15 projects rendered with verified logos, tags, summaries, and dual action links ("Visit App" for production domains, "GitHub Repo" for codebases).

---

### Phase 4: Apify Scrapers & Cloud Agents Suite (37 Actors) (COMPLETED ✅)
- [x] Build interactive grid for all 37 Apify actors.
- [x] Category filtering: `Intelligence & News`, `Market & Real Estate`, `Media, RAG & LLM`, `GovTech & Local Data`.
- [x] Real-time keyword & tag search for quick discovery.

---

### Phase 5: Deep-Dive Technical Drawer / Modal (COMPLETED ✅)
- [x] Built [ProjectModal.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/components/ProjectModal.tsx) for in-depth inspection without leaving the page.
- [x] Displays architectural highlights, engineered stack breakdown (Frontend, Backend, Database, Styling), and direct repository links.

---

### Phase 6: Performance, SEO, Dynamic Media & Deployment (COMPLETED ✅)
- [x] **OpenGraph, Twitter Cards & JSON-LD Structured Data**:
  - Built dynamic 1200x630 OpenGraph card generator in [src/app/opengraph-image.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/app/opengraph-image.tsx) and [src/app/twitter-image.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/app/twitter-image.tsx).
  - Injected complete Schema.org JSON-LD graph (`Person`, `WebSite`) in [src/app/layout.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/app/layout.tsx).
  - Configured dynamic XML sitemap in [src/app/sitemap.ts](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/app/sitemap.ts) and robots rules in [src/app/robots.ts](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/app/robots.ts).
- [x] **Verifiable Architectural Credentials & LinkedIn Integration**:
  - Created [CredentialsBadges.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/components/CredentialsBadges.tsx) showcasing verified competencies across Apify Cloud Actors (37), Civic & Geospatial GIS, DBE Curriculum Knowledge Graph (25,000+ assets), and NFC Micro-Fintech.
  - Connected verified LinkedIn card and GitHub profiles in [src/components/Footer.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/components/Footer.tsx).
- [x] **Responsive Mobile Experience & Quick Dock**:
  - Implemented [MobileQuickDock.tsx](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/src/components/MobileQuickDock.tsx) providing bottom-fixed, quick-action access to Email, CV Resume, Projects, Apify Actors, and LinkedIn.
- [x] **Performance & Security Headers**:
  - Added [vercel.json](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/vercel.json) configured with HSTS, CSP, X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy, and immutable asset caching.
- [x] **Automated CI/CD Workflows**:
  - Configured [.github/workflows/ci.yml](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/.github/workflows/ci.yml) for automated linting, TypeScript verification, and production build checks.
  - Configured [.github/workflows/deploy.yml](file:///c:/Users/Faiz/Documents/workspaces/mfseitz-portfolio/.github/workflows/deploy.yml) for Vercel production deployment.
- [x] **Production Verification**:
  - Verified Next.js 16.4.3 production build (`next build`) runs with zero errors and generates optimized static pages (`/`, `/_not-found`, `/opengraph-image`, `/twitter-image`, `/robots.txt`, `/sitemap.xml`).
  - Verified ESLint (`eslint`) passes with zero errors and zero warnings.
  - Verified TypeScript compiler (`tsc --noEmit`) passes with zero errors.

