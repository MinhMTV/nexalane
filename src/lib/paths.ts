import { slugs, type Language, type PageKey } from '../content/pages';

export function pagePath(lang: Language, page: PageKey = 'home'): string {
  const slug = slugs[lang][page];
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${lang}/${slug}`.replace(/\/$/, '') + '/';
}

export function switchLanguage(lang: Language, page: PageKey): string {
  return pagePath(lang, page);
}
