# ClawOS — Main Marketing Site

Public marketing site for [clawoshq.com](https://clawoshq.com).  
Standalone React + TypeScript + Vite + Tailwind v4 project.  
**Not part of the ClawOS monorepo.** The app lives separately at `app.clawoshq.com`.

---

## Stack

| Layer     | Technology                                                             |
| --------- | ---------------------------------------------------------------------- |
| Framework | React 18 + TypeScript                                                  |
| Build     | Vite 5                                                                 |
| Styles    | Tailwind CSS v4 (CSS-first, `@tailwindcss/vite` plugin)                |
| Fonts     | Syne (display) · DM Sans (body) · JetBrains Mono (data) — Google Fonts |
| Hosting   | Vercel (static SPA)                                                    |

---

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Security

```bash
npm audit --audit-level=high    # must be exit 0 before any deploy
```

The two moderate findings (esbuild GHSA-67mh-4wv8-2f99) are dev-server-only and do not affect the production build. They resolve when Vite ships a non-breaking patch to esbuild ≥0.24.3.

---

## Deploy to Vercel

1. Push to GitHub.
2. Import the repo in Vercel — framework auto-detected as Vite.
3. No environment variables required for the marketing site (all links are hardcoded to `app.clawoshq.com`).
4. `vercel.json` handles SPA routing and security headers automatically.

Custom domain: set `clawoshq.com` as the production domain in Vercel project settings.

---

## Component architecture

```
src/
├── App.tsx                    # Section assembly — section order lives here
├── index.css                  # Tailwind v4 @theme tokens, keyframes, base
├── main.tsx
├── hooks/
│   ├── useScrollReveal.ts     # IntersectionObserver-based .reveal → .revealed
│   └── useScrollHeader.ts     # Scroll threshold for header blur effect
└── components/
    ├── StickyHeader.tsx        # Transparent → frosted on scroll, mobile menu
    ├── HeroSection.tsx         # Split layout: copy left, platform shell card right
    ├── HeroCardStack.tsx       # Platform shell visual: 3-skill switcher + CareerClaw workspace
    ├── WhySection.tsx          # 3 problem cards: why ClawOS exists
    ├── PlatformSteps.tsx       # How it works (4 steps) + What makes it different (3 cards)
    ├── SkillSpotlight.tsx      # CareerClaw proof: workflow strip + feature card + example jobs
    ├── ProSection.tsx          # ClawOS Pro: Today (CareerClaw) + Tomorrow (platform extension)
    ├── TrustBand.tsx           # Security section: 4 trust statements + tooling strip
    ├── SkillRoadmap.tsx        # Live/upcoming/planned skill cards
    ├── FaqAccordion.tsx        # 8 questions, exclusive one-open-at-a-time
    ├── FinalCtaBand.tsx        # Closing CTA band
    └── SiteFooter.tsx          # 5-column desktop, stacked mobile
```

### Adding a new section

1. Create the component in `src/components/`.
2. Import it in `App.tsx` and insert it in the desired position.
3. Add a `id="anchor-name"` to the section element.
4. Add the anchor to the `NAV` array in `StickyHeader.tsx`.

### Colour tokens

All colours are defined as Tailwind v4 `@theme` CSS variables in `src/index.css` and referenced inline via `style={{ color: 'var(--color-accent)' }}` or as Tailwind utility classes. Never use raw hex values in component code — use the CSS variables.

| Token               | Hex       | Use                                    |
| ------------------- | --------- | -------------------------------------- |
| `--color-bg`        | `#07090F` | Page background                        |
| `--color-surface`   | `#0F1523` | Card backgrounds                       |
| `--color-surface-2` | `#162035` | Nested surfaces, alternating rows      |
| `--color-accent`    | `#00D4A1` | Primary CTA, active states, highlights |
| `--color-indigo`    | `#6366F1` | Secondary accent, upcoming skill cards |
| `--color-text`      | `#DDE8F8` | Primary body text                      |
| `--color-muted`     | `#8099B3` | Secondary copy, card descriptions      |
| `--color-dim`       | `#4A6580` | Eyebrow labels, structural UI          |

### Contrast reference

| Context                                            | Colour    | Why                 |
| -------------------------------------------------- | --------- | ------------------- |
| Headings                                           | `#DDE8F8` | Full contrast       |
| Body copy / card descriptions                      | `#8099B3` | Readable, secondary |
| Eyebrow labels / step numbers                      | `#4A6580` | Structural, legible |
| Decorative chrome (copyright, moniker, topbar URL) | `#3D5266` | Intentionally dim   |

endnotes
