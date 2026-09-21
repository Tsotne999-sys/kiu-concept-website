# KIU — Shape the Future

A cinematic, independent portfolio concept for Kutaisi International University. This is **not the official KIU website** and is not affiliated with or endorsed by KIU.

## Run locally

Requires Node.js 20.9+ and pnpm (the locked tool version is in `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000.

```sh
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm start
```

`pnpm build` creates a static export in `out/`. `pnpm start` serves that export. Stop the development server before starting the production preview on the same port. You can deploy `out/` to a static host; it requires no database, environment variables or API keys.

## Architecture and learning notes

- **Next.js App Router** supplies routing, metadata and static generation. `src/app/page.tsx` composes the page from section components. `layout.tsx` defines global metadata, styles, font preloading and the skip link. The static landing page renders directly; its CSS entrance sequence provides the loading transition without a blocking spinner.
- **React + TypeScript** keep component contracts explicit. Static editorial sections remain Server Components. Only interactive components have `"use client"`.
- **Tailwind CSS 4** provides the CSS pipeline, reset and utility layer. `globals.css` defines the art direction, named layout classes, media queries, and shared design tokens. Complex editorial styling stays readable in one stylesheet.
- **Framer Motion** handles viewport reveals, the hero's scroll-linked image transform, topic transitions and number counters. Scroll values update transforms without React rendering on every scroll event. GSAP is intentionally omitted because these interactions do not need a second animation engine.
- **V2 motion** uses a staggered CSS headline entrance, spring-smoothed desktop pointer movement, once-per-visit section and image reveals, and restrained photography parallax. `useAmbientMotion` switches off continuous photo movement for touch screens and reduced-motion preferences. The code interface uses finite line/caret animations rather than a permanent animation loop.
- **Keyboard interaction** includes a mobile menu with inert closed links, active-section indicators, and a computing tablist supporting arrow keys, Home and End. Counters update MotionValues directly and reserve their final width to avoid layout shifts.
- **Lucide** supplies consistent, lightweight SVG icons.
- **Native `<dialog>`** provides modal semantics, focus trapping and Escape support. `DetailDialog` restores focus to the opening control and locks background scrolling.
- Images are locally served **WebP** assets. The hero is prioritized; below-the-fold images are lazy-loaded. The Manrope font is self-hosted to avoid external font requests during page load.

## Files to start with

```text
src/
  app/
    page.tsx              # Section composition
    layout.tsx            # Metadata, global styles, skip link
    globals.css           # Theme, editorial layouts, responsive styling
    experience.css        # V2 motion, interaction and mobile refinements
  components/
    navigation.tsx        # Glass navigation and mobile menu
    hero.tsx              # Cinematic hero and parallax
    editorial.tsx         # About, CTA, footer
    student-life.tsx      # Cinematic photography and layered text
    programs.tsx          # Program cards and topic details
    computer-science.tsx  # Interactive computing feature
    campus.tsx            # Campus photo gallery
    statistics.tsx        # Demo counters
    detail-dialog.tsx     # Shared accessible modal
    motion.tsx            # Reusable viewport reveal
  lib/
    content.ts            # Programs, campus photos, topics, DEMO statistics
    use-media-query.ts    # Hydration-safe viewport and motion preferences
public/
  images/                 # Replaceable locally optimized photos
  fonts/                  # Self-hosted Manrope font and license
```

## Replace concept content

1. Replace `public/images/` assets and edit their paths and alt text in `src/lib/content.ts`. The hero photo is set in `src/components/hero.tsx`; the student-life photo is set in `src/components/student-life.tsx`.
2. `DEMO_STATISTICS` in `content.ts` contains intentionally fictional figures. Every value is labeled as demo data on the page. Replace them only with verified, sourced KIU statistics, then update the visible demo notice appropriately.
3. Academic areas and topic descriptions are editorial concept content, not a verified program catalogue, curriculum or research-project list.
4. The Apply button opens KIU's official homepage for current admissions information. It does not imply that this concept processes applications.
5. See `ASSETS.md` for image provenance. Replace reference photographs with owned or cleared assets before a public portfolio release.

## Accessibility and motion

Semantic landmarks, a single h1, labelled buttons, visible focus indicators, mobile navigation with `aria-expanded`, native dialogs, Escape dismissal, focus restoration, descriptive image alt text, and `prefers-reduced-motion` support are included. Content is visible in server HTML without waiting for JavaScript. A redundant route loading boundary was removed so this single static page cannot remain behind a spinner when scripts are disabled.

The site is intentionally marked `noindex` as a concept. Do not remove the independent-concept notices in any presentation that could imply university endorsement.

V2 adds ESLint with the Next.js Core Web Vitals and TypeScript rules. TypeScript 6 is pinned for compatibility with the TypeScript ESLint parser; the production UI dependencies are unchanged. The only approved dependency build script is the lint resolver's native-binding setup, recorded in `pnpm-workspace.yaml`.
