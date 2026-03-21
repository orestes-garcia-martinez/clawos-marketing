# Contributing to ClawOS Marketing Site

Thank you for contributing. This guide covers our development workflow, commit conventions, and release process.

---

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Request Workflow](#pull-request-workflow)
- [Automated Releases](#automated-releases)
- [Scripts Reference](#scripts-reference)

---

## Requirements

- **Node.js** ≥ 18 (Vite 5 and Tailwind v4 both require it)
- **npm** ≥ 9

Check your versions:

```bash
node -v
npm -v
```

---

## Getting Started

```bash
npm install
```

This also installs Husky's git hooks via the `prepare` script. After this, every commit will be validated automatically.

Start the dev server:

```bash
npm run dev
# http://localhost:5173
```

---

## Branch Naming

All branches must follow this pattern:

```
<type>/<short-description-in-kebab-case>
```

**Valid types:** `feat`, `fix`, `build`, `chore`, `ci`, `docs`, `perf`, `refactor`, `revert`, `style`, `test`

**Examples:**

```bash
git checkout -b feat/add-pricing-section
git checkout -b fix/mobile-nav-overflow
git checkout -b docs/update-readme
```

---

## Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) enforced by commitlint + Husky.

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

- **type** — one of the types in the table below
- **scope** — optional, names the area changed (e.g. `hero`, `faq`, `footer`)
- **subject** — short description, lowercase, no period at the end

### Types and Version Impact

| Type       | Description                         | Version Bump |
| ---------- | ----------------------------------- | ------------ |
| `feat`     | New feature                         | Minor        |
| `fix`      | Bug fix                             | Patch        |
| `perf`     | Performance improvement             | Patch        |
| `docs`     | Documentation only                  | None         |
| `style`    | Code style (formatting, semicolons) | None         |
| `refactor` | Code change (no bug fix or feature) | None         |
| `test`     | Adding or correcting tests          | None         |
| `build`    | Build system or dependencies        | None         |
| `ci`       | CI/CD changes                       | None         |
| `chore`    | Maintenance tasks                   | None         |
| `revert`   | Revert a previous commit            | Varies       |

### Breaking Changes

Add `!` after the type to trigger a **major** version bump:

```bash
feat!: redesign hero section with new layout
```

Or include `BREAKING CHANGE:` in the footer:

```bash
feat: redesign hero section

BREAKING CHANGE: removes the HeroCardStack component in favour of HeroPlatformShell
```

### Examples

✅ Valid:

```bash
git commit -m "feat: add contact form to footer"
git commit -m "fix: resolve mobile menu z-index issue"
git commit -m "docs: add deployment instructions"
git commit -m "refactor(hero): simplify animation logic"
git commit -m "feat(faq): add pro subscription question"
```

❌ Invalid (will be rejected by commitlint):

```bash
git commit -m "Add feature"         # missing type
git commit -m "feat: Add Feature"   # subject must be lowercase
git commit -m "feat:"               # empty subject
git commit -m "fixed bug"           # wrong format
```

### Pre-commit Hooks

Husky runs automatically on every commit:

- **pre-commit** — runs `lint-staged` (ESLint + Prettier on staged files only)
- **commit-msg** — validates commit message format with commitlint

If a commit is rejected, read the error message. Common fixes:

- Wrong format → check the pattern above
- Lint error → run `npm run lint:fix` and re-stage the file
- Formatting issue → run `npm run format` and re-stage the file

---

## Pull Request Workflow

1. Create a branch from `main` following the [naming convention](#branch-naming)
2. Make your changes with [conventional commits](#commit-messages)
3. Push and open a PR to `main`
4. CI runs automatically — all checks must pass before merge
5. Get approval and merge

### CI Checks

| Check        | Description                    |
| ------------ | ------------------------------ |
| **Security** | `npm audit --audit-level=high` |
| **Quality**  | ESLint + TypeScript + Prettier |
| **Build**    | `vite build` must succeed      |

> Socket.dev, Snyk, and Playwright e2e checks are planned and will be added to this table when configured.

---

## Automated Releases

We use [Release Please](https://github.com/googleapis/release-please) to automate versioning and GitHub releases.

### How It Works

**Step 1** — Merge conventional commits to `main`:

```
feat: add testimonials section
fix: correct footer link colour
```

**Step 2** — Release Please opens or updates a Release PR automatically:

```
chore(main): release 1.2.0
```

This PR bumps the version in `package.json` and regenerates `CHANGELOG.md`.

**Step 3** — When you merge the Release PR:

- A git tag is created (`v1.2.0`)
- A GitHub Release is published with the changelog
- The production deploy is triggered via Vercel

### Version Bumping Rules

| Commits include            | Version change | Example       |
| -------------------------- | -------------- | ------------- |
| Only `fix`, `perf`, `docs` | Patch          | 1.0.0 → 1.0.1 |
| Any `feat`                 | Minor          | 1.0.0 → 1.1.0 |
| Any `feat!` or `BREAKING`  | Major          | 1.0.0 → 2.0.0 |

### When to Merge the Release PR

The Release PR stays open and updates automatically as you merge more commits. You control when to ship:

- **Regular cadence** — merge weekly or after a meaningful batch of features
- **Hotfix** — merge immediately after a critical bug fix
- **No rush** — leaving it open is fine; it will keep accumulating changes

### Commits Hidden from the Changelog

These types are excluded from the public changelog by default:

- `chore` — maintenance tasks
- `style` — code formatting
- `test` — test changes

They still contribute to the Release PR update but won't appear in the release notes.

---

## Scripts Reference

| Command                 | Description                     |
| ----------------------- | ------------------------------- |
| `npm run dev`           | Start dev server (port 5173)    |
| `npm run build`         | Production build                |
| `npm run preview`       | Preview the production build    |
| `npm run lint`          | Run ESLint                      |
| `npm run lint:fix`      | Run ESLint with auto-fix        |
| `npm run format`        | Format with Prettier            |
| `npm run format:check`  | Check formatting (used in CI)   |
| `npm run typecheck`     | TypeScript type checking        |
| `npm run test:run`      | Run Vitest once                 |
| `npm run test`          | Run Vitest in watch mode        |
| `npm run test:coverage` | Run Vitest with coverage report |
| `npm run test:e2e`      | Run Playwright e2e tests        |
| `npm run test:e2e:ui`   | Run Playwright with UI mode     |

> Some scripts above require additional tooling (Vitest, Playwright) not yet installed.
> Run `npm run build` and `npm run typecheck` for the checks that are currently active.
