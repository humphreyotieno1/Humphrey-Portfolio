# Humphrey — Magazine Portfolio

A lighter, editorial take on the main portfolio. Inspired by [Treto](https://html.bslthemes.com/treto/?storefront=envato-elements): cream paper tones, serif headlines, sidebar navigation, and story-driven chapters.

## Run locally

```bash
cd magazine
npm install
npm run dev
```

Opens on **http://localhost:3001** (separate from the main portfolio on 3000).

## Structure

- `src/data/content.ts` — all copy, projects, skills, and links in one place
- `src/components/` — simple sections with no animation libraries
- Runs independently from `portfolio-nextjs/`

## Assets

Project thumbnails and the portrait load from the live portfolio CDN (`humphrey.techbiteventures.com`). To use local assets instead, copy images into `magazine/public/` and update paths in `content.ts`.

## Deploy

Deploy the `magazine/` folder as its own Vercel/Netlify project, or add a monorepo workspace entry if you prefer one repo, two sites.
