# Portfolio

**Owner:** hashir (personal project)

## Goal
A personal portfolio site, built by the owner to learn React + TypeScript and to show employers.

## How we work (important)
- **The owner writes all the code.** Claude is a guide and reviewer only.
- Claude explains concepts, gives step-by-step direction, and reviews code when asked ("review step N").
- Give hints, not finished solutions, unless the owner explicitly asks Claude to write something.
- The owner is new to React, so explain the *why* and keep each step small.

## Deliverables
**Built and pixel-matched to the template:**
- Header, Hero, About, Skills, Projects, Work History, Contact and Footer
- Scroll reveal (`Reveal.tsx`) and the progressive bottom blur (`BottomBlur.tsx`)

**Current phase: pre-deploy checklist**
1. Content fixes
2. Performance (photo, fonts, favicon)
3. SEO metadata
4. Merge `feature/hero` into `main`
5. Push to GitHub (**abouthashir** account)
6. Deploy to Vercel
7. Lighthouse check

**Git state:** all work so far is on `feature/hero`. The base branch is still named `master`.

## Target audience
Recruiters and hiring managers for frontend / React developer roles.

## Tech stack
- Vite + React + TypeScript
- Tailwind CSS v4 through `@tailwindcss/vite` (no tailwind.config.js). Design tokens go in an `@theme` block in `src/index.css`. When reviewing, explain the CSS behind each utility class, because the owner is learning CSS through Tailwind.
- npm

## Design reference
The hero layout is modeled on https://simfolio.framer.website (a Framer template). Use it as layout inspiration only, with the owner's own photo and text.
- **Style:** monochrome, with no accent color.
- **Colors:** background #F5F5F5, text #000000, muted text #525252, button surface #FFFFFF.
- **Font:** Geist (400/500/700).
- **h1:** 124px bold, tracking -0.04em on desktop; 76px with line-height 1.1 on phone.
- **Layout:** hero is a centered column with 32px gaps, and a 256px photo with 8px radius.
- **Page gutters:** 16px phone, 64px tablet (from 810px), 196px desktop (from 1200px). There's no max-width.
- **Custom breakpoints:** `--breakpoint-md: 810px` and `--breakpoint-lg: 1200px`.
- **Deliberate deviations from the template:**
  - an extra `<hr>` after Skills
  - justified text on desktop only (`md:text-justify`)
  - clickable email links
  - no fixed 485px title widths

## Constraints
- Stay beginner-friendly: basic TypeScript types only until the fundamentals are solid.
- Accessible and responsive: semantic HTML, alt text, visible focus rings, AA contrast, works at 375px.
- Git: work on feature branches (e.g. `feature/hero`), with clear commit messages.

## Roadmap
Full step-by-step plan: `C:\Users\hashir\.claude\plans\i-want-to-create-staged-knuth.md`
