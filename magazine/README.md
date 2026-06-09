# Humphrey Otieno — Live Portfolio

**Production site:** [https://humphrey.techbiteventures.com](https://humphrey.techbiteventures.com)

The live portfolio is the **`magazine/`** Next.js app — an editorial, magazine-style single-page site.

## Deploy

Point your host (e.g. Vercel) at the **`magazine`** directory as the project root.

Required environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://humphrey.techbiteventures.com

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_DEFAULT_SENDER=
MAIL_FROM_NAME=Humphrey Otieno
MAIL_TO=
```

See `CONTACT_SETUP.md` for contact form email setup.

## Run locally

```bash
cd magazine
npm install
cp .env.example .env
npm run dev
```

Opens on **http://localhost:3001**.

## Repo layout

| Folder | Status |
|--------|--------|
| **`magazine/`** | **Live production portfolio** |
| `portfolio-nextjs/` | Previous full portfolio (archived reference) |
| `client/` | Legacy React/Vite app |

## Content

Edit **`magazine/src/data/content.ts`** for copy, projects, certifications, and services.

Assets live in **`magazine/public/`**.

## SEO

- Metadata, Open Graph, Twitter cards
- `/sitemap.xml` and `/robots.txt`
- JSON-LD (Person, WebSite, Organization)
- Google Search Console verification (meta + HTML file in `public/`)

Set `NEXT_PUBLIC_SITE_URL` to your production URL before building.
