# darabonakdar.com

Personal website and portfolio of Dara Bonakdar, built with [Jekyll](https://jekyllrb.com/) and deployed via GitHub Pages.

## Stack

- **Jekyll** (via the `github-pages` gem, so local builds match production)
- **No frontend frameworks** — hand-written modern CSS (custom properties, grid, fluid type, automatic dark mode via `prefers-color-scheme`) and a small vanilla-JS file for the mobile nav and scroll-reveal animations
- **Plugins:** `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed`

## Structure

| Path | Purpose |
| --- | --- |
| `_layouts/` | `default` (base), `home`, `page`, `project` |
| `_includes/` | head, nav, footer, inline SVG icons |
| `_projects/` | Portfolio entries (Jekyll collection, one Markdown file each) |
| `assets/css/main.css` | The entire stylesheet |
| `assets/js/main.js` | Nav toggle, scroll reveal, footer year |
| `assets/images/` | Site and project images |

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Adding a project

Create `_projects/my-project.md`:

```yaml
---
title: My Project
type: Virtual Reality
timeframe: January 2026
image: my-thumbnail.jpg   # placed in assets/images/
image_fit: contain        # optional, for logo-style thumbnails
order: 4                  # position in the grid
---

Markdown content here.
```

## Deployment

Pushing to the default branch triggers GitHub Pages' built-in Jekyll build. The custom domain is configured in `CNAME`.
