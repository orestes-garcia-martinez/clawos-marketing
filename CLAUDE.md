# CLAUDE.md — ClawOS Marketing Site

This file guides Claude Code and the Claude Review GitHub workflow when working on this repository.

## Project overview

Standalone React + TypeScript + Vite + Tailwind v4 marketing site for [clawoshq.com](https://clawoshq.com).
**Not part of the ClawOS monorepo.** No backend. No environment variables required.

---

## Development commands

```bash
npm install           # install deps (also installs Husky hooks via prepare)
npm run dev           # dev server at http://localhost:5173
npm run build         # tsc + vite build → dist/
npm run preview       # preview the production build locally

npm run lint          # ESLint
npm run lint:fix      # ESLint with auto-fix
npm run typecheck     # tsc --noEmit
npm run format        # Prettier (write)
npm run format:check  # Prettier (check — used in CI)

npm run test:run      # Vitest (single run)
npm run test          # Vitest (watch)
npm run test:coverage # Vitest with coverage
npm run test:e2e      # Playwright e2e
```

Before opening a PR, the following must all pass:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm audit --audit-level=high
```

---

## Design system rules

### Colours

All colours must use the CSS variables defined in `src/index.css`. Never use raw hex values in component code.

| Token               | Hex       | Use                                    |
| ------------------- | --------- | -------------------------------------- |
| `--color-bg`        | `#07090F` | Page background                        |
| `--color-surface`   | `#0F1523` | Card backgrounds                       |
| `--color-surface-2` | `#162035` | Nested surfaces, alternating rows      |
| `--color-surface-3` | `#1C2A44` | Deep nested surfaces                   |
| `--color-accent`    | `#00D4A1` | Primary CTA, active states, highlights |
| `--color-indigo`    | `#6366F1` | Secondary accent, upcoming skill cards |
| `--color-text`      | `#DDE8F8` | Primary body text                      |
| `--color-muted`     | `#8099B3` | Secondary copy, card descriptions      |
| `--color-dim`       | `#4A6580` | Eyebrow labels, structural UI          |
| `--color-chrome`    | `#3D5266` | Decorative chrome (copyright, topbar)  |
| `--color-border`    | `#1E2F4A` | Borders and dividers                   |
| `--color-danger`    | `#EF4444` | Error states                           |

Use `style={{ color: 'var(--color-accent)' }}` or Tailwind utility classes. Never hardcode hex values.

### Fonts

| Role    | Family         |
| ------- | -------------- |
| Display | Syne           |
| Body    | DM Sans        |
| Data    | JetBrains Mono |

Loaded via Google Fonts in `index.html` with `font-display: swap`.

### Tailwind

Project uses Tailwind CSS v4 (CSS-first config via `@tailwindcss/vite` plugin). Do not use arbitrary values for colours or fonts — use the CSS variables instead.

---

## Component architecture

```
src/
├── App.tsx                 # Section assembly — controls section order
├── index.css               # Tailwind v4 @theme tokens, keyframes, base styles
├── main.tsx
├── hooks/
│   ├── useScrollReveal.ts  # IntersectionObserver: .reveal → .revealed
│   └── useScrollHeader.ts  # Scroll threshold for header blur effect
└── components/
    ├── StickyHeader.tsx     # Transparent → frosted on scroll, mobile menu
    ├── HeroSection.tsx      # Split layout: copy left, platform shell card right
    ├── HeroCardStack.tsx    # Platform shell: 3-skill switcher + workspace preview
    ├── WhySection.tsx       # 3 problem cards
    ├── PlatformSteps.tsx    # How it works (4 steps) + differentiators (3 cards)
    ├── SkillSpotlight.tsx   # CareerClaw proof: workflow strip + feature card + jobs
    ├── ProSection.tsx       # ClawOS Pro: Today (CareerClaw) + Tomorrow (roadmap)
    ├── TrustBand.tsx        # Security: 4 trust statements + tooling strip
    ├── SkillRoadmap.tsx     # Live / upcoming / planned skill cards
    ├── FaqAccordion.tsx     # 8 questions, exclusive one-open-at-a-time
    ├── FinalCtaBand.tsx     # Closing CTA band
    └── SiteFooter.tsx       # 5-column desktop, stacked mobile
```

### Adding a new section

1. Create the component in `src/components/`.
2. Import and place it in `App.tsx`.
3. Add `id="anchor-name"` to the root section element.
4. Add the anchor to the `NAV` array in `StickyHeader.tsx`.

---

## Code quality rules

- No `any` — use explicit types or `unknown`.
- Exported functions must have return types annotated.
- Mapped lists must have a stable `key` prop.
- No unused imports or variables.
- No inline `style=` for values that have a Tailwind token or CSS variable equivalent.
- No large media imports that would increase bundle size or hurt LCP.

---

## Accessibility requirements

- Every interactive element (button, link) must have an accessible name.
- Icon-only elements need `aria-label`.
- Images need descriptive `alt` text.
- Form inputs need associated labels via `htmlFor` / `id` pair.
- Text on dark surfaces must meet WCAG AA contrast.

---

## Security requirements

- No API keys, tokens, or credentials anywhere in source.
- No third-party analytics or tracking scripts.
- New `npm` dependencies require explicit justification.
- `npm audit --audit-level=high` must exit 0. The two known moderate findings (esbuild GHSA-67mh-4wv8-2f99) are dev-server-only and do not affect the production build.

---

## Brand and copy rules

- **Do not** describe future skills (ScrapeClaw, InvestClaw) as already live.
- **Do not** promise channels beyond Web and Telegram.
- ClawOS Pro must be framed as a platform-wide upgrade, not a CareerClaw-only feature.

---

## Git workflow

### Branch naming

```
<type>/<short-description-in-kebab-case>
```

Valid types: `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `perf`, `refactor`, `revert`, `style`, `test`

### Commit messages (Conventional Commits)

```
<type>(<optional scope>): <subject>
```

- Subject must be lowercase, no trailing period.
- Breaking changes: add `!` after the type, or include `BREAKING CHANGE:` in the footer.

Pre-commit hooks (Husky) run `lint-staged` (ESLint + Prettier on staged files) and validate commit messages with commitlint.

### PR workflow

1. Branch from `main` with a valid branch name.
2. Commit with conventional commits.
3. Push and open a PR to `main`.
4. All CI checks must pass before merge.

---

## CI checks

| Check        | What runs                                           |
| ------------ | --------------------------------------------------- |
| **Security** | Socket.dev firewall + `npm audit` + Snyk CVE scan   |
| **Quality**  | ESLint + TypeScript typecheck + Prettier            |
| **Test**     | Vitest unit tests                                   |
| **E2E**      | Playwright (runs after quality + test pass)         |
| **Review**   | Claude Code automated PR review (claude-review.yml) |

---

## Claude Review workflow

The `claude-review.yml` workflow runs `anthropics/claude-code-action@v1` on every PR open, push, and reopen, and responds to `@claude` mentions in PR and issue comments.

**Automated review checks (by severity):**

- 🔴 Must fix: type errors, unsafe `any`, hardcoded hex colours, missing accessible names, credentials in source, high/critical npm audit findings.
- 🟡 Should fix: missing return types on exports, missing `alt` text, new unreviewed dependencies, SEO meta tags missing from `index.html` changes, brand copy violations.
- 🟢 Suggestion: React key prop improvements, contrast borderline cases, copy polish.

The review uses `claude-sonnet-4-6` with `--max-turns 5`.

**Required secret:** `ANTHROPIC_API_KEY` must be set in repository Settings → Secrets → Actions.
