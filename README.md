# Miranda Bombas

Website for [www.mirandabombas.com.br](https://www.mirandabombas.com.br), built with
[Eleventy](https://www.11ty.dev/) and [Nunjucks](https://mozilla.github.io/nunjucks/) templates.
The output is a plain static site with no client-side JavaScript.

## Development

```sh
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # writes the site to _site/
```

## Where things are

| Path | What |
| --- | --- |
| `src/_data/site.js` | Contact info (phones, WhatsApp, e-mail, address, map) |
| `src/_data/products.js` | Products: home page cards and one page each under `/produtos/` |
| `src/index.njk`, `src/empresa.njk` | Home and company pages |
| `src/produtos/produto.njk` | Product page template |
| `src/_includes/` | Layouts and shared pieces (header, footer, call-to-action) |
| `src/css/`, `src/images/` | Copied as-is to the output |
| `eleventy.config.js` | Eleventy config and the `{% icon %}` shortcode |

## Deployment

Pushing to `master` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).
It also rebuilds every January 1st so the copyright year updates.
