import { defineConfig } from 'astro/config';

// GitHub Actions sets GITHUB_REPOSITORY as owner/repository. For a user site
// (owner.github.io), the base is '/', otherwise it is '/repository/'.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? '';
const isUserSite = repository.endsWith('.github.io');
const hasCustomDomain = Boolean(process.env.SITE_URL);
const pagesOrigin = owner ? `https://${isUserSite ? repository : `${owner}.github.io`}` : undefined;

export default defineConfig({
  site: process.env.SITE_URL || pagesOrigin,
  base: process.env.GITHUB_ACTIONS && repository && !isUserSite && !hasCustomDomain ? `/${repository}` : '/',
  output: 'static',
  build: { format: 'directory' },
});
