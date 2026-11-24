# AVERNODE Website

German and English business website built with Astro and deployed as a static site on GitHub Pages.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. GitHub Actions deploys every push to `main`; no manual build or upload is needed after the initial setup. In GitHub, choose **Settings → Pages → Build and deployment → GitHub Actions**.

### Custom domain

1. Register a domain with a registrar.
2. In the repository, open **Settings → Pages → Custom domain** and enter the domain.
3. At the registrar, point DNS to GitHub Pages using the records shown in [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. In **Settings → Secrets and variables → Actions → Variables**, create `SITE_URL` with the full canonical origin, such as `https://www.example.com`.
5. Wait for DNS and certificate setup, then enable **Enforce HTTPS** in Pages settings.

## Before launch

- Enter the correct legal provider name, full service address, and any applicable company register, VAT, chamber, and authority details in `src/config/business.ts`.
- Confirm that `info@minh-vuong.de` and `+49 1577 7240356` are the right public contact details for AVERNODE.
- Set the `SITE_URL` Actions variable to the final canonical origin when using a custom domain. Without it, GitHub Pages builds derive the Pages origin from the repository name.
- After publishing, verify the canonical URLs and submit `/sitemap.xml` in Google Search Console.
- Decide whether to self-host the Google Fonts files as part of the privacy and performance review.
- The contact form sends submissions through FormSubmit to `info@minh-vuong.de`. On the first real submission, complete the activation step sent to that inbox. FormSubmit keeps submission data for 30 days; reflect the selected service and data handling in the site's privacy information before launch.
- The Solutions page presents practical solution concepts, not customer references or measured results. Publish customer names, quotes or outcomes only after verification and permission.

## Project map

- `src/content/pages.ts` — German and English page copy
- `src/config/business.ts` — brand, contact, and legal details
- `src/layouts/SiteLayout.astro` — shared metadata, language links, navigation, and footer
- `src/pages/` — page routes and generated sitemap
- `src/components/FlowVisual.astro` — workflow and system diagrams
- `src/components/ExampleProjects.astro` — common business tasks and solution concepts
- `src/components/PracticalProjects.astro` — practical invoice, quote and expense workflow concepts
- `src/components/ContactForm.astro` — on-page contact form and FormSubmit delivery
- `src/components/SavingsCalculator.astro` — editable estimate of annual capacity value
- `public/` — brand assets and crawler rules
