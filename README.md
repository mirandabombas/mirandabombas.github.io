# Miranda Bombas

Website for [www.mirandabombas.com.br](https://www.mirandabombas.com.br): plain HTML pages
with a shared layout, and no client-side JavaScript.

## Development

```sh
go run .    # writes the site to _site/
```

While editing, rebuild on every change with [watchexec](https://github.com/watchexec/watchexec) and serve `_site/`
in another terminal (pages use absolute paths like `/css/style.css`, so opening the files directly doesn't work):

```sh
watchexec -w layout -w pages -w static go run .
python3 -m http.server -d _site 8080    # http://localhost:8080
```

## How it works

`build.go` (Go standard library only) renders every file in `pages/` inside `layout/base.html`,
using [`html/template`](https://pkg.go.dev/html/template), and writes it to the same path under `_site/`.
`pages/produtos/boia.html` becomes `/produtos/boia.html`.

A page is plain HTML split into named blocks:

```html
{{define "title"}}Boia Elétrica · Miranda Bombas{{end}}
{{define "description"}}Text for search results and link previews.{{end}}
{{define "head"}}<meta property="og:image" content="…">{{end}}   <!-- optional -->

{{define "content"}}
  …page HTML…
  {{template "cta"}}
{{end}}
```

| Path | What |
| --- | --- |
| `pages/` | One file per page |
| `layout/base.html` | The `<html>`/`<head>`/`<body>` skeleton |
| `layout/header.html`, `footer.html`, `cta.html` | Shared pieces, used as `{{template "name" .}}` |
| `layout/icons.html` | SVG icons, used as `{{template "icon-phone"}}` |
| `layout/empresa-intro.html` | Opening paragraphs of the company text, on both the home and company pages |
| `static/` | Copied as-is (CSS, images, CNAME) |

Contact details (phones, WhatsApp link, e-mail) are written directly in the HTML; search and replace to change them.

Text is copied to the output as written, so write it as HTML (`&amp;` for `&`). A straight `"` in `title` or
`description` fails the build, since those end up inside attributes; use typographic quotes (“ ”) instead.

## Deployment

Pushing to `master` builds and deploys via GitHub Actions (`.github/workflows/deploy.yml`).
It also rebuilds every January 1st so the copyright year updates.
The repository's Pages source must be set to "GitHub Actions" (Settings → Pages).
