# Dharmendra Kumar Singh: portfolio

Personal portfolio site: Home, Projects, Experience and My story.
Built with Next.js 16 (App Router), React 19 and TypeScript, as a fully static site.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npx tsc --noEmit
```

## Edit your details

Contact links live in `src/lib/site.ts`. Empty values fall back to email or the
contact section, so the site never shows a broken link:

- `whatsappNumber`: digits with country code, e.g. `919876543210`
- `github`, `naukri`: full profile URLs
- `cv`: put the PDF in `public/` and set its path, e.g. `/Dharmendra-Kumar-Singh-CV.pdf`

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in the hosting
environment so the sitemap, canonical links and social previews use your domain.

## Structure

- `src/app/`: routes, metadata, sitemap, robots and the social preview image
- `src/views/<page>/`: each page's view (`View.tsx`), its data (`vals.js`) and its
  styles (`styles.css`, scoped under a `.pg-<page>` class)
- `src/styles/theme.css`: dark and light colour tokens
- `public/img/`: photos and site screenshots

Theme choice (dark or light) is saved in `localStorage` and applied before the
first paint.
