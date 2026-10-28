// Generates sitemap.xml, robots.txt, route-level static HTML metadata and 404.html.
// Route-level HTML keeps the SPA behavior while giving crawlers/social link unfurlers
// useful title/description/canonical metadata before JavaScript runs.
import fs from 'node:fs';
import path from 'node:path';
import { projects } from '../src/data/projects.js';

const root = process.cwd();
const dist = path.join(root, 'dist');
const envPath = path.join(root, '.env');
const env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const fromFile = (env.match(/^VITE_SITE_URL=(.*)$/m) || [])[1];
const site = (process.env.VITE_SITE_URL || fromFile || 'https://example.com').trim().replace(/\/$/, '');
if (!fs.existsSync(dist)) throw new Error('dist/ does not exist. Run vite build first.');

const routes = [
  { path: '', title: 'Arman Hossain Abid — Electrical Engineering Student & Researcher', description: 'Official website of Arman Hossain Abid, an Electrical Engineering student, researcher, and embedded systems enthusiast at International Islamic University Chittagong.', image: '/images/profile.jpg' },
  { path: 'about', title: 'About — Arman Hossain Abid', description: 'About Arman Hossain Abid: 4th-year EEE student at International Islamic University Chittagong, working with Python, MATLAB, LTspice, Arduino and ESP32.', image: '/images/about.jpg' },
  { path: 'projects', title: 'Projects — Arman Hossain Abid', description: 'Engineering projects by Arman Hossain Abid: patient monitoring, audio frequency analysis, and analog tone generation.', image: '/images/profile.jpg' },
  { path: 'journey', title: 'Journey — Arman Hossain Abid', description: 'The path of Arman Hossain Abid from school to EEE at International Islamic University Chittagong, projects, research, and expected graduation in 2027.', image: '/images/profile.jpg' },
  { path: 'life', title: 'Life — Arman Hossain Abid', description: 'The personal side of Arman Hossain Abid: movies, photography, everyday moments and things he is learning.', image: '/images/profile.jpg' },
  { path: 'notes', title: 'Notes — Arman Hossain Abid', description: 'Technical and personal notes by Arman Hossain Abid on engineering, research, embedded systems and AI.', image: '/images/profile.jpg' },
  { path: 'contact', title: 'Contact — Arman Hossain Abid', description: 'Get in touch with Arman Hossain Abid through email, GitHub, LinkedIn, ResearchGate, Instagram or Facebook.', image: '/images/profile.jpg' },
  ...projects.map((p) => ({
    path: `projects/${p.slug}`,
    title: `${p.title} — Arman Hossain Abid`,
    description: `Project case study: ${p.title}. ${p.summary}`,
    image: p.cover,
  })),
];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const escapeXml = (value) => escapeHtml(value);
const absolute = (p) => `${site}/${p.replace(/^\//, '')}`;

const sourceHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function setMeta(html, route) {
  const url = `${site}/${route.path}`;
  const image = absolute(route.image);
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  out = out.replace(/<meta name="description" content="[^"]*"\s*\/>/i, `<meta name="description" content="${escapeHtml(route.description)}" />`);
  out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${escapeHtml(url)}" />`);
  out = out.replace(/<meta property="og:title" content="[^"]*"\s*\/>/i, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  out = out.replace(/<meta property="og:description" content="[^"]*"\s*\/>/i, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
  out = out.replace(/<meta property="og:url" content="[^"]*"\s*\/>/i, `<meta property="og:url" content="${escapeHtml(url)}" />`);
  out = out.replace(/<meta property="og:image" content="[^"]*"\s*\/>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`);
  const twitterImage = `<meta name="twitter:image" content="${escapeHtml(image)}" />`;
  out = out.replace(/<meta name="twitter:card" content="summary_large_image"\s*\/>/i, `<meta name="twitter:card" content="summary_large_image" />\n  ${twitterImage}`);
  return out;
}

for (const route of routes) {
  if (!route.path) continue;
  const dir = path.join(dist, ...route.path.split('/'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), setMeta(sourceHtml, route));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => `  <url><loc>${escapeXml(`${site}/${r.path}`)}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));
console.log(`postbuild: generated ${routes.length} route HTML files, sitemap.xml, robots.txt and 404.html for ${site}`);
