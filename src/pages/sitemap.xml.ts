import type { APIRoute } from 'astro';
import { pagePath } from '../lib/paths';
import { slugs, type Language, type PageKey } from '../content/pages';

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE;
  const routes: Array<[Language, PageKey]> = [];
  for (const language of ['de', 'at', 'en'] as const) {
    for (const page of Object.keys(slugs[language]) as PageKey[]) routes.push([language, page]);
  }
  const entries = site
    ? routes.map(([language, page]) => `  <url><loc>${new URL(pagePath(language, page).replace(/^\/+/, ''), site).toString()}</loc></url>`).join('\n')
    : '';
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
