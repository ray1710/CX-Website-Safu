# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

The actual Next.js application lives in `app/` — that subdirectory is the npm project root (`package.json`, `node_modules`, all source). Run all commands below from `app/`, not the repo root. Inside it, the App Router directory is *also* named `app`, so paths look like `app/app/page.tsx`, `app/app/contact/page.tsx`, etc. — don't confuse the outer `app/` (project folder) with the inner `app/app/` (Next.js routes).

`app/AGENTS.md` flags that the Next.js version in this repo has breaking changes vs. training data — read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices.

## Commands

Run from `app/`:

```
npm run dev      # start Next.js dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

There is no test suite/framework configured in this repo.

Sanity Studio is mounted inside the Next app at `/studio` (via `app/app/studio/[[...tool]]/page.tsx`) — it runs with `npm run dev`, no separate process needed. `sanity.cli.ts` exists only so the `sanity` CLI can be invoked from within `app/` if needed (e.g. `npx sanity ...`).

Required env vars (`app/.env.local`, not committed): `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_PROJECT_ID`.

## Architecture

**Stack**: Next.js App Router + TypeScript + Tailwind CSS v4, content authored in Sanity (embedded Studio), forms via `react-calendly` (Calendly embed) and a not-yet-built `/api/contact` endpoint. `styled-components` is a listed dependency but unused — don't reach for it, everything is Tailwind utility classes with inline hex colors (e.g. `#0e1320`, `#c9a464`, `#faf8f4`).

**Content flow (per page)**: every route in `app/app/*/page.tsx` is an async Server Component that:
1. Fires parallel GROQ queries via `client.fetch(...)` from `app/sanity/lib/client.ts` (one query per page section/document type, e.g. `*[_type == "heroSection"][0]`).
2. Spreads each result straight into a matching presentational component in `app/_components/` (e.g. `{...hero}` → `<HeroSection {...hero} />`), so a component's prop shape is defined by its corresponding Sanity schema, not by a separate types file.
3. Every page sets `export const revalidate = 0` (no ISR caching — always fetch fresh).

Adding a new content-driven section means three coordinated pieces: a schema in `app/sanity/schemaTypes/*.ts` (registered in `schemaTypes/index.ts`), an entry in `app/sanity/structure.ts` (controls where it shows up in the Studio sidebar), and a query + prop-spread in the consuming `page.tsx`.

`app/_components/` mirrors the route structure: shared components at the top level (`navbar.tsx`, `footer.tsx`, `finalCTA.tsx`), page-specific ones nested by route (`about/`, `contact/`, `services/`, `testimonials/`).

Sanity image URLs go through `app/sanity/lib/image.ts` (`urlFor()`); remote image loading is restricted to `cdn.sanity.io` in `next.config.ts`.

`app/sanity/lib/live.ts` sets up `sanityFetch`/`SanityLive` for the live-content API but it isn't wired into `layout.tsx` yet — pages currently use the plain `client.fetch` pattern above instead.

## Site scope

`app/developer-reference.txt` is the authoritative build checklist: which pages must exist, what content each needs, and what's still pending from the client (photos, logos, more case studies, booking link, etc.). Built so far: `/`, `/about`, `/services`, `/contact`, `/testimonials`, plus `/studio`. Not yet started: `/programs`, `/case-studies`, `/book` (the contact page currently embeds Calendly inline instead of a dedicated `/book` route), `/blog`.

The contact form (`app/_components/contact/contactForm.tsx`) already posts to `/api/contact`, but that route doesn't exist yet in `app/api/` — submitting the form will currently fail.
