# KIU — Shape the Future

A cinematic university website concept built with Next.js, React, and TypeScript.

> **Independent portfolio project.** This is not the official Kutaisi International University (KIU) website. It is not affiliated with, commissioned by, or endorsed by KIU.

## Overview

This project explores a modern digital identity for a university in Kutaisi, Georgia, combining campus photography, a dark green and cream palette, editorial typography, and restrained interaction design. The finished V2 preserves the original visual direction while refining motion, accessibility, and mobile layouts.

The website presents an introduction, academic areas, an interactive Computer Science feature, a campus gallery, demo statistics, student life, and a final call to action. It is a portfolio demonstration, not an admissions service or a verified university information source.

## Technologies

| Technology                    | Purpose                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| Next.js 16 App Router         | Page composition, metadata, and static export               |
| React 19 and TypeScript       | Typed, reusable interface components                        |
| Tailwind CSS 4 and custom CSS | Styling pipeline, design tokens, and responsive layouts     |
| Framer Motion                 | Viewport reveals, parallax, topic transitions, and counters |
| Lucide React                  | Interface icons                                             |
| ESLint and Prettier           | Code quality and consistent formatting                      |
| pnpm                          | Dependency management and reproducible installs             |

Exact dependency versions are recorded in `package.json` and `pnpm-lock.yaml`. GSAP is not required; the interactions use CSS and Framer Motion.

## Key features

- Cinematic hero with staggered headline entrance and subtle desktop pointer and scroll movement.
- Transparent-to-glass navigation, active-section indicators, and an accessible mobile menu.
- Interactive academic cards, with Computer Science visually emphasized.
- Keyboard-operable computing topic tabs and a subtly animated illustrative code interface.
- Campus image reveals, hover interactions, and native detail dialogs.
- Student-life photography with responsive cropping and selective parallax.
- Animated counters explicitly labeled as demo data.
- Responsive layouts, visible keyboard focus, Escape dismissal, and dialog focus restoration.
- Reduced-motion support and primary content that remains visible without JavaScript.
- Local WebP images, a self-hosted font, lazy-loaded secondary photography, and static hosting support.

## Run locally

### Prerequisites

Install Node.js 20.9 or newer and the pnpm version listed in the `packageManager` field of `package.json`.

### Setup

```sh
git clone https://github.com/Tsotne999-sys/kiu-concept-website.git
cd kiu-concept-website
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

No database, environment file, API key, or external service is required to run the website. Next.js generates `next-env.d.ts` locally during development or a build.

### Production preview

```sh
pnpm build
pnpm start
```

The build produces a static export in `out/`. Stop the development server first, since both commands use port 3000. The exported files can be served by a static hosting provider.

### Quality checks

```sh
pnpm lint
pnpm typecheck
pnpm format:check
```

On a fresh checkout, run `pnpm dev` or `pnpm build` once before the standalone type check so Next.js can generate its types. Use `pnpm format` to format application source.

## Project structure

```text
src/
  app/
    page.tsx              # Page sections
    layout.tsx            # Metadata, font preload, and global styles
    globals.css           # Visual identity and layout
    experience.css        # V2 motion and interaction refinements
  components/
    navigation.tsx        # Navigation and mobile menu
    hero.tsx              # Hero entrance and parallax
    editorial.tsx         # About, call to action, and footer
    programs.tsx          # Academic cards
    computer-science.tsx  # Topic tabs and code visualization
    campus.tsx            # Campus gallery
    student-life.tsx      # Student experience photography
    statistics.tsx       # Demo counters
    detail-dialog.tsx    # Shared native dialog
    motion.tsx           # Reusable reveals
  lib/
    content.ts           # Programs, gallery items, topics, and demo data
    use-media-query.ts   # Viewport and motion preference hooks
public/
  images/                # Local photography
  fonts/                 # Self-hosted Manrope and font license
```

Static editorial sections use Server Components; interactive sections use Client Components. Shared motion helpers keep behavior consistent, while media-query hooks disable ambient photography movement on touch screens and for reduced-motion preferences. Counters use MotionValues without a React render on every animation frame.

## Content and image attribution

- **Statistics are fictional demo values**, not verified KIU statistics. They are marked in `DEMO_STATISTICS` in `src/lib/content.ts` and visibly labeled on the page.
- Academic areas and topic descriptions are concept content, not a verified curriculum, program catalogue, or research-project list.
- The Apply link directs visitors to KIU's official homepage. This project does not collect or process applications.
- See [ASSETS.md](ASSETS.md) for photography provenance and usage notes. Inclusion in this repository does not grant rights to third-party photographs or university marks. Replace reference photography with owned or cleared assets before reuse in a public portfolio.
- Replace gallery paths and alt text in `src/lib/content.ts`. Hero and student-life image paths are in their corresponding components.
- The site carries independent-concept notices and is marked `noindex` to avoid presenting it as an official university service.

## V2 validation

The production export was visually reviewed in desktop and mobile Chrome. Checks covered keyboard tabs, dialogs, focus restoration, mobile navigation, internal links, reduced motion, image decoding, JavaScript-disabled content, and overflow at widths from 320px to 1920px. Lint, TypeScript, formatting, and the production build passed. Automated accessibility scans reported no violations in the five tested page, menu, and dialog states; this is not a claim of exhaustive accessibility or cross-browser certification.

## Repository hygiene

Dependencies, generated build output, environment files, local credentials, logs, and editor state are excluded by `.gitignore`. The lockfile is committed for reproducibility. `.openai/hosting.json` contains only the existing static-hosting configuration and project identifier; it contains no credentials.
