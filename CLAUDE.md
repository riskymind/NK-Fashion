# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via next lint
```

There are no tests.

## Architecture

Single-page marketing site for a bespoke Ankara tailor in Owerri, Nigeria. One route (`app/page.tsx`) renders all sections as a flat list of components in page order.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · GSAP 3

### Styling

All design tokens live as CSS custom properties in `app/globals.css` under `:root`. Components use `var(--ink)`, `var(--cream)`, `var(--gold)`, etc. via inline styles — not Tailwind utility classes. Tailwind is imported only for its base reset (`@import "tailwindcss"`).

Dark theme is implemented via `[data-theme="dark"]` on `<html>`, which overrides `--ink`, `--cream`, and navbar surface variables. The Navbar toggles it and persists the choice to `localStorage`; an inline script in `app/layout.tsx` `<head>` restores the saved theme before first paint.

### Client vs Server components

Most components are plain Server Components. The four that are `"use client"`:

| Component | Why |
|---|---|
| `Navbar` | Theme toggle state + localStorage |
| `Measurements` | Form input state |
| `FloatingCTA` | Scroll-position visibility |
| `ScrollAnimations` | GSAP — runs `useEffect` to animate other sections by DOM selector |

`ScrollAnimations` is renderless (returns `null`) and is mounted at the bottom of the page. It targets other sections by class names like `.nk-step-card`, `.nk-reviews-grid`, etc. defined in `globals.css`.

### Nav anchor IDs

`#work` → Lookbook · `#about` · `#process` · `#reviews`  
(`#services` exists in the DOM but the nav link is commented out.)

### Images

All images are in `public/`. The logo (`icon.jpeg`) is used in Navbar via `next/image` with `fill` layout inside a fixed-size container.
