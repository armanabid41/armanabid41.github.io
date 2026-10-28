# Arman Hossain Abid — deployment checklist

## Local

1. Edit `.env`:
   - `VITE_BASE=/` for `https://armanabid41.github.io` or a custom domain.
   - `VITE_BASE=/repo-name/` for a GitHub Pages project site.
   - Set `VITE_SITE_URL` to the exact public URL, with no trailing slash.
   - Add `VITE_CF_BEACON_TOKEN` only if Cloudflare Web Analytics is enabled.
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Verify the pages and project links.
5. Build: `npm run build`
6. Preview: `npm run preview`

## GitHub Pages

- For a user site, use a repository named `armanabid41.github.io` and keep `VITE_BASE=/`.
- For a project site, use `VITE_BASE=/repository-name/` and make `VITE_SITE_URL` match that public path.
- GitHub Actions must run `npm install` (there is intentionally no committed lockfile in this package), then `npm run build`, and deploy `dist/` with the official GitHub Pages actions.
- The build now creates route-level HTML files, `sitemap.xml`, `robots.txt`, and `404.html`.

## Content

Edit the files under `src/data/` and replace the image placeholders under `public/images/`.

## Analytics

Cloudflare Web Analytics is optional. The public visitor counter remains hidden behind `VITE_STATS_ENDPOINT` and only displays numbers returned by your own aggregate endpoint. No fake visitor numbers are generated.
